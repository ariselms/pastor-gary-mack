"use client";
import React from "react";
import { useLanguageContext } from "@/context/languageContext";
import { Button, Label, TextInput } from "flowbite-react";
import { languageOptions } from "@/static";
import { Spinner } from "flowbite-react";

const AuthForm = ({
	onEmailChange,
	onFormSubmit,
  loading
}: {
	onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  loading: boolean
}) => {

	const { language } = useLanguageContext();

	return (
		<form
			onSubmit={onFormSubmit}
			className="w-full md:w-xl flex flex-col gap-4">
			<div>
				<div className="mb-2 block">
					<Label className="text-slate-200" htmlFor="email1">
						{language === languageOptions.english ? "Your email" : "Tu correo"}
					</Label>
				</div>
				<TextInput
					id="email1"
					type="email"
					placeholder={
						language === languageOptions.english
							? "myemail@email.com"
							: "micorreo@correo.com"
					}
					required
					onChange={onEmailChange}
				/>
			</div>
			<Button
				className="relative flex items-center justify-center rounded-lg text-center font-medium focus:outline-none focus:ring-4 h-10 px-5 text-sm bg-slate-700 text-white hover:bg-slate-800 focus:ring-slate-300 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800"
				type="submit">
				{loading ? (
					<>
						<Spinner size="sm" className="mr-2" light />
						{language === languageOptions.english
							? "Processing..."
							: "Procesando..."}
					</>
				) : languageOptions.english ? (
					"Send"
				) : (
					"Enviar"
				)}
			</Button>
		</form>
	);
};

export default AuthForm;
