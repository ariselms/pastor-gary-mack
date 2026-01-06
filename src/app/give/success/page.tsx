import { StripeGiveSuccessPageContent } from "@/components/pages-content/SuccessPagesContent";
import Spinner from "@/components/Spinner";
import { Suspense } from "react";

export default async function StripeSuccessPage() {

	return (
		<Suspense fallback={<Spinner />}>
			<main className="bg-black" role="main">
				<StripeGiveSuccessPageContent />
			</main>
		</Suspense>
	);
}