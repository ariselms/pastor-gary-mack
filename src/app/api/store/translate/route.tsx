import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import Groq from "groq-sdk";
import crypto from "crypto";
import { TRANSLATE_ARRAYS_TO_SPANISH } from "@/system-prompts";

const MODEL_ID = "llama-3.3-70b-versatile";
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

/**
 * Creates a unique hash for the tag array to use as a DB key.
 */
const generateCacheKey = (tags: string[]) => {
	const normalized = tags.map((t) => t.toLowerCase().trim()).sort();
	return crypto
		.createHash("md5")
		.update(JSON.stringify(normalized))
		.digest("hex");
};

export async function POST(req: Request) {
	try {
		const body = await req.json();
		const { tags } = body;

		if (!tags || !Array.isArray(tags)) {
			return NextResponse.json(
				{ success: false, message: "Invalid tags array" },
				{ status: 400 }
			);
		}

		// 1. Generate unique key and check Vercel/Neon Cache
		const cacheKey = generateCacheKey(tags);
		const { rows } = await sql`
      SELECT translated_data FROM product_tag_caches
      WHERE cache_key = ${cacheKey}
      LIMIT 1
    `;

		if (rows.length > 0) {
			return NextResponse.json({
				success: true,
				message: "Traducción recuperada del caché.",
				data: rows[0].translated_data
			});
		}

		// 2. Cache Miss: Call Groq AI
		const conversation = [
			{ role: "system", content: TRANSLATE_ARRAYS_TO_SPANISH },
			{ role: "user", content: JSON.stringify(tags) }
		];

		const completion = await groq.chat.completions.create({
			model: MODEL_ID,
			messages: conversation as any,
			response_format: { type: "json_object" },
			temperature: 0.1
		});

		const rawContent = completion.choices[0]?.message?.content;
		const jsonContent = rawContent ? JSON.parse(rawContent) : { tags: [] };
		const translatedArray = jsonContent.tags || [];

		// 3. Store results in Neon for next time
		// We stringify the array so Vercel Postgres treats it as a single JSONB block
		await sql`
      INSERT INTO product_tag_caches (cache_key, translated_data)
      VALUES (${cacheKey}, ${JSON.stringify(translatedArray)})
      ON CONFLICT (cache_key) DO NOTHING
    `;

		return NextResponse.json({
			success: true,
			message: "Traducción generada por IA y guardada.",
			data: translatedArray
		});
	} catch (error) {
		console.error("Error translating tags: ", error);
		return NextResponse.json(
			{
				success: false,
				message: "Error al procesar la traducción.",
				data: []
			},
			{ status: 500 }
		);
	}
}
