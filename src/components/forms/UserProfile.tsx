"use client";

import { useState, useEffect } from "react";
import { useLanguageContext } from "@/context/languageContext";
import { languageOptions } from "@/static";
import { Label, TextInput } from "flowbite-react";
import { Button, Spinner } from "flowbite-react";
import { UserType } from "@/types/userTypes";
import { toast } from "react-toastify";

export default function UserProfileForm({
	user,
	update
}: {
	user: UserType;
	update: boolean;
}) {
	const { language } = useLanguageContext();

	const [loading, setLoading] = useState(false);

	const [candidate, setCandidate] = useState<UserType>({
		id: user?.id || null,
		name: user?.name || "",
		contact_email: user?.contact_email || "",
		contact_phone: user?.contact_phone || "",
		address_street: user?.address_street || "",
		address_city: user?.address_city || "",
		address_state: user?.address_state || "",
		address_zip: user?.address_zip || "",
		address_country: user?.address_country || "",
		resume_url: user?.resume_url || ""
	});

	// 2. Add this Effect to sync state when the `user` prop loads/updates
	useEffect(() => {
		if (user) {
			setCandidate({
				id: user.id || null,
				name: user.name || "",
				contact_email: user.contact_email || "",
				contact_phone: user.contact_phone || "",
				address_street: user.address_street || "",
				address_city: user.address_city || "",
				address_state: user.address_state || "",
				address_zip: user.address_zip || "",
				address_country: user.address_country || "",
				resume_url: user.resume_url || ""
			});
		}
	}, [user]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		setCandidate((prev) => ({
			...prev,
			[name]: value
		}));
	};

	const handleSubmitUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		setLoading(true);

		try {
			const request = await fetch("/api/user", {
				method: "PUT",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(candidate)
			});

			const response = await request.json();

			if (response.success) {
				const toastMessage =
					language === languageOptions.english
						? "Your information has been updated successfully."
						: "Su información ha sido actualizada con éxito.";

				toast.success(toastMessage);
			} else {
				throw new Error(response.message);
			}

			setLoading(false);
		} catch (error) {
			console.error(error);

			const errorMessage =
				error instanceof Error ? error.message : "An error occurred";

			toast.error(errorMessage);
		} finally {
			setLoading(false);
		}
	};

	// const handleApplicationSubmit = async () => {

	// 	try {
	// 		setLoading(true);

	// 		const applicationRequest = await fetch("/api/jobs/applications", {
	// 			method: "POST",
	// 			headers: {
	// 				"Content-Type": "application/json"
	// 			},
	// 			body: JSON.stringify({
	// 				user: candidate,
	// 				job: job,
	// 				language
	// 			})
	// 		});

	// 		const applicationResponse = await applicationRequest.json();

	// 		if (!applicationResponse.success) {
	// 			return toast.warning(applicationResponse.message);
	// 		}

	// 		toast.success(applicationResponse.message);
	// 	} catch (error) {
	// 		console.error(error);

	// 		toast.error(
	// 			language === languageOptions.english
	// 				? "An error occurred, please try again"
	// 				: "Ocurrio un error, por favor intente nuevamente"
	// 		);
	// 	} finally {
	// 		setLoading(false);
	// 	}
	// };

	return (
		<div
			id="application-form"
			className="border-stone-900/10 dark:border-stone-700 pb-16">
			<h2 className="text-base font-semibold leading-7 text-stone-900 dark:text-stone-100">
				{language === languageOptions.english
					? "User Information"
					: "Información de usuario"}
			</h2>
			<p className="mt-1 text-sm leading-6 text-stone-600 dark:text-stone-200">
				{language === languageOptions.english
					? "Verify and update your profile information."
					: "Verifica y actualiza la información de tu perfil."}
			</p>

			<form
				onSubmit={handleSubmitUpdate}
				className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
				<div className="sm:col-span-3">
					<Label
						htmlFor="name"
						className="block text-sm font-medium leading-6 text-stone-900 dark:text-stone-100">
						{language === languageOptions.english
							? "Full name"
							: "Nombre completo"}
					</Label>
					<div className="mt-2">
						<TextInput
							id="name"
							name="name"
							type="text"
							className="block w-full rounded-md border-0 text-stone-900 dark:text-stone-100 focus:ring-2 focus:ring-inset focus:ring-red -600 sm:text-sm sm:leading-6"
							value={candidate.name}
							onChange={handleChange}
						/>
					</div>
				</div>

				<div className="sm:col-span-4">
					<Label
						htmlFor="contact_email"
						className="block text-sm font-medium leading-6 text-stone-900 dark:text-stone-100">
						{language === languageOptions.english
							? "Email address"
							: "Correo electrónico"}
					</Label>
					<div className="mt-2">
						<TextInput
							id="contact_email"
							name="contact_email"
							type="email"
							className="block w-full rounded-md border-0 text-stone-900 dark:text-stone-100  focus:ring-2 focus:ring-inset focus:ring-red  -600 sm:text-sm sm:leading-6"
							value={candidate.contact_email}
							onChange={handleChange}
							disabled
						/>
						<small className="p-1 text-stone-800 dark:text-stone-300">
							{language === languageOptions.english
								? "This field is not editable. Your email is your personal identification. Therefore, you cannot change it."
								: "Este campo no es editable. Tu correo electrónico es tu identificación personal. Por lo tanto, no puedes cambiarlo."}
						</small>
					</div>
				</div>

				<div className="sm:col-span-4">
					<Label
						htmlFor="contact_phone"
						className="block text-sm font-medium leading-6 text-stone-900 dark:text-stone-100">
						{language === languageOptions.english ? "Phone" : "Teléfono"}
					</Label>
					<div className="mt-2">
						<TextInput
							id="contact_phone"
							name="contact_phone"
							type="phone"
							className="block w-full rounded-md border-0 text-stone-900 dark:text-stone-100  focus:ring-2 focus:ring-inset focus:ring-red  -600 sm:text-sm sm:leading-6"
							value={candidate.contact_phone}
							onChange={handleChange}
						/>
					</div>
				</div>

				<div className="col-span-full">
					<Label
						htmlFor="address_street"
						className="block text-sm font-medium leading-6 text-stone-900 dark:text-stone-100">
						{language === languageOptions.english
							? "Street address"
							: "Dirección"}
					</Label>
					<div className="mt-2">
						<TextInput
							id="address_street"
							name="address_street"
							type="text"
							className="block w-full rounded-md border-0 text-stone-900 dark:text-stone-100  focus:ring-2 focus:ring-inset focus:ring-red  -600 sm:text-sm sm:leading-6"
							value={candidate.address_street}
							onChange={handleChange}
						/>
					</div>
				</div>

				<div className="sm:col-span-2 sm:col-start-1">
					<Label
						htmlFor="address_city"
						className="block text-sm font-medium leading-6 text-stone-900 dark:text-stone-100">
						{language === languageOptions.english ? "City" : "Ciudad"}
					</Label>
					<div className="mt-2">
						<TextInput
							id="address_city"
							name="address_city"
							type="text"
							className="block w-full rounded-md border-0 text-stone-900 dark:text-stone-100  focus:ring-2 focus:ring-inset focus:ring-red  -600 sm:text-sm sm:leading-6"
							value={candidate.address_city}
							onChange={handleChange}
						/>
					</div>
				</div>

				<div className="sm:col-span-2">
					<Label
						htmlFor="address_state"
						className="block text-sm font-medium leading-6 text-stone-900 dark:text-stone-100">
						{language === languageOptions.english
							? "State / Province"
							: "Estado / Provincia"}
					</Label>
					<div className="mt-2">
						<TextInput
							id="address_state"
							name="address_state"
							type="text"
							className="block w-full rounded-md border-0 text-stone-900 dark:text-stone-100  focus:ring-2 focus:ring-inset focus:ring-red  -600 sm:text-sm sm:leading-6"
							value={candidate.address_state}
							onChange={handleChange}
						/>
					</div>
				</div>

				<div className="sm:col-span-2">
					<Label
						htmlFor="address_zip"
						className="block text-sm font-medium leading-6 text-stone-900 dark:text-stone-100">
						{language === languageOptions.english
							? "ZIP / Postal code"
							: "Código postal"}
					</Label>
					<div className="mt-2">
						<TextInput
							id="address_zip"
							name="address_zip"
							type="text"
							autoComplete="address_zip"
							className="block w-full rounded-md border-0 text-stone-900 dark:text-stone-100  focus:ring-2 focus:ring-inset focus:ring-red  -600 sm:text-sm sm:leading-6"
							maxLength={5}
							value={candidate.address_zip}
							onChange={handleChange}
						/>
					</div>
				</div>
				{update ? (
					<Button
						className="mt-8 relative flex items-center justify-center rounded-lg text-center font-medium focus:outline-none focus:ring-4 h-10 px-5 text-sm bg-slate-700 text-white hover:bg-slate-800 focus:ring-slate-300 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800"
						type="submit">
						{loading ? (
							<>
								<Spinner size="sm" className="mr-2" light />
								{language === languageOptions.english
									? "Processing..."
									: "Procesando..."}
							</>
						) : language === languageOptions.english ? (
							"Update"
						) : (
							"Actualizar"
						)}
					</Button>
				) : (
					<Button
						// onClick={handleApplicationSubmit}
						className="mt-8 relative flex items-center justify-center rounded-lg text-center font-medium focus:outline-none focus:ring-4 h-10 px-5 text-sm bg-slate-700 text-white hover:bg-slate-800 focus:ring-slate-300 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800"
						type="button">
						{loading ? (
							<>
								<Spinner size="sm" className="mr-2" light />
								{language === languageOptions.english
									? "Processing..."
									: "Procesando..."}
							</>
						) : language === languageOptions.english ? (
							"Apply"
						) : (
							"Applicar"
						)}
					</Button>
				)}
			</form>
		</div>
	);
}
