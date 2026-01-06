import { Modal, ModalHeader, ModalBody, ModalFooter } from "flowbite-react";
import Link from "next/link";
import { useLanguageContext } from "@/context/languageContext";
import { languageOptions } from "@/static";

export function ModalToPromptUserToLogin({
	isModalToPromptUserToLoginOpen,
	setIsModalToPromptUserToLoginOpen,
	serverBaseUrl,
	pathname
}: {
	isModalToPromptUserToLoginOpen: boolean;
	setIsModalToPromptUserToLoginOpen: React.Dispatch<
		React.SetStateAction<boolean>
	>;
	serverBaseUrl: string;
	pathname: string;
}) {
	const { language } = useLanguageContext();

	return (
		<Modal
			className="backdrop-blur-md bg-slate-950/50"
			dismissible
			show={isModalToPromptUserToLoginOpen}
			onClose={() => setIsModalToPromptUserToLoginOpen(false)}>
			<ModalHeader className="bg-slate-900 border-b border-slate-700 p-4">
				<span className="text-slate-100">
					{language === languageOptions.english
						? "You Must Login"
						: "Debes Iniciar Sesión"}
				</span>
			</ModalHeader>
			<ModalBody className="bg-slate-800">
				<div className="space-y-6">
					<p className="text-base leading-relaxed text-slate-200">
						{language === languageOptions.english
							? ""
							: "Debido a que documentamos todas las transacciones por motivos legales, para realizar compras o donaciones, es necesario iniciar una sesión para poder asociar tu historial."}
					</p>
					<p className="text-base leading-relaxed text-slate-200">
						{language === languageOptions.english
							? ""
							: "Si eso es lo que quieres, debes iniciar sesión, todo lo que necesitas es tu correo electrónico. Si no, puedes simplemente cerrar esta ventana."}
					</p>
				</div>
			</ModalBody>
			<ModalFooter className="bg-slate-900 border-t-slate-600 flex items-center justify-center">
				<Link
					className="relative rounded-lg text-center text-lg font-medium focus:outline-none focus:ring-4 px-5 py-3 bg-yellow-300 text-slate-800 hover:bg-yellow-400 focus:ring-yellow-300  w-fit cursor-pointer inline-block mt-4 md:mt-0 transition-all"
					href={`/login?${new URLSearchParams({
						redirectUrl: serverBaseUrl + pathname
					}).toString()}`}>
					{language === languageOptions.english ? "Login" : "Iniciar Sesión"}
				</Link>
			</ModalFooter>
		</Modal>
	);
}
