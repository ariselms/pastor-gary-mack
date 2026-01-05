import Image from "next/image";

export function GaryMackLogo() {
	return (
		<span className="flex items-center gap-1">
			<Image
				width={50}
				height={50}
				className="w-16 h-16 rounded-base object-cover"
				src="/images/gary-mack-logo.png"
				alt="2xl avatar"
			/>
			<span className="font-extrabold text-2xl cursor-pointer text-slate-100 hover:border-b-2 hover:border-yellow-300 transition-all">
				Gary Mack
			</span>
		</span>
	);
}
