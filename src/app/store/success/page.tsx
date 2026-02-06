import Spinner from "@/components/Spinner";
import { StripeSuccessPageContent } from "@/components/pages-content/SuccessPageContent";
import { Suspense } from "react";

export default async function StripeSuccessPage() {

	return (
		<Suspense fallback={<Spinner />}>
			<main className="bg-black" role="main">
				<StripeSuccessPageContent />
			</main>
		</Suspense>
	);
}
