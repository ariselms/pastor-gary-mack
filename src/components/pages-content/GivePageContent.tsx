"use client";
import { useState } from "react";
import { useLanguageContext } from "@/context/languageContext";
import { donationFrequencyOptions, languageOptions } from "@/static";
import { JumbotronShared } from "@/components/jumbotron/";
import { useAuthContext } from "@/context/authContext";
import { useRouter } from "next/navigation";

export function GivePageContent() {
	// hooks call
	const { language } = useLanguageContext();
	const { user } = useAuthContext();
	const router = useRouter();

	// state
	const [amount, setAmount] = useState<number | "">(25); // Default selection
	const [isCustom, setIsCustom] = useState(false);
	const [frequency, setFrequency] = useState<"payment" | "subscription">(
		"payment"
	);
	const [loading, setLoading] = useState(false);

	// predifined donation amounts
	const predefinedAmounts = [10, 25, 50, 100];

	const handleDonate = async () => {
		try {
			setLoading(true);

			// 1. Validate
			if (!amount || Number(amount) <= 0) {
				alert("Please enter a valid amount");
				setLoading(false);
				return;
			}

			const donationData = {
				amount,
				frequency,
				imageUrl:
					frequency === donationFrequencyOptions.payment.value
						? "https://pastorgarymack.com/images/give-heart.png"
						: "https://pastorgarymack.com/images/give-heart-both-hands.png"
			};

			// 2. Call our API
			const donationRequest = await fetch("/api/checkout/donations", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ donationData, user })
			});

			const donationResponse = await donationRequest.json();

			const { url } = donationResponse;

			if (url) {
				router.push(url);
			} else if (!donationResponse.success){
        alert(donationResponse.message);
        setLoading(false);
        return;
      }

		} catch (error) {

			console.error("Donation error: ", error);

		} finally {

			setLoading(false);

		}
	};

	return (
		<>
			<JumbotronShared
				topSmTitle={
					language === languageOptions.english
						? "2 Corinthians 9:7"
						: "2 Corintios 9:7"
				}
				mainTitle={
					language === languageOptions.english
						? "Giving and Donations"
						: "Ofrendas y Donaciones"
				}
				mainText={
					language === languageOptions.english
						? "Thank you for visiting our giving and donations page. We are grateful of any amount in support of our ministry. Your contribution makes a difference."
						: "Gracias por visitar nuestra página de ofrendas y donaciones. Estamos muy agradecidos con cualquier cantidad en apoyo a nuestro ministerio. Tu aportación hace la diferencia."
				}
			/>
			<section className="py-16">
				<div className="max-w-md mx-auto p-4 border border-slate-700 rounded-lg bg-slate-800/50 backdrop-blur-lg shadow-2xl">
					<h2 className="text-2xl font-bold text-center mb-6 text-slate-100">
						{language === languageOptions.english
							? "Support Gary Mack"
							: "Apoya a Gary Mack"}
					</h2>

					{/* Frequency Toggle */}
					<div className="flex bg-slate-900/50 p-1 rounded-lg mb-6 border border-slate-700/50">
						<button
							onClick={() => setFrequency("payment")}
							className={`flex-1 py-2 rounded-md text-sm font-medium transition-all ${
								frequency === "payment"
									? "bg-slate-700 text-slate-100 shadow-sm border border-slate-600"
									: "text-slate-400 hover:text-slate-200"
							}`}>
							{language === languageOptions.english
								? "One-Time Donation"
								: "Donar Una Vez"}
						</button>
						<button
							onClick={() => setFrequency("subscription")}
							className={`flex-1 py-2 rounded-md text-sm font-medium transition-all ${
								frequency === "subscription"
									? "bg-slate-700 text-slate-100 shadow-sm border border-slate-600"
									: "text-slate-400 hover:text-slate-200"
							}`}>
							{language === languageOptions.english
								? "Donate Monthly"
								: "Donar Mensual"}
						</button>
					</div>

					{/* Amount Grid */}
					<div className="grid grid-cols-2 gap-3 mb-4">
						{predefinedAmounts.map((val) => (
							<button
								key={val}
								onClick={() => {
									setAmount(val);
									setIsCustom(false);
								}}
								className={`py-3 px-4 rounded-lg border text-lg font-medium transition-all ${
									!isCustom && amount === val
										? "border-slate-400 bg-slate-700 text-slate-100 shadow-inner"
										: "border-slate-700 text-slate-400 hover:border-slate-500 hover:bg-slate-700/50 hover:text-slate-200"
								}`}>
								${val}
							</button>
						))}
					</div>

					{/* Custom Amount Input */}
					<div className="mb-6">
						<div
							className={`flex items-center border rounded-lg px-3 py-3 transition-colors bg-slate-900/30 ${
								isCustom
									? "border-slate-400 ring-1 ring-slate-400"
									: "border-slate-700 hover:border-slate-600"
							}`}
							onClick={() => setIsCustom(true)}>
							<span className="text-slate-400 mr-2 text-lg">$</span>
							<input
								type="number"
								value={amount}
								onChange={(e) => {
									setAmount(Number(e.target.value));
									setIsCustom(true);
								}}
								placeholder="Other amount"
								className="w-full bg-transparent outline-none text-lg text-slate-100 font-medium placeholder:text-slate-600"
							/>
						</div>
					</div>

					{/* Donate Button */}
					<button
						onClick={handleDonate}
						disabled={loading}
						className="w-full bg-slate-100 hover:bg-white text-slate-900 font-bold py-4 rounded-lg text-lg transition-all active:scale-[0.98] disabled:opacity-70 shadow-lg shadow-slate-900/20">
						{loading
							? `${language === languageOptions.english ? "Processing" : "Procesando"}...`
							: `${language === languageOptions.english ? "Donate" : "Donar"} $${amount || "0"} ${frequency === donationFrequencyOptions.subscription.value ? "/ mo" : ""}`}
					</button>

					<p className="text-center text-xs text-slate-500 mt-4">
						{language === languageOptions.english
							? "Secure payment powered by Stripe"
							: "Pago seguro con Stripe"}
					</p>
				</div>
			</section>
		</>
	);
}
