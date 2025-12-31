import { EbookReader } from "@/components/books/EbookReader";

export default async function DigitalBookReaderPage({
	params
}: {
	params: Promise<{ productId: string }>;
}) {

  const { productId } = await params;

	return (
		<main className="bg-black" role="main">
			<EbookReader productId={productId} />
		</main>
	);
}