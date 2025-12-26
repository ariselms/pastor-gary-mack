import { useLanguageContext } from "@/context/languageContext";
import { languageOptions } from "@/static";

export default function ContactBlock() {
  const { language } = useLanguageContext();

	return (
		<div className="text-base p-4 rounded-md border border-slate-800 text-slate-200 dark:text-white mt-8">
			<h3 className="text-xl">Pastor Gary Mack</h3>
			<br />
			<p className="text-sm rounded py-1">
        {language === languageOptions.english
          ? "Email address: "
          : "Correo electrónico: "}
				info@pastorgarymack.com
			</p>
			<p className=" text-sm rounded py-1">
        {language === languageOptions.english
          ? "Phone: "
          : "Teléfono: "}
        (202) 993-9903</p>
		</div>
	);
}
