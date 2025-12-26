import { USFlag, PRFlag } from "@/components/svg/Icons";
import { Label, Select } from "flowbite-react";

export default function LanguageHandler({
	handleLanguageChange,
	languageContext,
	languageOptions
}: any) {
	return (
		<div className="me-1 flex flex-col">
			<Label htmlFor="language" className="mb-1 sr-only">
				{languageContext.language === languageOptions.english
					? "Select Language"
					: "Seleccione Idioma"}
			</Label>
			<div className="flex items-center">
				<select
          id="language"
					onChange={(e) => handleLanguageChange(e.target.value)}
					value={languageContext.language}
					className="w-fit-content rounded-lg cursor-pointer border border-slate-100 text-slate-100 p-1">
					<option className="text-slate-100" value="en">
						English
					</option>
					<option className="text-slate-100" value="es">
						Español
					</option>
				</select>
			</div>
		</div>
	);
}
