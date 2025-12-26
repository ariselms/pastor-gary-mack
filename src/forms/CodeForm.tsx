import { Button, Label, TextInput } from "flowbite-react";
import { useLanguageContext } from "@/context/languageContext";
import { languageOptions } from "@/static";
import { Spinner } from "flowbite-react";

export default function CodeForm({
  onCodeChange,
	onCodeSubmit,
  loading
}: {
	onCodeChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	onCodeSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  loading: boolean
}) {
	const { language } = useLanguageContext();

	return (
		<form
			onSubmit={onCodeSubmit}
			className="w-full md:w-xl flex flex-col gap-4">
			<div>
				<div className="mb-2 block">
					<Label htmlFor="text">
						{language === languageOptions.english ? "Your code" : "Tu código"}
					</Label>
				</div>
				<TextInput
					id="text"
					type="text"
					placeholder={
						language === languageOptions.english ? "xxx-xxx" : "xxx-xxx"
					}
					maxLength={6}
					onChange={onCodeChange}
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
					"Verify"
				) : (
					"Verificar"
				)}
			</Button>
		</form>
	);
}
