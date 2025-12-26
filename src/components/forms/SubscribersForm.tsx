"use client";
import {useState} from "react";
import { useLanguageContext } from "@/context/languageContext";

export default function SubscribersForm() {

  const { language } = useLanguageContext();
  const [email, setEmail] = useState(false);
  return (
		<form>
			<label htmlFor="email-address-icon" className="sr-only">
        {language === "en" ? "Email address" : "Dirección de correo"}
			</label>
			<div className="relative mb-4">
				<div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
					<svg
						className="w-4 h-4 text-gray-500 dark:text-gray-400"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						viewBox="0 0 20 16">
						<path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
						<path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
					</svg>{" "}
				</div>
				<input
					required
					type="text"
					id="email-address-icon"
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full pl-9 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
					placeholder="name@company.com"
				/>
			</div>
			<button
				type="submit"
				className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800 text-center w-full">
        {language === "en" ? "Subscribe" : "Suscribirme"}
			</button>
		</form>
	);
}