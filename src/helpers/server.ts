"use server";
import nodemailer from "nodemailer";

// -- AUTHENTICATION -- //
// for the user session_token
export async function generateVerificationCodeWithExpirationTime() {
	const code = Math.floor(100000 + Math.random() * 900000).toString();

	let codeExpirationTime: Date = new Date();

	codeExpirationTime.setMinutes(codeExpirationTime.getMinutes() + 30);

	let sessionTokenExpirationTime: Date = new Date();

	sessionTokenExpirationTime.setMinutes(
		sessionTokenExpirationTime.getMinutes() + 1440
	);

	return { code, codeExpirationTime, sessionTokenExpirationTime };
}

// -- EMAIL TEMPLATES -- //
// send email template: universal noreply
export const sendEmailNoReply = async (
	mail: string[],
	subject: string,
	htmlBody: string
) => {
	let transporter = nodemailer.createTransport({
		host: process.env.EMAIL_HOST,
		port: 465,
		secure: true, // true for 465, false for other ports
		auth: {
			user: process.env.EMAIL_NOREPLY, // generated ethereal user
			pass: process.env.EMAIL_NOREPLY_PASS // generated ethereal password
		},
		tls: {
			rejectUnauthorized: false
		}
	});

	let info = await transporter.sendMail({
		from: "Pastor Gary Mack <noreply@pastorgarymack.com>",
		to: mail,
		subject,
		text: "",
		html: htmlBody
	});

	console.info(`Message sent: ${info.messageId}`);
};
// send email template: conact via form
export const sendEmailContact = async (
	mail: string[],
	subject: string,
	htmlBody: string
) => {
	let transporter = nodemailer.createTransport({
		host: process.env.EMAIL_HOST,
		port: 465,
		secure: true, // true for 465, false for other ports
		auth: {
			user: process.env.EMAIL_NOREPLY, // generated ethereal user
			pass: process.env.EMAIL_NOREPLY_PASS // generated ethereal password
		},
		tls: {
			rejectUnauthorized: false
		}
	});

	let info = await transporter.sendMail({
		from: "Pastor Gary Mack <noreply@pastorgarymack.com>",
		to: mail,
		subject,
		text: "",
		html: htmlBody
	});

	console.info(`Message sent: ${info.messageId}`);
};

// -- API ENDPOINTS -- //
// response object
export type ResponseObject = {
	success: boolean | null;
	message: string | null;
	data: any | null;
	status: number | undefined;
};
// instantiate
let ResponseObject: ResponseObject;

// printify store api
const PrintifyApiKey = process.env.PRINTIFY_API_KEY;
const PrintifyShopId = process.env.PRINTIFY_SHOP_ID;
const PrintifyBaseUrl = process.env.PRINTIFY_BASE_URL;

// function to get all products available
export const getAllStoreProducts = async (): Promise<ResponseObject> => {

	try {

    // make sure env vars are filled
		if (!PrintifyApiKey || !PrintifyShopId || !PrintifyBaseUrl) {

			ResponseObject = {
				success: false,
				message: "Server configuration issue, try again later...",
				data: null,
				status: 500
			};

			return ResponseObject;
		}

		const requestStoreItem = await fetch(
			`${PrintifyBaseUrl}/shops/${PrintifyShopId}/products.json`,
			{
				next: { revalidate: 86400 }, // Cache for 1 hour
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${PrintifyApiKey}` // Fixed typo here
				}
			}
		);

		if (!requestStoreItem.ok) {

			const errorData = await requestStoreItem.json();

			ResponseObject = {
				success: false,
				data: errorData,
				message: "Error retrieving store items from Printify",
				status: requestStoreItem.status
			};

			return ResponseObject;

		}

		const responseStoreItems = await requestStoreItem.json();

		ResponseObject = {
			success: true,
			data: responseStoreItems,
			message: "Store items retrieved successfully!",
			status: 200
		};

		return ResponseObject;

	} catch (error) {

		console.error("Printify GET All Products API Error:", error);

		let ResponseObject = {
			success: false,
			message: "Internal Server Error",
			data: null,
			status: 500
		};

		return ResponseObject;
	}
};

export const getStoreSingleProduct = async (productId: string) => {

	try {

		if (!PrintifyApiKey || !PrintifyShopId) {

			ResponseObject = {
				success: false,
				message: "Server configuration issue, try again later...",
				data: null,
				status: 500
			};

			return ResponseObject;

    }

		const requestStoreItem = await fetch(
			`${PrintifyBaseUrl}/shops/${PrintifyShopId}/products/${productId}.json`,
			{
				method: "GET",
				next: { revalidate: 86400 },
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${PrintifyApiKey}` // Fixed typo here
				}
			}
		);

		if (!requestStoreItem.ok) {

			const errorData = await requestStoreItem.json();

			ResponseObject = {
				success: false,
				data: errorData,
				message: "Error retrieving store items from Printify",
				status: requestStoreItem.status
			};

			return ResponseObject;

		}

		const responseStoreItems = await requestStoreItem.json();

		ResponseObject = {
			success: true,
			data: responseStoreItems,
			message: "Store items retrieved successfully!",
			status: 200
		};

		return ResponseObject;

	} catch (error) {

		console.error("Printify GET Single Product API Error:", error);

		let ResponseObject = {
			success: false,
			message: "Internal Server Error",
			data: null,
			status: 500
		};

		return ResponseObject;

	}
};

export const generateCheckoutIdempotencyKey = async (userId: string) => {

  if (userId) {
    const uuid = crypto.randomUUID();
    return `user-${userId}-${uuid}`;
  }

  return undefined

}