"use client";

import { useState, useEffect, Suspense } from "react"; // Import Suspense
import {Container7xl} from "@/components/containers";
import AuthForm from "@/forms/AuthForm";
import { useLanguageContext } from "@/context/languageContext";
import { useAuthContext } from "@/context/authContext";
import { languageOptions } from "@/static";
import CodeForm from "@/forms/CodeForm";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-toastify";

// 1. All of your original logic is moved into this new component.
const LoginFlow = () => {
	const router = useRouter();
	const { user } = useAuthContext();
	const { language } = useLanguageContext();
	const [email, setEmail] = useState("");
	const [code, setCode] = useState("");
	const [codeSent, setCodeSent] = useState(false);
	const [loading, setLoading] = useState(false);

	// This hook is the reason we need Suspense.
	const searchParams = useSearchParams();

	useEffect(() => {
		if (user) {
			router.push("/profile");
		}
	}, [user, router]);

	const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
	};

	const onCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCode(e.target.value);
	};

	const onFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);
		try {
			const request = await fetch("/api/log", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ email, language })
			});
			const response = await request.json();
			if (response.success) {
				setCodeSent(true);
				toast.success(response.message);
			} else {
				throw new Error(response.message);
			}
		} catch (error) {
			const errorMessage =
				error instanceof Error ? error.message : "An error occurred";
			toast.error(errorMessage);
		} finally {
			setLoading(false);
		}
	};

	const onCodeSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);
		try {
			if (!code || !email) {
				throw new Error("Email and code are required");
			}
			if (code.length !== 6) {
				const errorMessage =
					language === languageOptions.english
						? "Code must be 6 digits"
						: "El código debe tener 6 digitos";
				toast.error(errorMessage);
				throw new Error(errorMessage);
			}
			const request = await fetch("/api/auth", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ email, code, language })
			});
			const response = await request.json();
			const redirectUrl = searchParams.get("redirectUrl");

			if (response.success) {
				toast.success(response.message);
				router.push(redirectUrl || "/profile");
			} else {
				throw new Error(response.message);
			}
		} catch (error) {
			const errorMessage =
				error instanceof Error ? error.message : "An error occurred";
			toast.error(errorMessage);
		} finally {
			setLoading(false);
		}
	};

	// The JSX from your original component is returned here.
	return (
		<Container7xl>
			<div className="w-full flex flex-col items-center justify-center py-16">
				{!codeSent ? (
					<>
						<h3 className="text-2xl/9 font-bold tracking-tight text-slate-100 dark:text-white mb-4">
							{language === languageOptions.english
								? "Sign in to your account"
								: "Inicia sesión en tu cuenta"}
						</h3>
						<p className="leading-7 font-normal text-slate-300 dark:text-stone-400 mb-8">
							{language === languageOptions.english
								? "Submit your email and we will send you a code to be able to access your account."
								: "Ingresa tu correo y te enviaremos un codigo para poder acceder a tu cuenta."}
						</p>
						<AuthForm
							onFormSubmit={onFormSubmit}
							onEmailChange={onEmailChange}
							loading={loading}
						/>
					</>
				) : (
					<>
						<h3 className="text-2xl/9 font-bold tracking-tight text-slate-100 dark:text-white mb-4">
							{language === languageOptions.english
								? "Verify your email"
								: "Verifica tu correo electrónico"}
						</h3>
						<p className="leading-7 font-normal text-slate-300 dark:text-stone-400 mb-8">
							{language === languageOptions.english
								? "We have sent you an email with a code to verify your account and login."
								: "Te hemos enviado un correo con un codigo para verificar tu cuenta e iniciar sesión."}
						</p>
						<CodeForm
							onCodeSubmit={onCodeSubmit}
							onCodeChange={onCodeChange}
							loading={loading}
						/>
					</>
				)}
			</div>
		</Container7xl>
	);
};

// 2. Your main page component now simply wraps the logic component in <Suspense>.
const LoginPage = () => {
	return (
		<main className="bg-black" role="main">
      <div className="bg-black">
			<Suspense fallback={<div>Loading...</div>}>
				<LoginFlow />
			</Suspense>
      </div>
		</main>
	);
};

export default LoginPage;
