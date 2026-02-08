export default function Jumbotron({
	topSmTitle,
	mainTitle,
	mainText,
}: {
	topSmTitle: string;
	mainTitle: string;
	mainText: string;
}) {

	return (
		<div className="bg-white px-6 py-24 sm:py-32 lg:px-8 ">
			<div className="mx-auto max-w-2xl text-center">
				<p className="text-base/7 font-semibold text-indigo-600 ">
					{topSmTitle}
				</p>
				<h2 className="mt-2 text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl ">
					{mainTitle}
				</h2>
				<p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8 ">
					{mainText}
				</p>
			</div>
		</div>
	);
}
