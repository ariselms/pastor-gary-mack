import React, { useState, useEffect } from "react";
import { Menu, X, BookOpen, ChevronUp, ChevronRight } from "lucide-react";

export default function MentalidadDeMangostaBook() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [activeSection, setActiveSection] = useState("");
	const [showScrollTop, setShowScrollTop] = useState(false);

	// Chapters data for navigation
	const chapters = [
		{ id: "agradecimientos", title: "Agradecimientos" },
		{ id: "introduccion", title: "Introducción" },
		{ id: "capitulo-1", title: "Capítulo 1: El Inicio de Todo" },
		{ id: "capitulo-2", title: "Capítulo 2: El Corazón de Dios" },
		{ id: "capitulo-3", title: "Capítulo 3: Forjados en el Fuego" },
		{ id: "capitulo-4", title: "Capítulo 4: El Secreto para la Victoria" },
		{ id: "capitulo-5", title: "Capítulo 5: Sin Fe no hay Conquista" },
		{ id: "capitulo-6", title: "Capítulo 6: Principios del Vencedor" },
		{ id: "capitulo-7", title: "Capítulo 7: Judas y Pedros" },
		{ id: "capitulo-8", title: "Capítulo 8: El Código de Oro" }
	];

	// Handle scroll for active section highlighting and back-to-top button
	useEffect(() => {
		const handleScroll = () => {
			setShowScrollTop(window.scrollY > 400);

			const sections = chapters.map((ch) => document.getElementById(ch.id));
			const scrollPosition = window.scrollY + 200;

			for (let i = sections.length - 1; i >= 0; i--) {
				const section = sections[i];
				if (section && section.offsetTop <= scrollPosition) {
					setActiveSection(chapters[i].id);
					break;
				}
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToSection = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			const offset = 80;
			const elementPosition = element.getBoundingClientRect().top;
			const offsetPosition = elementPosition + window.pageYOffset - offset;

			window.scrollTo({
				top: offsetPosition,
				behavior: "smooth"
			});
			setIsMenuOpen(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<div className="min-h-screen bg-black text-slate-100 font-sans leading-relaxed selection:bg-yellow-900 selection:text-white">
			{/* Sticky Header - Dark Theme */}
			<header className="sticky top-0 z-50 bg-black/95 backdrop-blur-md shadow-sm border-b border-yellow-500/20 transition-all duration-300">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between items-center h-16">
						{/* Title / Logo Area */}
						<div
							className="flex items-center space-x-3 cursor-pointer group"
							onClick={scrollToTop}>
							<div className="bg-yellow-500 p-1.5 rounded-lg text-black transition-transform group-hover:scale-105 shadow-[0_0_10px_rgba(234,179,8,0.3)]">
								<BookOpen size={20} strokeWidth={2.5} />
							</div>
							<span className="font-bold text-lg tracking-tight text-yellow-500 hidden sm:block drop-shadow-sm">
								Mentalidad de Mangosta
							</span>
							<span className="font-bold text-lg tracking-tight text-yellow-500 sm:hidden">
								MdM
							</span>
						</div>

						{/* Desktop Navigation */}
						<nav className="hidden md:flex space-x-1">
							<div className="relative group">
								<button className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-slate-300 hover:text-yellow-400 transition-colors">
									<span>Índice de Capítulos</span>
									<ChevronRight
										size={16}
										className="rotate-90 group-hover:text-yellow-400"
									/>
								</button>
								{/* Dropdown for Desktop */}
								<div className="absolute right-0 w-64 mt-2 bg-neutral-900 rounded-xl shadow-2xl border border-yellow-500/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right overflow-hidden">
									<div className="py-2">
										{chapters.map((chapter) => (
											<button
												key={chapter.id}
												onClick={() => scrollToSection(chapter.id)}
												className={`block w-full text-left px-4 py-2.5 text-sm transition-colors border-l-2 ${
													activeSection === chapter.id
														? "bg-yellow-500/10 text-yellow-400 border-yellow-500 font-medium"
														: "text-slate-400 border-transparent hover:bg-neutral-800 hover:text-yellow-200"
												}`}>
												{chapter.title}
											</button>
										))}
									</div>
								</div>
							</div>
						</nav>

						{/* Mobile Menu Button */}
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className="md:hidden p-2 rounded-md text-slate-300 hover:text-yellow-400 hover:bg-neutral-900 transition-colors focus:outline-none"
							aria-label="Menu">
							{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
						</button>
					</div>
				</div>

				{/* Mobile Navigation Drawer */}
				{isMenuOpen && (
					<div className="md:hidden border-t border-yellow-500/20 bg-neutral-950 absolute w-full shadow-lg max-h-[80vh] overflow-y-auto">
						<div className="py-2 px-2 space-y-1">
							{chapters.map((chapter) => (
								<button
									key={chapter.id}
									onClick={() => scrollToSection(chapter.id)}
									className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
										activeSection === chapter.id
											? "bg-yellow-500/10 text-yellow-400 border-l-4 border-yellow-500"
											: "text-slate-400 hover:bg-neutral-900 hover:text-yellow-200"
									}`}>
									{chapter.title}
								</button>
							))}
						</div>
					</div>
				)}
			</header>

			{/* Main Content */}
			<main className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
				<article className="space-y-16">
					{/* Agradecimientos */}
					<section
						id="agradecimientos"
						className="scroll-mt-24 animate-fade-in">
						<h2 className="text-3xl md:text-4xl font-extrabold text-yellow-400 mb-8 pb-2 border-b border-yellow-500/30 inline-block tracking-tight">
							AGRADECIMIENTOS
						</h2>
						<div className="space-y-6 text-lg text-slate-200">
							<p>
								Doy gracias a Dios Todopoderoso por permitirme escribir este
								libro. Agradezco a mi familia, en especial a mi esposa e hijos,
								por soportar y entender todas las veces que he tenido que
								sacrificar parte del tiempo que les dedico para realizar estos
								proyectos de Dios.
							</p>
							<p>
								Agradezco a toda la congregación, al ministerio, a los pastores
								y líderes que me han ayudado. A mis hermanos, que siempre han
								estado presentes, y a todos los que me tendieron la mano en cada
								uno de mis procesos.
							</p>
							<p>
								Agradezco a cada una de las personas que se levantaron en mi
								contra; fueron una motivación para no detenerme y poder
								demostrarles que Dios cumple su propósito en mi vida.
							</p>
							<p>
								Les exhorto a que nunca se detengan, sin importar cuántos se
								levantan, porque hay Uno que te mandó, que nunca se va a
								detener.
							</p>
						</div>
					</section>

					{/* Introducción */}
					<section id="introduccion" className="scroll-mt-24">
						<h2 className="text-3xl md:text-4xl font-extrabold text-yellow-400 mb-8 pb-2 border-b border-yellow-500/30 inline-block tracking-tight">
							INTRODUCCIÓN
						</h2>
						<div className="space-y-6 text-lg text-slate-200">
							<p>
								A veces la vida puede ser dura y, para muchos, las heridas del
								pasado impiden avanzar hacia el futuro. Sin embargo, hay una
								salida. No siempre podemos controlar lo que nos sucede, pero sí
								cómo decidimos enfrentarlo. Eso es, en esencia, lo que yo llamo
								la{" "}
								<span className="text-yellow-300 font-medium italic">
									"mentalidad de mangosta"
								</span>
								.
							</p>

							<h3 className="text-2xl font-bold text-yellow-100 mt-8 mb-4">
								La naturaleza de la mangosta
							</h3>
							<p>
								En el reino animal, la mangosta es reconocida por su valentía,
								agilidad y su firme determinación frente a los desafíos. Aunque
								es una criatura de tamaño relativamente pequeño, no se deja
								intimidar por los peligros que la rodean ni por los depredadores
								que enfrenta. La capacidad de la mangosta para superar estos
								riesgos no solo proviene de su habilidad física, sino también de
								su mentalidad tenaz. En lugar de rendirse ante el peligro
								inminente, utiliza su coraje y determinación para superar los
								desafíos y luchar por su supervivencia.
							</p>
							<p>
								Históricamente, la mangosta era un animal atacado siempre por la
								serpiente. Cuentan que, cuando la serpiente veía a la mangosta,
								la devoraba; pero un día, al ver que la serpiente iba a devorar
								a su cría, la mangosta se levantó y luchó. Aunque la serpiente
								logró picarla, la mangosta pudo matarla. Los estudiosos
								descubrieron que la serpiente no logró matar a la mangosta
								porque esta posee un metabolismo mutante. Esto hace que el
								veneno que entra a su cuerpo se convierta en un anticuerpo que
								la protege. Muchas veces hay cosas que nos quieren matar, pero
								en lugar de destruirnos, nos hacen más fuertes.
							</p>

							<h3 className="text-2xl font-bold text-yellow-100 mt-8 mb-4">
								Un pasado transformado por Dios
							</h3>
							<p>
								A lo largo de mi vida, enfrenté situaciones que me hicieron
								cuestionar mi valor, mi fortaleza e incluso mi propósito. Desde
								muy joven, el maltrato que sufrí parecía definir quién era y
								quién llegaría a ser. Sin embargo, descubrí que no estamos
								condenados a ser prisioneros de nuestro pasado. Aunque las
								cicatrices intenten definirnos, Dios tiene el poder de
								transformar cualquier situación. Él puede restaurar nuestra
								vida, cambiar nuestra historia y darnos una nueva identidad.
							</p>
							<p>
								La clave para esta transformación radica en una vida de oración
								e intimidad con Dios. Es a través de la oración que rompemos las
								cadenas que nos atan al pasado y avanzamos con pasos firmes
								hacia nuestro propósito. Sin una conexión profunda con Dios, es
								difícil mantener una mentalidad renovada; pero cuando le
								entregamos nuestras cargas, Él nos fortalece para enfrentarlas y
								superarlas.
							</p>
							<p>
								A lo largo de este libro, compartiré cómo, a pesar de lo que
								viví, logré cambiar mi mentalidad: pasé de ser una víctima de
								las circunstancias a alguien que camina con pasos certeros hacia
								el destino que Dios ha diseñado para mí. Quiero que sepas que
								este proceso de transformación no es sencillo, pero sí es
								posible.
							</p>

							<h3 className="text-2xl font-bold text-yellow-100 mt-8 mb-4">
								El poder de una decisión
							</h3>
							<p>
								El primer paso hacia cualquier cambio real comienza con una
								decisión. Cuando decidí dejar de vivir bajo las sombras de mi
								pasado, empecé a ver mi vida de otra manera. Así como la
								mangosta enfrenta a su depredador, nosotros también podemos
								enfrentarnos a nuestros mayores temores, inseguridades y traumas
								con la fuerza que Dios nos da.
							</p>
							<p>
								Hubo momentos en los que creí que no podría mejorar, que estaría
								estancado en el valle de la desesperación. Pero cuando comencé a
								orar, a renovar mi mente y a poner mi confianza en Dios, todo
								empezó a cambiar. La Biblia dice:{" "}
								<span className="italic text-yellow-200/90">
									"No os conforméis a este siglo, sino transformaos por medio de
									la renovación de vuestro entendimiento"
								</span>{" "}
								(
								<strong className="text-yellow-400 font-bold">
									Romanos 12:2
								</strong>
								). Aunque no tenía control sobre lo que me sucedió cuando era
								niño, sí tenía control sobre cómo viviría a partir de ese
								momento y de cómo usaría esas experiencias como impulso para
								crecer con la ayuda de Dios.
							</p>
							<p>
								Quiero que sepas que, sin importar lo que hayas enfrentado en tu
								vida, Dios puede cambiar tu historia. Si yo logré cambiar mi
								mentalidad, sanar y mejorar, tú también puedes hacerlo. La
								transformación que buscamos comienza en nuestra mente y en
								nuestra relación con Dios. Todo cambio externo es el reflejo de
								una transformación interna, y esa transformación viene cuando
								confiamos plenamente en Él.
							</p>
						</div>
					</section>

					{/* Capítulo 1 */}
					<section
						id="capitulo-1"
						className="scroll-mt-24 p-6 md:p-8 bg-neutral-900/50 rounded-2xl border border-yellow-500/10">
						<h2 className="text-2xl md:text-3xl font-extrabold text-yellow-400 mb-6 uppercase tracking-tight">
							Capítulo 1: Mentalidad de Mangosta: El Inicio de Todo
						</h2>
						<div className="space-y-6 text-lg text-slate-200">
							<p>
								A lo largo de nuestra vida, no siempre tenemos la libertad de
								elegir el camino que deseamos transitar. Las circunstancias,
								muchas veces ajenas a nuestra voluntad, nos empujan hacia
								destinos que jamás hubiéramos escogido por nosotros mismos. Nos
								vemos forzados a aceptar, incluso, una realidad que nunca
								hubiéramos imaginado ni querido.
							</p>
							<p>
								Pero, para que puedan comprender mejor a qué me refiero,
								permítanme compartirles una parte de mi historia personal. Mi
								testimonio es un reflejo de cómo, a pesar de las adversidades y
								las circunstancias que enfrenté, el propósito de Dios siempre
								estuvo presente, guiándome a través de cada desafío para
								transformarme y dirigirme hacia la vida que Él diseñó para mí.
							</p>

							<h3 className="text-xl font-bold text-yellow-100 mt-8 mb-4">
								Un origen marcado por el rechazo
							</h3>
							<p>
								Mi padre y mi madre tuvieron una relación amorosa, pues él,
								estando casado, le mintió diciéndole que era soltero. Cuando
								ella quedó embarazada, aprovechó la oportunidad para pedirle que
								se casaran, pero él se negó. Ya tenía otra familia: una esposa,
								dos hijas y otro bebé en camino. Herida por esta traición,
								cuando yo tenía apenas cinco meses de haber nacido, mi madre
								decidió abandonar el país, dejándome al cuidado de unas personas
								que ella no conocía.
							</p>
							<p>
								Crecí con esa familia, quienes me cuidaron con mucho amor hasta
								los seis años. En ese momento, mi madre volvió a buscarme, no
								porque hubiera cambiado de opinión y quisiera tener cuidado de
								mí, sino con la esperanza de que mi padre volviera con ella. Sin
								embargo, la familia que me había criado no quería dejarme ir, ya
								que yo no reconocía a la mujer que me había abandonado. Para mí,
								ella no era mi madre; no lograba verla como tal.
							</p>
							<p>
								Había visto en la televisión que algunas madres vendían a sus
								hijos para que les extrajeran los órganos, y temía que mi madre
								hubiera hecho lo mismo conmigo. Por eso, tenía mucho miedo de
								irme con ella. Al ver la negativa de la familia que me había
								criado a entregarme, ella los amenazó con llevarlos a la
								justicia para que fueran a la cárcel. A pesar del dolor que
								sentían y de cuánto me amaban, tuvieron que dejarme ir.
							</p>

							<h3 className="text-xl font-bold text-yellow-100 mt-8 mb-4">
								El dolor del maltrato
							</h3>
							<p>
								Mi madre comenzó a maltratarme de formas crueles. Me hería en la
								cabeza con tubos, me rompía los cartílagos de las orejas al
								jalarlas con fuerza y me sumergía la cabeza en tanques de agua
								hasta que casi me ahogaba. También me obligaba a arrodillarme
								sobre un "guayo", mientras me hacía sostener pedazos de bloque
								en cada mano y un envase de agua balanceado en la cabeza. Si en
								algún momento me debilitaba y hacía un movimiento que provocaba
								que el envase se cayera, me golpeaba la espalda con un alambre
								de cobre.
							</p>
							<p>
								Después de un año de maltratos, cuando tenía 7 años, mi madre
								decidió expulsarme de la casa sin permitirme regresar con la
								familia que me había criado. Me llevaron a donde mi padre, quien
								dijo que no podía hacerse cargo de mí porque ya tenía una
								familia, con una esposa y tres hijas (una de ellas de mi edad),
								como si yo fuera responsable de sus errores.
							</p>
							<p>
								Mi abuela paterna, al enterarse de la situación, decidió
								llevarme a su casa. Ella comenzó a educarme y enseñarme
								principios de vida, como estudiar, ser bueno con los demás y
								buscar a Dios. Sin embargo, a pesar de eso, no tuve una infancia
								normal. Mientras otros niños jugaban, yo tenía que salir a
								vender empanadas en las calles, o andar voceando con una olla de
								mangos, aguacates y limoncillos, dependiendo de la temporada de
								cosecha. También vendía carbón y recogía comida en el vecindario
								para los cerdos que criaba mi abuela.
							</p>

							<h3 className="text-xl font-bold text-yellow-100 mt-8 mb-4">
								Huérfano y desamparado
							</h3>
							<p>
								Cuatro años después, cuando cumplí nueve, todo empeoró. Mi
								abuela perdió la batalla contra el cáncer. Luego de su
								fallecimiento, quedé al cuidado de mis tíos, quienes eran
								alcohólicos. Mis noches se convirtieron en una pesadilla. Mis
								tíos llegaban borrachos a casa y me despertaban a golpes, con
								puños y patadas. Uno de ellos, además, abusó sexualmente de mí.
								La peor parte fue que nadie me creyó. Mi familia siempre pensó
								que lo estaba inventando.
							</p>
							<p>
								Como padres, debemos tener mucho cuidado cuando nuestros hijos
								nos hablan sobre temas sensibles, especialmente si se trata de
								un abuso. Es importante investigar y observar lo que nos dicen,
								porque si no les creemos o no mostramos interés cuando nos
								cuentan algo, perderán la confianza en nosotros y podrían dejar
								de comunicarnos sus problemas.
							</p>

							<h3 className="text-xl font-bold text-yellow-100 mt-8 mb-4">
								En el mundo espiritual, todo tiene un propósito
							</h3>
							<p>
								Al leer este fragmento de mi historia y todo lo que tuve que
								sufrir, es normal preguntarse:{" "}
								<span className="italic text-yellow-300">
									¿Dónde estaba Dios?
								</span>{" "}
								En momentos de dolor y sufrimiento, nos cuestionamos cómo puede
								un ser bueno permitir que ocurran cosas tan malas. Sin embargo,
								en medio de la angustia y el dolor, Dios está presente. Puede
								que no lo percibamos de inmediato, pero Él está allí, y yo pude
								confirmarlo.
							</p>

							<div className="border-l-4 border-yellow-500 pl-6 py-4 my-8 bg-yellow-500/10 italic text-slate-300 rounded-r-lg">
								Un día, cuando tenía alrededor de 11 años, mientras dormía, soñé
								que estaba frente a una estatua de Jesucristo y que me
								encontraba pidiéndole ayuda. Al levantar la vista, me di cuenta
								de que no era una estatua, sino que Él, estaba allí, sonriendo,
								y me dijo:{" "}
								<span className="font-semibold text-yellow-400">
									"No soy una estatua, no temas, estoy contigo."
								</span>
							</div>

							<p>
								En ese momento, escuché una voz fuerte que me llamó:{" "}
								<span className="uppercase font-bold text-yellow-500">
									"¡GARY, DESPIERTA!"
								</span>
								. Al abrir los ojos, vi un puñal viniendo en dirección hacia mí.
								Uno de mis tíos estaba intentando matarme. Me lancé de la cama,
								corriendo y pidiendo ayuda, y los vecinos salieron en mi
								defensa. Ellos eran quienes me cuidaron después de la muerte de
								mi abuela, y estoy agradecido a Dios por haber puesto a estas
								personas en mi camino durante ese tiempo de dificultad. En medio
								de todo, Dios los usó para mostrar su fidelidad. Ellos me
								alimentaban, me vestían y su apoyo fue muy importante en esos
								momentos de crisis.
							</p>

							<h3 className="text-xl font-bold text-yellow-100 mt-8 mb-4">
								La escuela de la calle
							</h3>
							<p>
								Pero mi historia no termina ahí. A partir de entonces, me vi
								obligado a vivir en las calles, rodeado de vendedores de droga,
								atracadores, prostitutas y personas con vidas delictivas. Aunque
								parezca sorprendente, ellos eran quienes me proporcionaban
								comida y un lugar donde dormir. Sin embargo, no podían ofrecerme
								la estabilidad ni la felicidad de la que ellos mismos carecían.
								Recuerdo que lloraba todos los días, sintiendo que no tenía
								padre ni madre, y que nadie me felicitaba en mi cumpleaños, en
								Año Nuevo, ni en otras épocas en las que otros recibían el
								cariño de sus seres queridos.
							</p>
							<p>
								Cualquiera que analice detenidamente esta parte de mi historia
								podría pensar que ese oscuro período, que considero más bien
								como una estación en el tren de mi vida, no formaba parte del
								plan de Dios. Y, en realidad, es lógico pensar así. Sin embargo,
								es importante comprender la naturaleza milagrosa de la palabra
								de Dios. Cada experiencia que vivimos, aunque no sea
								directamente provocada por Él, puede ser utilizada por Dios para
								mostrar su gloria a través de nosotros. A menudo, en estos
								momentos difíciles, Dios se manifiesta de maneras inesperadas y
								poderosas.
							</p>

							<h3 className="text-xl font-bold text-yellow-100 mt-8 mb-4">
								Restauración y promesa
							</h3>
							<p>
								Estoy seguro de que todo lo que pasé con mi madre tuvo un
								propósito en el plan de Dios. Hoy en día, mi madre le sirve a
								Cristo, y nuestra relación se ha transformado: ella me ama y yo
								la amo. Mi hermano más pequeño también es cristiano, y ahora
								solo falta mi otro hermano. Sin embargo, confío en que Dios está
								obrando en su vida. Recuerdo que un día Él me dijo que toda mi
								familia le serviría, y yo lo creí. He visto cómo esa promesa se
								está cumpliendo y cómo Dios se ha glorificado en nuestras vidas.
							</p>
							<p>
								Por tanto, no tengo la menor duda de que todo lo que sufrí,
								aunque no lo comprendía en ese momento, de alguna manera Dios lo
								usó en su plan divino a mi favor. Lo que el enemigo pensó que me
								destruiría, Dios lo revirtió y lo utilizó para traer bendición a
								mi vida.
							</p>
							<p>
								Pero el proceso no fue fácil. Requirió humillación en Su
								presencia y oración. Quiero enseñarte que, si no tienes una vida
								de oración, haz los ajustes necesarios para empezar a orar de
								inmediato. La oración es la forma más efectiva, y diría que la
								única, de mantener una comunicación constante con Dios. No
								puedes recibir la revelación del propósito de Dios para tu vida
								sin oración.
							</p>
							<p>
								Busca siempre escuchar a Dios y hablarle; conviértelo en tu
								amigo. Esto te asegurará la victoria en la vida cristiana. Deja
								el pasado atrás y enfócate en el glorioso futuro que Dios tiene
								reservado para ti.
							</p>
						</div>
					</section>

					{/* Capítulo 2 */}
					<section
						id="capitulo-2"
						className="scroll-mt-24 p-6 md:p-8 bg-neutral-900/50 rounded-2xl border border-yellow-500/10">
						<h2 className="text-2xl md:text-3xl font-extrabold text-yellow-400 mb-6 uppercase tracking-tight">
							CAPÍTULO 2: EL CORAZÓN DE DIOS TAMBIÉN LATE POR LOS PERDIDOS
						</h2>
						<div className="space-y-6 text-lg text-slate-200">
							<p>
								A veces pensamos que Dios solo bendice y ayuda a aquellos que le
								siguen y se esfuerzan por hacer Su voluntad. Como cristianos,
								corremos el riesgo de volvernos insensibles al sufrimiento de
								los demás, especialmente cuando sentimos que, al estar ya
								salvos, estamos bien. Sin embargo, debemos recordar que el mundo
								está lleno de personas que sufren y, aunque pueda parecer
								difícil de creer, esas personas también le importan
								profundamente a Dios.
							</p>
							<p>
								Su misericordia no tiene límites, como lo expresa la Escritura:{" "}
								<span className="italic text-yellow-200/90">
									"Hace salir su sol sobre justos e injustos"
								</span>{" "}
								(
								<strong className="text-yellow-400 font-bold">
									Mateo 5:45
								</strong>
								). Esto significa que su amor y compasión no se limitan a los
								que lo siguen fielmente; Él está pendiente de todos, incluso de
								aquellos que todavía no lo conocen o que se han apartado. Dios,
								en su infinita bondad, no abandona a nadie. Al contrario,{" "}
								<span className="italic text-yellow-200/90">
									"deja las 99 ovejas para ir tras la que está perdida"
								</span>{" "}
								(
								<strong className="text-yellow-400 font-bold">
									Lucas 15:4—7
								</strong>
								).
							</p>
							<p>
								Ese es el mismo amor que Él mostró hacia mí. Yo fui esa oveja
								perdida y, aun cuando no lo merecía, Él vino a buscarme, me
								alcanzó con su gracia y me devolvió al redil.
							</p>

							<h3 className="text-xl font-bold text-yellow-100 mt-8 mb-4">
								Sin escapatoria
							</h3>
							<p>
								Recuerdo que cuando me llamaban porque agentes de la Dirección
								Nacional de Control de Drogas (DNCD) iban a allanar el barrio
								donde yo delinquía a través del microtráfico de estupefacientes,
								recogía todo y me iba a una iglesia a escuchar el culto,
								pidiéndole a Dios que la DNCD no me encontrara. Pero un día,
								miembros de ese organismo hicieron un allanamiento a las 4:00 de
								la tarde, y a esa hora no había ninguna iglesia abierta, así que
								tuve que ir a la casa de un socio en el negocio delictivo.
							</p>
							<p>
								Esperé allí, y a las 7:00 de la noche me llamaron para decirme
								que ya la DNCD no estaba en el área, y que fuera al punto porque
								había muchos compradores esperando. Le pregunté a mi contacto y
								me dijo que no había ningún “chivato” ni vehículo sospechoso en
								la zona. Bajé con 45 “bolas” de cocaína (perico), 5 de marihuana
								y 7 "piedras" de crack para vender. También llevaba cocaína para
								mí y mi gente, con la intención de amanecer consumiendo.
							</p>
							<p>
								Cuando crucé la avenida, antes de llegar al punto, se tiraron
								cuatro vehículos grandes de la DNCD con alrededor de 40 policías
								encapuchados, armados con rifles M-16, y llevaban presos en las
								guaguas. Al ver esto me detuve frente a la segunda unidad. Sabía
								que no tenía escapatoria. En ese momento, escuché una voz fuerte
								que me dijo:
							</p>
							<p className="pl-4 border-l-2 border-yellow-500/50 text-yellow-200 italic">
								—¡Corre!
							</p>
							<p>
								Me pregunté hacia dónde iba a correr. Entonces recordé que,
								cuando estaba en apuros, yo clamaba a Dios. El tiempo parecía
								haberse detenido. Miré al cielo, hablé con Dios en voz alta y
								dije:
							</p>

							<div className="bg-neutral-800/50 p-4 rounded-lg italic text-slate-300">
								—Señor, los cristianos me dicen que voy a servirte predicando tu
								palabra, que has mostrado en visiones que yo iba a predicar en
								estadios y que te vas a glorificar a través de mí con sanidad y
								liberación. Si eso es verdad, te pido que me ayudes a salir de
								este aprieto. Yo buscaría de ti, pero aquí afuera, no en la
								cárcel. Si me agarran con toda esta droga, cuando sepan quién
								soy y revisen los expedientes, me van a dictar de 20 a 30 años.
								Por favor, ayúdame.
							</div>

							<h3 className="text-xl font-bold text-yellow-100 mt-8 mb-4">
								Una señal del cielo
							</h3>
							<p>Al momento, el cielo relampagueó con un destello rojo.</p>
							<p>
								—
								<span className="italic text-yellow-200">
									Señor, no estoy pidiendo señales, estoy pidiendo ayuda
								</span>{" "}
								—dije con desesperación—.{" "}
								<span className="italic text-yellow-200">
									Por favor, sácame de aquí.
								</span>
							</p>
							<p>
								Yo sabía que ese relámpago había sido una señal de parte de Dios
								para que entendiera que Él me estaba escuchando, porque ni
								siquiera estaba nublado. Así que le seguí hablando y le dije:
							</p>
							<p className="pl-4 border-l-2 border-yellow-500/50 text-yellow-200 italic">
								—Dios, si me sacas de esta, con mi vida te sirvo; te serviré a
								tiempo completo.
							</p>
							<p>
								En ese momento, el cielo relampagueó por segunda vez. Luego, de
								la nada, se acercó un niño de unos dos o tres años, me haló el
								pantalón y me dijo:
							</p>
							<p className="pl-4 font-bold text-yellow-400">
								—Vámonos con Dios.
							</p>
							<p>Miré al niño y le dije:</p>
							<p>
								—Mi hijo, vete de aquí porque hay mucha droga y armas de fuego;
								en cualquier momento se arma un tiroteo.
							</p>
							<p>
								Lo empujé suavemente para que se apartara de mí, pero el niño se
								aferró a mi pantalón y repitió:
							</p>
							<p className="pl-4 font-bold text-yellow-400">
								—Vámonos con Dios.
							</p>
							<p>Volví a mirar al cielo y dije:</p>
							<p className="pl-4 border-l-2 border-yellow-500/50 text-yellow-200 italic">
								—Señor, no te he pedido señales, pero ahora sí te voy a pedir
								una: dame una señal y me iré.
							</p>
							<p>
								Relampagueó en el cielo por tercera vez. Entonces cargué al niño
								y empecé a caminar. Escuché los pasos detrás de mí, intenté
								voltear mi cara y el niño me sostuvo el rostro y me dijo:
							</p>
							<p className="pl-4 font-bold text-yellow-400">
								—No te voltees, que te están mirando, vámonos con Dios.
							</p>
							<p>
								En ese momento levanté mis manos al cielo y empecé a adorar a
								Dios mientras caminaba, hasta llegar a mi casa. Bajé al niño
								frente a mi casa y le dije: "Te voy a regalar una papita y un
								refresco cuando te vuelva a ver". Él solo sonrió y se fue.
							</p>

							<h3 className="text-xl font-bold text-yellow-100 mt-8 mb-4">
								Un pacto de fidelidad
							</h3>
							<p>
								Fui a una iglesia con mi esposa para aceptar a Cristo. Pasamos
								al frente y confesamos a Cristo. Recuerdo que me arrodillé en el
								altar para orar y le dije:
							</p>
							<p className="pl-4 border-l-2 border-yellow-500/50 text-yellow-200 italic">
								—Señor, ya te acepté, pero nunca he visto a un cristiano robando
								ni vendiendo drogas. ¿Cómo me voy a sostener con esposa?
							</p>
							<p>Escuché una voz que me dijo:</p>
							<p className="text-center font-bold text-2xl text-yellow-400 italic font-serif my-4">
								"Sé fiel a mí, ocúpate de lo mío, que yo me ocuparé de lo tuyo".
							</p>
							<p>
								En 18 años consumiendo drogas, nunca había escuchado voces, pero
								ese día escuché esa voz y supe que era la voz de Dios. Fuerte,
								clara e inconfundible.
							</p>

							<h3 className="text-xl font-bold text-yellow-100 mt-8 mb-4">
								¿Escucha Dios al pecador?
							</h3>
							<p>
								Sé que esta parte de mi historia puede resultar controversial
								para muchos, porque existe la noción de que Dios no escucha la
								oración del pecador. Sin embargo, cabe preguntarse hasta qué
								punto es esto cierto, ya que todos partimos de una condición
								pecaminosa y el Señor, en su infinita misericordia, ha prestado
								oído a nuestro clamor.
							</p>
							<p>
								Aunque no quiero hacer doctrina de ello, pues los lineamientos
								espirituales ya están definidos, insisto en que una oración
								sincera de un pecador a un Dios justo y bondadoso, pidiendo
								auxilio y mostrando disposición de servirle con todo el corazón,
								no dejará indiferente a nuestro divino Redentor.
							</p>
							<p>
								Esto lo vemos claramente en{" "}
								<strong className="text-yellow-400 font-bold">
									Lucas 18:13-14
								</strong>
								, donde un publicano reconoce sus faltas y desobediencia ante
								Dios, así como su falta de mérito para encontrar perdón. En el
								verso 14, el mismo Jesucristo dice que este hombre se fue a casa
								justificado, mientras que en los versículos anteriores, el
								fariseo hace alarde de ayunar dos veces por semana y cumplir
								toda la ley, olvidando que ante el Todopoderoso nadie puede
								justificarse, salvo por su gracia. Es desde ese reconocimiento
								de nuestras faltas que debemos marcar una línea de vida acorde
								con este precioso evangelio.
							</p>
							<p>
								Entiendo que si Dios no me hubiera escuchado ni rescatado cuando
								la DNCD casi me arresta, no sé dónde estaría hoy. Pero algo
								ocurrió: puse toda mi fe y confianza en las misericordias del
								Señor, y fui bendecido al ser escuchado y atendido en mi clamor.
								Por eso, hoy le sirvo con inmenso gozo, enfrentando con fe y
								valentía cada obstáculo que se presenta. Si Dios lo hizo una
								vez, tengo la plena certeza de que lo volverá a hacer, y su
								gloria será aún mayor.
							</p>
							<p>
								Haz de esta verdad una firme convicción en tu vida: mantente
								constante en oración, con fe, creyendo que no hay imposibles
								para nuestro Señor y Salvador Jesucristo. Sanar, mejorar y
								transformar tu vida también es posible para ti. La
								transformación que anhelamos comienza en nuestra mente y en
								nuestra relación con Dios. Todo cambio externo es un reflejo de
								una transformación interna, y esa transformación llega cuando
								confiamos plenamente en Él.
							</p>
						</div>
					</section>

					{/* Capítulo 3 */}
					<section
						id="capitulo-3"
						className="scroll-mt-24 p-6 md:p-8 bg-neutral-900/50 rounded-2xl border border-yellow-500/10">
						<h2 className="text-2xl md:text-3xl font-extrabold text-yellow-400 mb-6 uppercase tracking-tight">
							CAPÍTULO 3: FORJADOS EN EL FUEGO
						</h2>
						<div className="space-y-6 text-lg text-slate-200">
							<p>
								Es muy común que, al tomar la decisión de seguir a Cristo, te
								enfrentes a una serie de ataques espirituales. Esto sucede
								porque el enemigo, al ver que has sido liberado por el poder de
								Jesús y que ya no tiene control sobre tu vida, busca de todas
								las formas posibles recuperar su influencia. Comienza a atacarte
								en diferentes áreas: puedes experimentar escasez, dudas,
								enfermedades y otras dificultades que parecen surgir de la nada.
								Su propósito es hacerte creer que estabas mejor antes de conocer
								a Cristo, utilizando mentiras y engaños para sembrar la duda y
								debilitar tu fe.
							</p>
							<p>
								Yo también pasé por una etapa similar. Después de entregar mi
								vida a Cristo, mientras oraba un día, Dios me habló con claridad
								y me pidió que desechara todo lo que tenía: ropa, muebles y
								otras pertenencias de la casa. Todo eso provenía de negocios
								ilícitos y, obedeciendo Su voz, lo tiré todo. Me quedé
								literalmente sin nada.
							</p>

							<h3 className="text-xl font-bold text-yellow-100 mt-8 mb-4">
								El precio de la obediencia
							</h3>
							<p>
								Mi esposa y yo empezamos a dormir en la iglesia porque no
								teníamos otro lugar a dónde ir. Cada día salíamos a predicar en
								las esquinas, en lugares donde se vendían drogas, en hospitales,
								orfanatos y cárceles. Algunas veces conseguimos algo para comer;
								otras veces, no. Después de predicar, asistíamos al culto y
								luego nos quedamos allí para dormir.
							</p>
							<p>
								Un día, el pastor de la iglesia se me acercó y me dijo que
								teníamos que buscar otro lugar para dormir, que no podíamos
								seguir quedándonos en la iglesia junto a los demás hermanos. En
								el sector ya se hablaba de lo que Dios había hecho en nuestras
								vidas, en la de mi esposa y en la mía. Él sabía que, mientras
								estuviéramos allí, ni en la iglesia ni en los alrededores
								ocurriría ningún robo.
							</p>
							<p>
								Cuando el pastor nos pidió que nos fuéramos, le expliqué la
								situación que estábamos viviendo. No teníamos a dónde ir. Su
								respuesta fue directa:
							</p>
							<p className="pl-4 border-l-2 border-yellow-500/50 text-yellow-200 italic">
								—Si no tienen dónde dormir, busquen otra iglesia donde los
								puedan ayudar, que los dejen quedarse allí. Vayan a congregarse
								en ese lugar.
							</p>
							<p>
								En ese momento nos sentimos devastados. Lloramos de impotencia y
								sufrimos mucho. No teníamos ninguna opción, no podíamos dormir
								en la calle. La gente del barrio me conocía bien, sabían todo lo
								que yo había tenido antes de llegar a Cristo, cómo había sido mi
								vida en el mundo. Ahora que estaba en el camino de Dios, no
								podían verme en esa situación, durmiendo en la calle. Me
								preguntarían sobre el amor y la compasión en la iglesia, y eso
								no solo sería humillante, sino que podría afectar el testimonio
								del reino de Dios.
							</p>
							<p>
								Desesperado, tomé una decisión. Mi esposa y yo empezamos a
								dormir en el patio trasero de la iglesia, un lugar donde nadie
								pudiera vernos. Esperábamos a que todos se fueran a dormir y
								entonces extendíamos una sábana sobre la tierra. Frente a
								nosotros quedaba el basurero, y por las noches se llenaba de
								cucarachas y ciempiés. Dormíamos mal, con un ojo siempre
								abierto, vigilando los alrededores por si pasaba algo. Y si
								llovía, la cosa empeoraba. Teníamos que refugiarnos en una
								letrina que había en el patio y esperar allí hasta que la lluvia
								cesara.
							</p>
							<p>
								Mientras estábamos en la letrina, yo me sentaba en el inodoro y
								mi esposa se acomodaba en mis piernas para protegernos del frío
								y la humedad. Era una situación realmente incómoda: las
								cucarachas caían del techo sobre nosotros mientras intentábamos
								mantenernos lo más seguros posible.
							</p>
							<p>
								A pesar de las adversidades, manteníamos una rutina de oración,
								desde las 5 hasta las 7 de la mañana. Durante esas horas,
								nuestra lucha no era solo contra las dificultades físicas, sino
								también una batalla espiritual. Proclamábamos el reino de Dios
								con fervor.
							</p>

							<h3 className="text-xl font-bold text-yellow-100 mt-8 mb-4">
								Dios no se ausenta en nuestra dificultad
							</h3>
							<p>
								Seguro conoces la historia de Sadrac, Mesac y Abed-Nego, tres
								jóvenes cuya fe en Dios los llevó a enfrentar una prueba muy
								dura. Cuando se negaron a adorar la estatua de oro que el rey
								Nabucodonosor había erigido, fueron arrojados al horno de fuego
								ardiente. Pero algo asombroso ocurrió: el rey no solo vio a los
								tres jóvenes en el horno, sino que también notó a una cuarta
								figura con ellos,{" "}
								<span className="italic text-yellow-200">
									"como hijo de los dioses"
								</span>{" "}
								(
								<strong className="text-yellow-400 font-bold">
									Daniel 3:25
								</strong>
								). Esa figura era Jesús mismo, acompañándolos en medio de su
								prueba.
							</p>
							<p>
								Este detalle es fundamental. A veces, Dios no nos librará de las
								dificultades, sino que entrará en ellas con nosotros. En{" "}
								<strong className="text-yellow-400 font-bold">
									Isaías 43:2
								</strong>
								, Dios nos promete:{" "}
								<span className="italic text-yellow-200">
									"Cuando pases por las aguas, yo estaré contigo; y si por los
									ríos, no te anegarán; cuando pases por el fuego, no te
									quemarás, ni la llama arderá en ti."
								</span>{" "}
								En lugar de eliminar el sufrimiento, Dios se une a nosotros en
								medio de él, ofreciéndonos Su presencia y fortaleza.
							</p>
							<p>
								Nos asegura que no estamos solos en nuestras luchas. Aunque
								enfrentemos desafíos y pruebas, la presencia de Dios transforma
								nuestras dificultades en bendiciones y crecimiento espiritual.
								Mi esposa y yo somos testigos vivos de eso. Así como el oro es
								purificado en el fuego, nosotros somos fortalecidos en las
								pruebas. La clave no es huir del proceso, sino abrazarlo,
								sabiendo que cada paso que damos, cada momento difícil que
								atravesamos, está formando en nosotros el carácter de un
								verdadero vencedor.
							</p>
							<p>
								Hoy en día, nuestra vida ha cambiado de manera radical. Cada
								semana visitamos cárceles públicas en todo el país, vamos a
								hospitales y orfanatos, predicamos a Cristo en las calles y
								somos pastores de la iglesia "Los Rescatados Rescatando". Este
								ministerio ha provocado un gran avivamiento en la zona de Los
								Ríos, en la ciudad capital.
							</p>
							<p>
								Hemos sido testigos de cómo más de mil presos han aceptado a
								Cristo. En nuestras campañas evangelísticas, hemos visto a
								delincuentes entregar cuchillos, puñales y armas de fuego al
								entregarse a Cristo. Ellos han visto el cambio en mi vida y
								confían en que Dios puede hacer lo mismo en la suya.
							</p>

							<h3 className="text-xl font-bold text-yellow-100 mt-8 mb-4">
								Transformando el dolor en propósito
							</h3>
							<p>
								Las dificultades que enfrentan no son para llorar, sino para
								crecer. El proceso no es un lugar de lamento, sino de
								entrenamiento.
							</p>
							<p>
								Mi esposa y yo enfrentamos momentos de profundo dolor y
								desánimo, pero en lugar de quedarnos estancados en la tristeza,
								decidimos llevar nuestro sufrimiento a la cruz de Cristo.
								Transformamos nuestro dolor en una oportunidad para glorificar a
								Dios y hablar de su grandeza. Aprendimos a reconocer su
								propósito en nuestras vidas como pareja escogida para su gloria.
							</p>
							<p>
								Quedarse callado e inactivo solo alimenta la holgazanería
								espiritual, algo que realmente perjudica la salud emocional y
								espiritual. A menudo, justificamos nuestra pasividad con excusas
								basadas en nuestras circunstancias, pero no podemos permitir que
								esas excusas nos frenen. Moisés era tartamudo, pero eso no le
								impidió liderar al pueblo de Israel. Gedeón se sentía
								insignificante y temeroso, pero Dios lo usó para liberar a
								Israel de los madianitas. Jeremías era joven y sentía que no
								tenía la experiencia necesaria, pero Dios lo llamó a ser un
								profeta poderoso.
							</p>
							<p>
								La mediocridad espiritual surge cuando elegimos la comodidad en
								lugar de la valentía, y esto puede llevarnos al estancamiento de
								nuestro crecimiento y bienestar en la fe.
							</p>
							<p>
								Cuando nos enfrentamos a situaciones difíciles, como las que
								viví, es natural sentir el deseo de rendirse y abandonar todo,
								llenándonos de rencor hacia quienes deberían ayudarnos. Es fácil
								claudicar en la fe y dejarse llevar por la desesperanza. Pero
								esa actitud es la de aquellos que son llamados, pero no
								escogidos. Los que realmente han sido seleccionados por Dios y
								tienen el coraje de ser valientes, se visten con la armadura
								cristiana y salen al campo de batalla con la fe en Dios como su
								guía.
							</p>
							<p>
								No voy a negar que surgieron pensamientos de desánimo. Este es
								un truco muy común del enemigo en tiempos modernos. En momentos
								de debilidad, comparaba mi vida actual, llena de dificultades
								económicas, con la anterior, cuando el dinero llegaba de manera
								cuestionable. Pero desde que Cristo me rescató, me selló para su
								gloria. Esa transformación me enseñó que, aunque el camino sea
								difícil, el propósito de Dios en nuestra vida es mucho más
								grande que cualquier desafío que podamos enfrentar.
							</p>
							<p>
								Algunas personas comprenden el valor de la prudencia y el poder
								del silencio. Aunque el cristiano debe evitar hablar a la
								ligera, también hay momentos en los que es vital orar y, al
								mismo tiempo, hablar con valentía sobre quién es Jesús y lo que
								ha hecho en nuestra vida. Si en medio de mis dificultades me
								hubiera quedado callado y no hubiera compartido mi fe, no puedo
								imaginar dónde estaría hoy; probablemente no tendría el
								ministerio que Dios me ha confiado.
							</p>
							<p>
								Gracias a su misericordia eterna, mi esposa y yo hemos podido
								mantenernos firmes, incluso en la adversidad, proclamando a
								Cristo y fortaleciendo nuestra oración. Solo así encontramos la
								dirección que necesitábamos.
							</p>

							<div className="bg-yellow-900/20 p-6 rounded-lg my-8 border border-yellow-500/30">
								<p className="italic font-medium text-yellow-100 mb-4 text-center">
									"Pacientemente esperé a Jehová, y se inclinó a mí, y oyó mi
									clamor. Me sacó del pozo de la desesperación, del lodo
									cenagoso; Puso mis pies sobre la peña, y enderezó mis pasos.
									Puso luego en mi boca cántico nuevo, alabanza a nuestro Dios.
									Verán esto muchos, y temerán, y confiarán en Jehová."
								</p>
								<p className="text-right font-bold text-yellow-400">
									—Salmos 40:1-3
								</p>
							</div>

							<p>
								No puedo permanecer en silencio ni vivir en anonimato,
								dedicándome solo a orar en mi intimidad sin hablarle a los demás
								sobre el Dios que me salvó. ¡Lo gritaré en todos lados! ¡Cristo
								salva! ¡Cristo vive!
							</p>
						</div>
					</section>

					{/* Capítulo 4 */}
					<section
						id="capitulo-4"
						className="scroll-mt-24 p-6 md:p-8 bg-neutral-900/50 rounded-2xl border border-yellow-500/10">
						<h2 className="text-2xl md:text-3xl font-extrabold text-yellow-400 mb-6 uppercase tracking-tight">
							CAPÍTULO 4: EL SECRETO PARA LA VICTORIA
						</h2>
						<div className="space-y-6 text-lg text-slate-200">
							<p>
								Todos anhelan la victoria, el éxito, el crecimiento y las
								bendiciones que trae consigo. Sin embargo, pocos están
								dispuestos a pagar el precio que estas conquistas exigen. Muchos
								quieren crecer, pero al enfrentar el proceso, retroceden por
								miedo. Otros anhelan la bendición, pero huyen de la prueba. Lo
								cierto es que la victoria no es fruto de la comodidad, sino del
								sacrificio, de la perseverancia y, sobre todo, de la dependencia
								absoluta de Dios.
							</p>
							<p>
								Aquellos que verdaderamente alcanzan la victoria no son los que
								se sientan a llorar en medio del proceso, empezando a dudar de
								la bondad de Dios, sino los que entienden que cada prueba es una
								preparación, y cada proceso es una oportunidad para crecer en
								fe, carácter y madurez espiritual. Una frase muy famosa dice que{" "}
								<span className="italic text-yellow-200">
									"Dios da sus mejores batallas a sus mejores soldados"
								</span>
								, pero casi nadie menciona que el soldado que vence en la
								batalla es exaltado y condecorado... no por haber evitado el
								campo de batalla, sino por haber resistido hasta el final, con
								valentía y perseverancia.
							</p>
							<p>
								¿Cómo se puede declarar victorioso a quien nunca ha tenido
								ninguna batalla? Los ganadores no son aquellos que nunca
								enfrentaron dificultades, sino aquellos que se negaron a
								rendirse. Son personas que, a pesar de los tropiezos, las caídas
								y las adversidades, siguieron adelante.
							</p>
							<p>
								A continuación, te compartiré dos principios fundamentales para
								alcanzar la victoria:
							</p>

							<h3 className="text-xl font-bold text-yellow-100 mt-8 mb-4">
								Nunca dejes de orar
							</h3>
							<p>
								Es importante reconocer que, en ocasiones, hemos adoptado ideas
								equivocadas sobre lo que significa orar. Muchas veces, hemos
								caído en rutinas o prácticas que no nos llevan a una verdadera
								comunión con Dios. Podemos pensar que estamos en un lugar santo
								solo por haber reservado un tiempo para orar, pero eso no
								garantiza que estemos realmente entrando en Su presencia. Es
								vital aprender a orar correctamente, no por costumbre, sino
								porque la oración es lo único que puede fortalecer
								verdaderamente nuestra vida espiritual.
							</p>
							<p>
								La oración es el medio por el cual profundizamos nuestra
								comunión con Dios, dándonos la certeza de que Sus promesas se
								cumplirán en nuestras vidas. Sin embargo, si oramos sin
								reconocer quién es Dios y sin la reverencia que merece, no
								estamos entrando en Su presencia de manera genuina.
							</p>
							<p>
								A veces, nuestras oraciones son breves, de 10, 30 minutos o
								quizás una hora, pero si oramos con la constancia y profundidad
								con la que Jesús lo hacía, nuestra comunicación con Dios se
								volvería más natural y poderosa.
							</p>
							<p>
								Jesús, sin haber cometido pecado, pasaba noches enteras en
								oración, como lo narra el evangelio de Lucas. Subía al monte y
								oraba durante horas, para luego bajar y realizar milagros,
								cumpliendo la voluntad de Dios en la tierra. Si Él, siendo el
								Hijo de Dios, consideraba la oración una prioridad, cuánto más
								nosotros, que somos imperfectos, debemos seguir Su ejemplo. No
								olvidemos que la oración requiere sacrificio y constancia, algo
								que a menudo evitamos porque preferimos confiar en nuestra
								autosuficiencia en lugar de buscar la dirección de Dios.
							</p>
							<p>
								Los discípulos notaron que, cada vez que Jesús oraba, lo que
								pedía se cumplía, lo que los llevó a desear aprender a orar con
								la misma intensidad y efectividad. Jesús les enseñó que la
								oración debía ser en comunión íntima con Dios, en un diálogo
								sincero en el lugar secreto, donde el Padre se revela y habla a
								nuestro corazón.
							</p>
							<p>
								A través de la oración, recibimos poder y dirección para
								nuestras vidas. Jesús enfatizó, como se relata en Mateo, que
								debemos orar en secreto, sin buscar la aprobación de los demás,
								sino una relación genuina con Dios.
							</p>
							<p>
								Dios no se fija tanto en el lugar físico donde estamos orando,
								sino en nuestra disposición y comunión con Él. No podemos caer
								en la trampa de reducir la oración a una fórmula o método. Por
								más libros que leamos, la oración no puede limitarse a técnicas
								humanas. Es un patrón espiritual que debe vivirse a través de la
								experiencia y la relación con Dios.
							</p>
							<p>
								Jesús no nos entregó un método rígido para orar, sino un modelo
								que debía ser vivido con sinceridad y autenticidad. La oración
								no es mecánica, es un espacio donde Dios se revela, nos habla y
								nos transforma. Como dice{" "}
								<strong className="text-yellow-400 font-bold">
									Marcos 11:24
								</strong>
								:{" "}
								<span className="italic text-yellow-200">
									"Por eso les digo que todo lo que ustedes oren y pidan, crean
									que lo recibirán y lo tendrán"
								</span>
								. Pero para que eso sea una realidad, debemos orar desde un
								lugar de comunión genuina con el Padre, no simplemente
								repitiendo palabras, sino alineando nuestro corazón con Su
								voluntad.
							</p>
							<p>
								No se trata tanto del tiempo que pasamos orando o del lugar
								donde lo hacemos, sino de la disposición con la que nos
								acercamos a Dios. Él busca una relación viva y auténtica con
								nosotros, y esa relación es clave para recibir lo que hemos
								pedido, de acuerdo a Su voluntad y propósito.
							</p>

							<h3 className="text-xl font-bold text-yellow-100 mt-8 mb-4">
								Aférrate a la voluntad de Dios
							</h3>
							<p>
								Muchas veces nos encontramos persiguiendo nuestros propios
								deseos y planes, sin darnos cuenta de que Dios tiene un
								propósito diferente, mucho más grande y mejor para nuestras
								vidas.
							</p>
							<p>
								En la oración modelo que Jesús nos enseñó, Él no dice "haz lo
								que yo quiero", sino que pidió:{" "}
								<span className="italic text-yellow-200">
									"Hágase tu voluntad, como en el cielo, así también en la
									tierra"
								</span>{" "}
								(
								<strong className="text-yellow-400 font-bold">
									Mateo 6:10
								</strong>
								). Esto no es una simple frase, sino una declaración de
								confianza y rendición total a los planes del Padre, reconociendo
								que Su voluntad es buena, agradable y perfecta.
							</p>
							<p>
								Como hijos de Dios, debemos aprender a aferrarnos a Su voluntad,
								entendiendo que sus caminos y pensamientos son más altos que los
								nuestros (
								<strong className="text-yellow-400 font-bold">
									Isaías 55:8-9
								</strong>
								). Aunque a veces no comprendemos el porqué de ciertas
								situaciones, debemos confiar en que Su plan siempre nos llevará
								a un destino de mayor bendición. A menudo, lo que nosotros
								pedimos o anhelamos es limitado por nuestra perspectiva humana,
								pero Dios, que ve el panorama completo, tiene para nosotros lo
								mejor, incluso cuando no coincide con lo que inicialmente
								deseamos.
							</p>
							<p>
								Aferrarse a la voluntad de Dios significa soltar nuestros
								propios deseos, someter nuestros planes a Su control y confiar
								en que Él tiene un propósito para la circunstancia. Aunque no
								siempre sea fácil aceptar que algo no salga como planeamos,
								debemos recordar que lo que Él tiene preparado para nosotros es
								siempre superior a lo que podemos imaginar o pedir.
							</p>
							<p>
								Cuando Jesús se acerca a Juan el Bautista en{" "}
								<strong className="text-yellow-400 font-bold">
									Mateo 3:13-17
								</strong>
								, Juan ya había predicado acerca de Él, afirmando que después de
								él vendría alguien que era antes que él mismo. Para Juan, la
								mayor bendición que podría experimentar sería que aquel de quien
								habló, Jesús, lo bautizara, pues sabía que era el Hijo de Dios.
								Sin embargo, no sabía que habría una bendición aún mayor que ser
								bautizado por Él.
							</p>
							<p>
								Al cumplir con la voluntad del Padre y bautizar a Jesús, en
								lugar de ser bautizado por Él, Juan fue testigo de una de las
								más grandes manifestaciones de gloria que registra el Nuevo
								Testamento, e incluso tal vez toda la Biblia. Solo Juan pudo ver
								a los "tres grandes" en una misma manifestación: vio al Hijo
								cuando lo sumergió en el Jordán, vio al Espíritu Santo descender
								en forma de paloma sobre el Hijo, y escuchó al Padre abrir los
								cielos y declarar:{" "}
								<span className="italic text-yellow-200">
									"Este es mi Hijo amado, en quien tengo complacencia"
								</span>
								.
							</p>
							<p>
								Juan el Bautista fue testigo de la presencia simultánea del
								Padre, el Hijo y el Espíritu Santo en una manifestación
								gloriosa. Así, debemos orar siempre para que se haga la voluntad
								del Padre, y no la nuestra. Pedimos cosas que, según nosotros,
								son grandes, pero Dios tiene bendiciones aún mayores preparadas
								para nuestras vidas.
							</p>
							<p className="pl-4 border-l-2 border-yellow-500/50 text-yellow-200 italic my-6">
								"Y de igual manera el Espíritu nos ayuda en nuestra debilidad,
								porque no sabemos pedir como conviene, pero el Espíritu mismo es
								por nosotros con gemidos indecibles” (
								<strong className="text-yellow-400 font-bold not-italic">
									Romanos 8:26
								</strong>
								).
							</p>
							<p>
								La Biblia es clara al señalar que no sabemos lo que realmente
								nos conviene, por lo que, en consecuencia, tampoco podemos pedir
								correctamente a menos que el Espíritu Santo ponga las palabras
								adecuadas en nuestra boca. Por lo tanto, como creyentes en
								Cristo, es fundamental no aferrarnos a las cosas materiales ni a
								las posiciones, sino caminar con la flexibilidad mental de que,
								en cualquier momento, Dios nos moverá según su plan superior. No
								es pecado fijarse metas; de hecho, es algo muy bueno y correcto,
								pero debemos entender que los caminos del Señor son más altos
								que los nuestros, y sus pensamientos, mucho más perfectos.
							</p>
							<p>
								Si has estado orando durante años por algo en particular y de
								repente descubres que la voluntad de Dios es otra, simplemente
								da gracias y sigue firme las pisadas que Él marque.{" "}
								<strong className="text-yellow-400 font-bold">
									Proverbios 14:12
								</strong>{" "}
								nos enseña que{" "}
								<span className="italic text-yellow-200">
									"hay camino que al hombre le parece derecho, pero al final es
									camino de muerte"
								</span>
								. Es importante reflexionar sobre esta verdad bíblica al soñar
								con lo que deseamos para nuestras vidas, pues aferrarse a
								ideales sin consultar la voluntad de Dios solo nos llevará por
								un "camino de muerte".
							</p>
							<p>
								Debemos dar lugar al Espíritu Santo para que ministre a nuestro
								espíritu sobre el propósito de Dios para nosotros, moldeando
								nuestra alma hasta hacerla sumisa a sus designios celestiales,
								aunque no siempre nos producen felicidad. El gozo, sin embargo,
								siempre estará presente.
							</p>
						</div>
					</section>

					{/* Capítulo 5 */}
					<section
						id="capitulo-5"
						className="scroll-mt-24 p-6 md:p-8 bg-neutral-900/50 rounded-2xl border border-yellow-500/10">
						<h2 className="text-2xl md:text-3xl font-extrabold text-yellow-400 mb-6 uppercase tracking-tight">
							CAPÍTULO 5: SIN FE NO HAY CONQUISTA
						</h2>
						<div className="space-y-6 text-lg text-slate-200">
							<p>
								El relato de la caída de las murallas de Jericó demuestra cómo
								una fe constante es fundamental para lograr victorias que
								parecen imposibles. En el libro de{" "}
								<strong className="text-yellow-400 font-bold">
									Josué 6:1-20
								</strong>
								, Dios dio una instrucción que, humanamente, no tenía sentido:
								rodear la ciudad durante seis días en silencio, y el séptimo día
								dar siete vueltas, tocar las trompetas y clamar para que las
								murallas de Jericó cayeran.
							</p>
							<p>
								Quizás, para el ejército israelita, acostumbrado a usar sus
								armas en cada batalla, esta estrategia pudo haber parecido
								extraña; sin embargo, obedecieron con fe, y fue precisamente esa
								fe en la palabra de Dios lo que les permitió conquistar la
								ciudad de una manera milagrosa.
							</p>
							<p>
								¿Cuántas conquistas has perdido por tu falta de fe? ¿Cuántas
								veces has dejado que la duda te impida avanzar hacia la victoria
								que Dios ya ha prometido? La fe es el puente que te llevará a un
								nivel más alto de intimidad con Dios, donde podrás alcanzar las
								victorias que creías imposibles.
							</p>

							<h3 className="text-xl font-bold text-yellow-100 mt-8 mb-4">
								El poder de creer
							</h3>
							<p>
								Muchas veces oramos sin fe, y sin fe es imposible que el milagro
								ocurra. Cuando Jesús hacía milagros, se acercaba a las personas
								y les preguntaba si creían. Ellas le contestaban diciendo: "Sí,
								yo creo". Entonces Jesús les decía:{" "}
								<span className="italic text-yellow-300 font-semibold">
									"Tu fe te ha salvado"
								</span>
								. Y al instante recibían el milagro. Del mismo modo, si creemos,
								Dios hará cosas mayores, grandes y poderosas en nuestra vida, si
								confiamos en Él.
							</p>
							<p>
								Recuerdo que un día, en una campaña evangelística, Dios se
								glorificó en sanidad y liberación desde el primer día. En el
								segundo día, se me acercó una madre con su hija de 11 años, y me
								dijo:
							</p>
							<p className="pl-4 border-l-2 border-yellow-500/50 text-yellow-200 italic">
								—Si usted ora por ella, ella sanará. Mi hija lo cree.
							</p>
							<p>Le respondí:</p>
							<p className="pl-4 border-l-2 border-yellow-500/50 text-yellow-200 italic">
								—Corazón, recuerda que el que sana no soy yo, sino el que me
								envió, que es Dios. ¿Tú crees que Él te sanará?
							</p>
							<p>Y la niña contestó:</p>
							<p className="pl-4 border-l-2 border-yellow-500/50 text-yellow-200 italic">
								—Mi madre estaba enferma, mi padre también, y cuando ayer usted
								oró por él, fue sanado.
							</p>
							<p>La niña continuó:</p>
							<p className="pl-4 border-l-2 border-yellow-500/50 text-yellow-200 italic">
								—Yo sufro de epilepsia, todos los días me despierto a la 1:30 de
								la madrugada con ataques. Si usted ora por mí, sé que Dios me
								sanará.
							</p>
							<p>
								Le pregunté:{" "}
								<span className="italic text-yellow-200">
									—¿Tú crees que Dios te sanará?
								</span>{" "}
								—y ella me respondió:{" "}
								<span className="font-bold text-yellow-400">—Sí.</span>
							</p>
							<p>
								Entonces le dije:{" "}
								<span className="font-bold text-yellow-400">
									—Tu fe te ha sanado.
								</span>
							</p>
							<p>
								Al día siguiente, su madre se me acercó y testificó que su hija
								se despertó a las 4:00 de la madrugada. La madre estaba
								despierta, observándola, esperando ver si le daba el ataque de
								epilepsia que siempre la aquejaba a esa hora. La niña le
								preguntó qué hacía despierta, si el pastor que oró por ella dijo
								que Dios la había sanado. Luego, la hija le dijo que se fuera a
								dormir, asegurando que ya estaba sana.
							</p>

							<h3 className="text-xl font-bold text-yellow-100 mt-8 mb-4">
								Certeza en lo invisible
							</h3>
							<div className="bg-yellow-900/20 p-6 rounded-lg my-6 border border-yellow-500/30">
								<p className="italic font-medium text-yellow-100 mb-4">
									"Pero sin fe es imposible agradar a Dios; porque es necesario
									que el que se acerca a Dios crea que le hay, y que es
									galardonador de los que le buscan."
								</p>
								<p className="text-right font-bold text-yellow-400">
									—Hebreos 11:6
								</p>
							</div>
							<p>
								En{" "}
								<strong className="text-yellow-400 font-bold">
									Hebreos 11:1
								</strong>
								, se da la mejor y más clara definición de lo que es la Fe. Dice
								que es la certeza y seguridad absoluta de lo que se espera, y la
								convicción y visión de lo que aún no se ha visto. Esto implica
								que cuando oramos a Dios, aguardamos el milagro sin dudar,
								comprendiendo que la voluntad de Dios para nuestras vidas es
								buena.
							</p>
							<p>
								Al orar, aunque no vea físicamente lo que pido, en el mundo
								espiritual sé que es una realidad. Si tomamos el versículo 6 y
								lo combinamos con el 1, notamos que Dios se agrada de quien no
								duda, de quien cree sin ver. Consecuentemente, abrirá los cielos
								a su favor.
							</p>
							<p>
								Para orar con fe, hay que salir de lo natural y sumergirse en lo
								espiritual, olvidando las limitaciones humanas y confiando en
								los recursos inagotables de Dios. Es fundamental aclarar lo que
								significa la voluntad de Dios, ya que quien ora con fe acepta su
								voluntad, entendiendo que es lo mejor para quien pide. La fe
								rompe cadenas, pero no intenta sobreponerse a los designios del
								Espíritu Santo.
							</p>
							<p>
								La fe no confunde la voluntad de Dios con las emociones humanas.
								Más bien, es una fuerza que brinda al hombre la capacidad de
								traer el cielo a la tierra. El apóstol Santiago insiste en la
								relación entre la fe y las obras, ya que de nada sirve una fe
								sin obras. Por eso te invito a que fortalezcas tu fe: ¡sí!, tu
								convicción en Dios y la seguridad de que Él te guía en todos tus
								caminos. Además, te exhorto a que te disciplines en la oración,
								en una constante intimidad con el Señor. Solo así verás cumplida
								su voluntad en tu vida.
							</p>

							<h3 className="text-xl font-bold text-yellow-100 mt-8 mb-4">
								La fe sin obras es una fe muerta
							</h3>
							<p>
								Es fácil decir que tenemos fe en Dios, que confiamos en su poder
								y en sus promesas, pero la realidad es que la fe no es solo una
								cuestión de palabras o pensamientos. La fe verdadera se
								demuestra con acciones. El apóstol Santiago lo expresa de esta
								manera:{" "}
								<span className="italic text-yellow-200">
									"Así también la fe, si no tiene obras, está completamente
									muerta"
								</span>{" "}
								(
								<strong className="text-yellow-400 font-bold">
									Santiago 2:17
								</strong>
								). Una fe sin obras es estéril, vacía.
							</p>
							<p>
								Una fe muerta no produce milagros. La razón por la que pides y
								no recibes, es porque a tu fe le falta acción. No es solo pedir,
								es avanzar en pos de eso que pediste, y actuar creyendo que ya
								lo recibiste.
							</p>
							<p>
								Cuando Jesús sanaba a las personas, no solo les decía que
								tuvieran fe; también los llamaba a actuar. A muchos les dijo:{" "}
								<span className="italic text-yellow-200">
									"Levántate, toma tu lecho y anda"
								</span>{" "}
								(<strong className="text-yellow-400 font-bold">Juan 5:8</strong>
								). Él no solo declaraba sanidad, sino que pedía una respuesta,
								una acción.
							</p>
							<p>
								La fe verdadera se manifiesta cuando no solo decimos que
								creemos, sino cuando actuamos como si lo que pedimos ya es una
								realidad. Es el tipo de fe que no espera hasta ver para actuar,
								sino que se mueve, confiando en que Dios ya ha respondido.
							</p>
							<p>
								Es fácil decir que tienes fe, pero ¿cómo la demuestras? ¿Te
								estás moviendo en la dirección de lo que crees que Dios hará en
								tu vida? La fe que agrada a Dios es aquella que va más allá de
								la oración y se convierte en acción, en obediencia, en confianza
								plena.
							</p>

							<h3 className="text-xl font-bold text-yellow-100 mt-8 mb-4">
								Una petición esencial
							</h3>
							<p>
								En{" "}
								<strong className="text-yellow-400 font-bold">
									Lucas 17:5
								</strong>
								, vemos un momento clave en la vida de los discípulos: "Dijeron
								los apóstoles al Señor: Auméntanos la fe". Esta petición revela
								una profunda comprensión del corazón del ministerio de Jesús. Al
								observar los milagros, las enseñanzas y la vida de su Maestro,
								los discípulos no le pidieron más poder, más fama, ni siquiera
								más dones espirituales. Ellos pidieron al Maestro que aumentara
								su fe, porque entendieron que la fe es la base sobre la cual
								todo lo demás se construye.
							</p>
							<p>
								Es interesante que, ante la grandeza de lo que veían, no
								pidieran habilidades extraordinarias o reconocimiento. No
								buscaron el poder para realizar los mismos milagros que Jesús
								hacía, sino que quisieron lo más esencial: la fe. Sabían que
								todo lo que Jesús lograba sería posible solo a través de ella.
							</p>
							<p>
								Como dijo Jesús en otra ocasión:{" "}
								<span className="italic text-yellow-200">
									"Si tuvierais fe como un grano de mostaza, podríais decir a
									este monte: Pásate de aquí allá, y se pasará; y nada os será
									imposible"
								</span>{" "}
								(
								<strong className="text-yellow-400 font-bold">
									Mateo 17:20
								</strong>
								). Con fe, todo se puede alcanzar: milagros, transformación y
								una vida guiada por la voluntad de Dios. No es solo una creencia
								superficial, es una convicción que te lleva a actuar, a confiar
								plenamente en lo que Dios hará, aunque aún no lo veas.
							</p>

							<h3 className="text-xl font-bold text-yellow-100 mt-8 mb-4">
								Versículos sobre la fe
							</h3>
							<ul className="space-y-4">
								{[
									{
										ref: "Hebreos 11:1",
										text: "Es, pues, la fe, la certeza de lo que se espera, la convicción de lo que no se ve."
									},
									{
										ref: "Mateo 21:22",
										text: "Y todo lo que pidiereis en oración, creyendo, lo recibiréis."
									},
									{
										ref: "Marcos 9:23",
										text: "Jesús le dijo: Si puedes creer, al que cree todo le es posible."
									},
									{
										ref: "Romanos 10:17",
										text: "Así que la fe es por el oír, y el oír, por la palabra de Dios."
									},
									{
										ref: "2 Corintios 5:7",
										text: "Porque por fe andamos, no por vista."
									},
									{
										ref: "Efesios 2:8",
										text: "Porque por gracia sois salvos por medio de la fe; y esto no de vosotros, pues es don de Dios."
									},
									{
										ref: "Santiago 1:6",
										text: "Pero pida con fe, no dudando nada; porque el que duda es semejante a la ola del mar, que es arrastrada por el viento y echada de una parte a otra."
									},
									{
										ref: "Mateo 17:20",
										text: "Jesús les dijo: Por vuestra poca fe; porque de cierto os digo, que si tuviereis fe como un grano de mostaza, diréis a este monte: Pásate de aquí allá, y se pasará; y nada os será imposible."
									}
								].map((verse, index) => (
									<li
										key={index}
										className="flex flex-col sm:flex-row gap-2 sm:gap-4 bg-neutral-900 border border-neutral-800 p-4 rounded-lg shadow-sm">
										<span className="font-bold text-yellow-400 whitespace-nowrap">
											{verse.ref} —
										</span>
										<span className="text-slate-300 italic">{verse.text}</span>
									</li>
								))}
							</ul>
						</div>
					</section>

					{/* Capítulo 6 */}
					<section
						id="capitulo-6"
						className="scroll-mt-24 p-6 md:p-8 bg-neutral-900/50 rounded-2xl border border-yellow-500/10">
						<h2 className="text-2xl md:text-3xl font-extrabold text-yellow-400 mb-6 uppercase tracking-tight">
							CAPÍTULO 6: PRINCIPIOS QUE TODO VENCEDOR DEBE APLICAR
						</h2>
						<div className="space-y-8 text-lg text-slate-200">
							<p>
								Cuando notas la ausencia de la voz de Dios en tu vida, no es que
								Él deje de hablarte porque no quiera hacerlo como Padre. Al
								contrario, Su mayor anhelo es comunicarse diariamente con Su
								creación. Sin embargo, muchas veces no lo hace porque, cuando
								habla, su propósito principal es darnos indicaciones, y
								generalmente el ser humano no está dispuesto a seguirlas.
							</p>
							<p>
								A la mayoría no le gusta obedecer lo que Dios pide, y por esta
								razón Él prefiere dejar de hablar, ya que sería en vano si no
								vamos a seguir Su voluntad. Si Dios te habla constantemente y tú
								no obedeces, estarías pecando a cada momento, porque desobedecer
								es pecar. Por eso, en Su sabiduría y amor, Dios prefiere dejar
								de hablarte antes que provocar a pecar por desobediencia.
							</p>

							<div>
								<h3 className="text-xl font-bold text-yellow-100 mb-3">
									Actúa por convicción y no por sentimientos
								</h3>
								<p className="mb-4">
									No debes ligar tus sentimientos ni emociones a tu llamado,
									porque eso podría hacerte perder las bendiciones que Dios
									tiene para tu vida. Con frecuencia, asociamos nuestras
									emociones a nuestro propósito, lo que puede alejarnos del plan
									divino. Dios amó tanto al mundo que entregó a Su único Hijo,
									el Amado del cielo. Si Él hubiera atado sus sentimientos o
									emociones a ese acto de amor, tal vez no habría permitido que
									Jesús diera Su vida por nosotros. No habría dejado que Su Hijo
									muriera en la cruz del Calvario.
								</p>
								<p className="mb-4">
									Por eso, a menudo te encuentras llorando en un rincón,
									sintiéndote solo, angustiado o creyendo que Dios te ha
									abandonado. Pero Dios no busca a alguien que viva solo de
									sentimientos; Él está buscando guerreros que se levanten en
									medio de su llanto, en medio de su quebranto y batallas, y que
									digan:{" "}
									<span className="italic text-yellow-200">
										"Yo puedo, voy a pelear esta batalla porque Dios me ha
										escogido para esto"
									</span>
									.
								</p>
								<p className="mb-4">
									Cuando alguien es llamado, puede decidir si quiere ir o no,
									porque solo ha escuchado una voz. Pero cuando alguien es
									escogido, no tiene alternativa; ha sido señalado con un
									propósito claro. Como cuando éramos niños y nuestros padres
									nos llamaban a nosotros y a nuestros hermanos; tal vez nadie
									respondía, y entonces enviaban a otro a hacer el trabajo. Pero
									cuando nuestro padre mencionaba nuestro nombre directamente,
									no había opción: teníamos que cumplir con lo que se nos
									asignaba.
								</p>
								<p className="mb-4">
									Así también sucede con Dios. Tal vez no solo te ha llamado,
									sino que te ha escogido para una misión que solo tú puedes
									cumplir.
								</p>
								<p>
									A veces te preguntas:{" "}
									<span className="italic text-yellow-200">
										—¿Por qué a mí, Señor?
									</span>{" "}
									La respuesta es que, si este proceso hubiera sido dado a otra
									persona, tal vez esa persona ya se habría rendido. Pero tú,
									aunque has pasado por mucho, has seguido adelante. Dios te
									escogió a ti, y por eso necesitas terminar la asignación que
									te fue dada, para recibir tus bendiciones.
								</p>
							</div>

							<div>
								<h3 className="text-xl font-bold text-yellow-100 mb-3">
									No te desanimes por las críticas
								</h3>
								<p className="mb-4">
									Siempre habrá personas que critiquen el éxito de los demás
									porque, en el fondo, saben que nunca lo alcanzarán. Por eso,
									cuando logras algo, muchos intentarán minimizar tus logros,
									diciendo cosas como: "Lo consiguió porque tuvo ayuda",
									"Cualquiera puede tener ese vehículo", "Ese cargo en la
									empresa lo puede obtener cualquiera", o "Ese liderazgo no es
									nada especial". Pero esas críticas nacen del hecho de que
									ellos mismos no han logrado lo que tú has alcanzado, y por eso
									no valoran lo que tienes.
								</p>
								<p className="mb-4">
									Esto sucede incluso dentro de la familia. Algunos dirán:
									"Cualquiera puede tener una familia estable", pero no ven lo
									que hay detrás de esa estabilidad. No entienden que antes de
									tener un matrimonio armonioso, tuviste que moldear a tu
									pareja, pasar por momentos difíciles, y muchas veces llorar en
									silencio para llegar a donde estás hoy.
								</p>
								<p className="mb-4">
									Para lograr ese cargo en tu empresa, tuviste que soportar
									situaciones difíciles: bochornos de tu jefe, confrontaciones,
									momentos incómodos que formaron parte de tu crecimiento.
									Muchas veces, no fue porque lo merecieras, sino porque él era
									el jefe, y aprendiste a manejar esas situaciones.
								</p>
								<p>
									Es fácil criticar desde la comodidad, cuando ya has alcanzado
									algo. Las personas que critican lo hacen porque no están
									dispuestas a pasar por lo que tú has pasado. Prefieren
									quedarse sentadas en la banca de los que critican, en lugar de
									levantarse y aplaudir el éxito ajeno, con la esperanza de que
									algún día también ellos lo alcanzarán.
								</p>
							</div>

							<div>
								<h3 className="text-xl font-bold text-yellow-100 mb-3">
									Da sin restricciones
								</h3>
								<p className="mb-4">
									Es fundamental aprender a obedecer la voz de Dios cuando nos
									habla acerca de dar, ya que en ello se encuentra la verdadera
									bendición. No se trata solo de dar lo que nos es cómodo, sino
									de ofrecer aquello que Él nos pide específicamente. No basta
									con ofrecer una disculpa cuando Dios te llama a un perdón
									sincero. No se trata de entregar una camisa vieja cuando Él te
									pide que compres una nueva para tu hermano. Tampoco es
									suficiente dar lo que llevas en los bolsillos cuando Él te
									está llamando a ofrecer lo que tienes en tu cuenta.
								</p>
								<p className="mb-4">
									Para muchos, dar puede ser un desafío, pero despojarse es una
									de las formas más puras de demostrar fe, ya que la Biblia nos
									enseña que Dios{" "}
									<span className="italic text-yellow-200">
										"ama al dador alegre"
									</span>{" "}
									(
									<strong className="text-yellow-400 font-bold">
										2 Corintios 9:7
									</strong>
									). Y no damos con el propósito de recibir algo a cambio; damos
									con la confianza de que Dios es y siempre será nuestro
									sustento.
								</p>
								<p className="mb-4">
									El que da sin esperar nada a cambio es verdaderamente libre,
									pero quien da esperando recibir algo se convierte en esclavo
									de ese deseo. Queda atado a lo que espera, porque su
									motivación no es el acto de dar, sino la recompensa que ansía
									obtener. Muchas veces, las personas te ofrecen algo o te
									ayudan esperando que, en algún momento, les devuelvas el
									favor. Sin embargo, todo aquel que da con la expectativa de
									recibir se convierte en prisionero de eso que espera.
								</p>
								<p>
									Cuando das de esa manera, te encuentras esperando un
									agradecimiento que tal vez nunca llegará. Estás atado a
									personas que, en muchos casos, no valorarán el esfuerzo que
									hiciste por ellas. Por eso, cuando des o ayudes, hazlo sin
									esperar nada a cambio, para no convertirte en esclavo de
									quienes nunca van a apreciar lo que hiciste. Si vives
									esperando el reconocimiento, podrías quedarte atrapado en una
									espera interminable, mientras que para ellos, ese acto que
									tanto te costó no tuvo mayor importancia, o incluso podrían
									llegar a creer que cualquiera lo habría hecho.
								</p>
								<p>
									Sin embargo, en los momentos de necesidad, cuando se vieron
									solos, fue tu valentía la que marcó la diferencia. Fuiste tú
									quien se lanzó, sin importar la profundidad del problema. Por
									eso, cuando decidas dar o ayudar, hazlo de corazón, sin
									esperar nada a cambio. Solo así serás verdaderamente libre,
									sin depender del agradecimiento o la valoración de los demás.
								</p>
							</div>

							<div>
								<h3 className="text-xl font-bold text-yellow-100 mb-3">
									Habla la verdad, pero en amor
								</h3>
								<p className="mb-4">
									A las personas no les gusta que seas hipócrita con ellas, pero
									tampoco les agrada que les digas la verdad de frente. Muchas
									veces, los seres humanos rechazan la hipocresía y la mentira,
									pero al mismo tiempo se sienten incómodos cuando se les dice
									la verdad. Un ejemplo común es cuando tu pareja te pregunta:
									"¿Cómo me veo?". Si le respondes: "No me gusta cómo te queda
									esa ropa" o "Esa prenda te hace ver con más peso", se siente
									herida. Sin embargo, si evitas ser honesto y suavizas tu
									opinión, te acusan de ser hipócrita y te piden que seas
									sincero.
								</p>
								<p className="mb-4">
									Este dilema surge porque, aunque las personas dicen querer la
									verdad, muchas veces no están preparadas para recibirla sin
									incomodarse. No obstante, es importante señalar que decir la
									verdad no significa ofender. Hay quienes creen que ser
									brutalmente honestos y ofender a otros es una forma de ser
									sinceros, pero no es así. Ser honesto no implica herir.
								</p>
								<p>
									Por lo tanto, hay que tener cuidado con cómo se dice la
									verdad. La verdad tiene el poder de confrontar, pero no
									debería ofender. Es posible ser sincero sin dañar los
									sentimientos de los demás, usando la verdad de una manera
									sabia y respetuosa.
								</p>
							</div>

							<div>
								<h3 className="text-xl font-bold text-yellow-100 mb-3">
									Sé sabio al buscar consejos
								</h3>
								<p className="mb-4">
									No a todo el mundo se le debe pedir un consejo, ni se debe
									recibir de cualquiera. Repito: no todos son aptos para darte
									un consejo, ni todos merecen que tomes en serio su opinión.
									Muchas veces, las personas te aconsejan desde su propia
									perspectiva, y es posible que su situación no tenga nada que
									ver con la tuya. Otros dan opiniones basadas en lo que han
									oído o lo poco que saben, no en la realidad de los hechos.
								</p>
								<p className="mb-4">
									Aquí es donde entra la importancia del discernimiento, la
									capacidad de juzgar sabiamente qué consejos son útiles y
									cuáles no. La Biblia nos llama a ser prudentes y a pedir
									discernimiento para tomar decisiones correctas.{" "}
									<strong className="text-yellow-400 font-bold">
										Proverbios 3:21
									</strong>{" "}
									nos dice:{" "}
									<span className="italic text-yellow-200">
										"Hijo mío, conserva el buen juicio y el discernimiento, no
										pierdas de vista la prudencia."
									</span>{" "}
									Es fundamental pedirle a Dios sabiduría para distinguir entre
									una opinión que edifica y una que destruye.
								</p>
								<p className="mb-4">
									Esto sucede con frecuencia cuando decides emprender. Siempre
									habrá personas que te aconsejen mal, ya sea porque no quieren
									que te superes o porque temen que tengas éxito. Otros te darán
									opiniones con la intención de desestabilizar lo tuyo y
									distraerte de lo que realmente quieres lograr. Por eso, no es
									raro escuchar de personas que soñaban con abrir una tienda de
									ropa y, al final, terminan abriendo un comedor.
								</p>
								<p className="mb-4">
									¿Por qué sucede esto? Porque escucharon tantas opiniones que
									terminaron abandonando sus propios sueños para seguir los de
									otros. O se dejaron llevar por consejos que los desviaron de
									su camino original, guiados por aquellos que no querían que
									les fuera igual de bien.
								</p>
								<p className="mb-4">
									Aquí es vital ejercer discernimiento: saber cuándo escuchar y
									cuándo seguir el propósito que Dios ha puesto en tu corazón.
									Como dice{" "}
									<strong className="text-yellow-400 font-bold">
										Santiago 1:5
									</strong>
									: "Si a alguno de ustedes le falta sabiduría, pídala a Dios, y
									Él se la dará, pues Dios da a todos generosamente sin
									menospreciar a nadie."
								</p>
								<p>
									Recuerda que no todos tienen el mismo corazón que tú, ni la
									misma intención de darte un buen consejo o una opinión
									honesta. Por eso, ten mucho cuidado a quién escuchas, y
									asegúrate de que tus decisiones están guiadas por la sabiduría
									que viene de lo alto, no por las opiniones de aquellos que no
									comparten tus sueños o visión.
								</p>
							</div>

							<div>
								<h3 className="text-xl font-bold text-yellow-100 mb-3">
									Quiérete a ti mismo
								</h3>
								<p className="mb-4">
									Quererse a uno mismo es el mejor romance para la vida. Muchas
									veces dedicas tu amor a los demás, pero te olvidas de amarte a
									ti mismo. Te esfuerzas en dar amor a otros, pero descuidas el
									cariño que tú también necesitas. ¿Por qué sucede esto? Porque
									no has tomado el tiempo para detenerte y pensar en ti. A
									veces, necesitas decir: "Hoy, necesito descansar." Aunque
									quieras compartir con tus amigos, es fundamental que te
									priorices. Primero, ámate y descansa; luego, comparte.
								</p>
								<p className="mb-4">
									¿Cuánto tiempo ha pasado desde que te diste un gusto simple,
									como tomar una taza de café mientras miras el mar? ¿Cuándo fue
									la última vez que hiciste algo que realmente te encanta, pero
									que has postergado por tanto tiempo? Es importante que te
									dediques tiempo a ti mismo, porque el amor propio es el
									romance que perdurará toda la vida.
								</p>
								<p className="mb-4">
									Las personas estarán a tu lado mientras les convenga; algunas
									te valoran, otras solo aprovechan tu generosidad o
									personalidad. Y en muchas ocasiones, algunas de ellas se irán,
									te van a traicionar o simplemente desaparecerán. Aunque
									algunos se queden, al final del día, el único que siempre
									estará ahí para ti, sin fallar, eres tú mismo.
								</p>
								<p>
									Es importante entender que el amor propio no es egoísmo. La
									misma Biblia nos enseña:{" "}
									<span className="italic text-yellow-200">
										"Ama a tu prójimo como a ti mismo"
									</span>{" "}
									(
									<strong className="text-yellow-400 font-bold">
										Mateo 22:39
									</strong>
									). Este mandamiento implica que para poder amar a los demás,
									primero debemos amarnos a nosotros mismos. Si no cuidamos de
									nuestra propia salud física, emocional y espiritual, no
									podremos cuidar verdaderamente a los demás. Amarte no
									significa desatender a los demás, sino asegurarte de que estás
									lo suficientemente fuerte y pleno para dar lo mejor de ti a
									quienes te rodean.
								</p>
							</div>

							<div>
								<h3 className="text-xl font-bold text-yellow-100 mb-3">
									No le temas al fracaso
								</h3>
								<p className="mb-4">
									El que sabe cómo subir no tiene miedo de bajar, porque confía
									en que sabe cómo volver a subir. Muchas personas temen
									enfrentarse a una derrota o perder algo, simplemente porque no
									entienden cómo llegaron a donde están. Subieron un día porque
									alguien les ayudó, pero luego se jactan de haberlo logrado por
									su propio mérito. Y ahora, temen caer porque saben que, en
									algún momento, traicionaron a esa persona que les dio una
									mano, y ya no cuentan con su apoyo.
								</p>
								<p className="mb-4">
									Por eso, quien realmente sabe cómo alcanzar el éxito no tiene
									miedo de perderlo, porque ha aprendido el proceso y no depende
									de otros para volver a subir. Es crucial que, aunque alguien
									te ayude a llegar más alto, aprendas por ti mismo el camino
									hacia el éxito. De esa manera, si alguna vez te toca bajar, no
									tendrás que traicionar ni dañar a nadie por miedo a caer. En
									cambio, tendrás la confianza de que, sin importar las
									circunstancias, sabrás cómo levantarte nuevamente.
								</p>
								<p>
									El verdadero éxito no se basa solo en llegar a la cima, sino
									en conocer el proceso para que, si te encuentras en un valle,
									puedas volver a ascender con la misma fortaleza.
								</p>
							</div>
						</div>
					</section>

					{/* Capítulo 7 */}
					<section
						id="capitulo-7"
						className="scroll-mt-24 p-6 md:p-8 bg-neutral-900/50 rounded-2xl border border-yellow-500/10">
						<h2 className="text-2xl md:text-3xl font-extrabold text-yellow-400 mb-6 uppercase tracking-tight">
							CAPÍTULO 7: TEN CUIDADO CON LOS JUDAS Y LOS PEDROS
						</h2>
						<div className="space-y-6 text-lg text-slate-200">
							<p>
								Muchas veces te pueden llegar a confundir con lobos por tu
								lealtad a tu manada, no por el mal corazón que tienes. La
								lealtad no es algo que se dice, sino algo que se prueba; es algo
								que no se exhibe, sino que se demuestra cuando llega el momento.
								La lealtad tiene hora, minutos y segundos. ¿Por qué me refiero a
								la lealtad de esta manera? Porque la lealtad se prueba en el
								momento exacto y preciso en que ocurren las cosas, y ahí es
								cuando se sabe si verdaderamente eres leal.
							</p>
							<p>
								Por eso, cuando elijas, debes saber elegir para que, al hacerlo,
								no atraigas a un Judas, como muchos dirán, sino quizás a un
								Pedro. ¿Qué quiere decir esto? En realidad, Judas no traicionó
								al Maestro solo porque sí; Judas fue escogido para entregar al
								Maestro. Jesús no llevó a Judas al monte, Jesús no llevó a Judas
								a caminar sobre las aguas, Jesús no pagó los impuestos de Judas.
								Sin embargo, con Pedro, Jesús lo llevó al monte, le reveló quién
								era, pagó el impuesto de Pedro con una moneda que había en la
								boca de un pez y caminó sobre las aguas con él.
							</p>

							<h3 className="text-xl font-bold text-yellow-100 mt-8 mb-4">
								La traición de la cercanía
							</h3>
							<p>
								Existen unos "Pedros" a quienes les has dado todo: los has
								llevado a tu casa, les has dado de comer, les has ayudado
								financieramente, y en el momento en que te tienen en la cruz,
								son los primeros en traicionarte y negarte tres veces.
							</p>
							<p>
								Esos Pedros que te juraron lealtad, que decían que irían contigo
								hasta la muerte, que afirmaban que no importaba nada porque eras
								su hermano y su amigo, son los primeros que, al comenzar la
								persecución contra ti, dicen: "Yo no lo conozco. Yo no soy. Yo
								nunca he estado con él."
							</p>
							<p>
								Por eso, hay que tener cuidado, no con los Judas, que fueron
								escogidos para fortalecerte. ¿Por qué para fortalecerte? Porque
								los Judas son esas personas que están ahí, y tú sabes que no son
								buenas para ti, pero su presencia tiene un propósito. Y en el
								momento en que quieres tirar la toalla, dices: "No, no puedo
								soltarla porque si la suelto, este Judas se va a burlar de mí.
								Si la suelto, este Judas dirá que tenía la razón. Si la suelto,
								este Judas dirá que siempre tuvo la razón en todo lo malo que
								habló de mí". Por eso, esos Judas te dan la fuerza para
								continuar.
							</p>
							<p>
								Sin embargo, los Pedros que decían que irían contigo hasta la
								muerte, en el primer momento en que empiezan la persecución, la
								crítica, la murmuración contra ti y la blasfemia, cuando caes o
								fallas, son los primeros que te niegan y dicen: "Yo estuve ahí
								en un momento, pero no es mi hermano, él nunca me ayudó, él
								nunca hizo tal cosa por mí". Por eso debes cuidarte no de los
								Judas, sino de los Pedros. El enemigo nunca te va a traicionar;
								el que te traiciona es el amigo.
							</p>

							<h3 className="text-xl font-bold text-yellow-100 mt-8 mb-4">
								La lealtad de la manada
							</h3>
							<p>
								Dentro de ese mismo punto, cabe destacar que los lobos no son
								los más fuertes. No, pero tampoco los verás saltando en un
								circo. ¿Por qué? Porque son leales a sus manadas. Los lobos no
								son esas personas que, en un momento dado, te aplauden sin estar
								de acuerdo contigo. No, no, no. Los lobos no se van al bando más
								fuerte simplemente porque sea el bando que está en auge; no
								cambiarán de bando por eso.
							</p>
							<p>
								Los lobos no traicionan. No se van con aquellos que tienen
								fuerza en momentos de debilidad; prefieren morir siendo leales a
								su manada, siendo leales a los suyos. ¿Sabes por qué? Porque los
								lobos pelean por la manada, no por sus propios intereses. La
								envidia existe en muchos otros, y por eso solo siguen a personas
								con algún tipo de éxito. Los lobos no sienten envidia; pelean
								por la manada completa, porque entienden que las bendiciones
								deben disfrutarse entre todos.
							</p>
							<p>
								Hay personas que solo se alinean con un lado u otro porque creen
								que lo suyo es solo suyo, y es entonces cuando entra la envidia,
								ese sentimiento del seguidor que en la vida no ha logrado nada.
								Pero los lobos no son así; no sienten envidia porque entienden
								que lo que van a recibir es para disfrutarlo entre todos. Por
								eso, vuelvo y te repito: te han confundido con lobos no por la
								maldad en tu corazón, sino por tu lealtad a tu manada. Continúa
								siendo leal a tu manada; tarde o temprano, la vida te
								recompensará.
							</p>
							<p>
								¿Qué eres? ¿Un Judas o un Pedro? ¿Un lobo fiel a su manada, o
								simplemente un león que quiere reinar solo?
							</p>

							<h3 className="text-xl font-bold text-yellow-100 mt-8 mb-4">
								Si quieres llegar temprano, vete despacio
							</h3>
							<p>
								Este punto es muy importante porque mi abuelo siempre me decía:{" "}
								<span className="italic text-yellow-200">
									"Si quieres llegar temprano, vete despacio"
								</span>
								. Cuando era niño, no entendía esto, hasta que un día, en un
								accidente, comprendí que cuanto más rápido corría, más tarde
								podía llegar a mi destino, o simplemente nunca llegar.
							</p>
							<p>
								Muchas veces en la vida, las bendiciones nos están esperando,
								pero queremos desesperarnos y acelerar el proceso. Esto provoca
								que nos perdamos en el camino, que las bendiciones se alejen y
								no podamos recibir lo que verdaderamente Dios ha guardado para
								nosotros.
							</p>
							<p>
								A menudo pensamos que Dios se ha olvidado de nosotros y por eso
								no recibimos lo que deseamos. Pero no es así; muchas veces
								estamos pidiendo lo que queremos, no lo que nos conviene. Dios
								no nos quiere dar solo lo que queremos, sino lo que
								verdaderamente nos conviene.
							</p>
							<p>
								Es como el niño que llega a casa y dice: "Tengo hambre, mami,
								sírveme la comida". Aunque la comida aún no está lista, la madre
								responde: "Aguanta, espera". El niño insiste, pero ella sabe que
								si le sirve la comida cruda podría enfermar del estómago o
								provocar una mala digestión. Si espera un poco más, podrá
								disfrutar de una comida bien preparada. Mi abuelo decía: "El
								hambre que espera hartura, no es hambre", porque al esperar con
								ansias, se disfruta más, ya que se valora el esfuerzo y el
								tiempo de espera.
							</p>

							<h3 className="text-xl font-bold text-yellow-100 mt-8 mb-4">
								Recuerdos de un tiempo mejor
							</h3>
							<p>
								Recuerda esos tiempos de cuando éramos niños, cuando dormíamos
								tres o cuatro en la misma cama, usábamos el mismo uniforme
								porque uno estudiaba en la mañana y el otro en la tarde,
								compartiendo la misma mochila para llevar los cuadernos.
								Recuerda cómo inventábamos juegos con gomas de carro o carritos
								de cartón.
							</p>
							<p>
								Para ir al baño, salíamos muchas veces a metros de la casa y
								veíamos monstruos formados por árboles que solo eran figuras en
								medio de las plantas. Esperábamos a que se fuera la luz para
								jugar a la escondida o a otros juegos que inventábamos, como el
								loco ayudante o el "topao".
							</p>
							<p>
								Cuando la luz regresaba, lo celebramos con un grito eufórico,
								porque había una señora que nos contaba historias sobre personas
								que habían muerto en el barrio y salían en los callejones, y
								creíamos en todas esas historias. Muchas veces no podíamos ni
								caminar por la noche por miedo a esos cuentos.
							</p>
							<p>
								Recuerda cuán unidos vivíamos, compartiendo una chupeta o una
								soda. Todos chupamos de la misma chupeta o bebíamos de la misma
								botella, alegrándonos con cada sorbo compartido. Nadie se tenía
								asco, nadie se tenía envidia. Nos vestíamos todos los domingos a
								las 3 de la tarde para salir a dar una vuelta por el barrio,
								todos juntos, los niños.
							</p>
							<p>
								Compramos mentas y chicles para recorrer el sector, luego
								volvíamos a casa y jugábamos un poco frente al hogar. Recuerdo
								esos tiempos, eran tiempos hermosos. Solo había una televisión
								para toda la colonia, para todo el sector, para todo el barrio.
								Todos veíamos juntos El Chavo, los muñequitos como Candy, la
								ranita de metal, José Miel, los Thundercats y los Pitufos.
							</p>
							<p>
								Veíamos esas historietas donde siempre había un malo y uno bueno
								que vencía. Aunque la televisión requería que giremos una antena
								que estaba fuera de la casa, todos la disfrutamos.
							</p>

							<h3 className="text-xl font-bold text-yellow-100 mt-8 mb-4">
								Recuperando la esencia de la familia
							</h3>
							<p>
								Todos sentados allí disfrutamos de esa televisión. Hoy en día,
								la tecnología nos ha robado eso; cada uno tiene un celular
								mientras estamos reunidos, y no nos damos cuenta de que no
								conversamos. No solo las amistades, sino también nuestra
								familia. ¿Cuánto tiempo ha pasado desde que preparaste una cena
								para todos sin ser Nochebuena? ¿Cuánto tiempo ha pasado desde
								que comiste a las 12 del mediodía con tu familia? ¿Cuánto tiempo
								ha pasado desde que le preguntaste a tus hijos qué pasó en la
								escuela? Siempre tienen un amiguito imaginario que en realidad
								son ellos mismos.
							</p>
							<p>
								Recuerda que tú también lo eras, por eso necesitamos volver a
								esos valores del amor. Necesitamos volver a esos tiempos en los
								que todos nos reunimos para comer juntos y hablar de nuestras
								vidas, para que nos sintamos como una familia que vive no solo
								en una casa, sino en un hogar feliz. Recuerda: "Si quieres
								llegar temprano, ve despacio para disfrutar todo el paisaje que
								te ofrece la vida".
							</p>
							<p>
								Y así pasamos al mejor punto: la oración. Es el código de oro.
								Después de haber mencionado cada uno de estos códigos de la vida
								o secretos de la vida, quiero ofrecerte este secreto o código de
								oro llamado "la oración".
							</p>
						</div>
					</section>

					{/* Capítulo 8 */}
					<section
						id="capitulo-8"
						className="scroll-mt-24 p-6 md:p-8 bg-yellow-900/30 rounded-2xl shadow-lg border border-yellow-500/30">
						<h2 className="text-2xl md:text-3xl font-extrabold text-yellow-400 mb-6 border-b border-yellow-500/30 pb-4 uppercase tracking-tight">
							CAPÍTULO 8: EL CÓDIGO DE ORO
						</h2>
						<div className="space-y-6 text-lg text-yellow-50">
							<p>
								La oración es un estilo de vida, porque es ahí donde te
								empoderas del poder de Dios. En la relación con Dios hay poder.
								Existen dos tipos de relación: una con Dios y otra con tu
								prójimo. La relación con Dios debe ser prioritaria, y si tienes
								problemas en tu relación con el prójimo o con Dios, Él no oirá
								tu oración.
							</p>

							<h3 className="text-xl font-bold text-white mt-8 mb-4">
								Identidad y autoridad
							</h3>
							<p>
								Una de las artes más importantes en la oración es tener
								identidad. Si no tienes identidad, no tienes autoridad; y si no
								tienes identidad, tu honra no será verdadera. Debes ir primero a
								la fuente de vida, que es Dios, teniendo identidad y sabiendo
								que eres para Él y en Él.
							</p>
							<p>
								Debemos aprender a orar no como bastardos, no como siervos, sino
								como hijos. Debemos saber a quién le estamos orando para que
								nuestra oración no sea vana, ligera o de costumbre. Tenemos que
								recordar que estamos orando al Padre, nuestra fuente de vida.
								Cada vez que oramos al Padre, reconocemos que Él es nuestra
								fuente de vida.
							</p>
							<p>
								Mientras más identidad tenemos, más Dios nos usa. La identidad
								es creer conforme a la experiencia de primera mano, y esa
								experiencia nos hace orar más. En consecuencia, al orar más,
								alcanzamos una mayor madurez espiritual y aprendemos a depender
								de Dios.
							</p>

							<h3 className="text-xl font-bold text-white mt-8 mb-4">
								El poder de la intercesión
							</h3>
							<p>
								Cuando oramos constantemente, llegamos a ser no solo oradores,
								sino también intercesores. Pero para ser intercesor, es
								necesario tener una vida de oración con Dios. En{" "}
								<strong className="text-white">Éxodo 32:32</strong>, cuando
								Moisés intercede por el pueblo que pecó contra Dios haciendo un
								becerro de oro, la oración de intercesión de Moisés fue tan
								poderosa que Dios la tomó en cuenta y cambió de parecer.
							</p>
							<p>
								Cuando alcanzamos el nivel de intercesión, nos volvemos
								verdaderos intercesores y estamos en la dimensión espiritual de{" "}
								<strong className="text-white">Juan 17:11-21</strong>, donde
								Jesús nos habló de ser uno en Él y en el Padre, porque Él es
								nuestro mayor intercesor. Cuando eres un verdadero intercesor,
								no tienes egoísmo; oras por otros y no por tus propios
								beneficios. Sacrificas para los demás, y a Dios le agradan los
								sacrificios para Su gloria.
							</p>

							<h3 className="text-xl font-bold text-white mt-8 mb-4">
								Reconociendo la soberanía de Dios
							</h3>
							<p>
								Para orar efectivamente, es imprescindible conocer nuestra
								posición y la de Dios en la comunión que se establece entre el
								Todopoderoso y el simple ser humano. Al estudiar minuciosamente
								la oración modelo que Jesús nos enseñó, notamos que Cristo la
								inicia con{" "}
								<span className="italic text-yellow-200">
									"Padre nuestro que estás en los cielos"
								</span>
								. Esta debería ser la actitud de quien se acerca a Dios en
								oración: reconocer Su absoluta deidad y superioridad.
							</p>
							<p>
								Nadie que busque a Dios desde sus propios méritos, sin abdicar
								las coronas humanas frente al Redentor, podrá ser escuchado por
								el Rey de reyes y Señor de señores. Dios no es un dios más; es
								el único verdadero, Aquel que todo lo puede y que nunca ha
								perdido una batalla. Esa condición lo hace inmediatamente
								superior al ser humano. De nada sirve ser arrogante al orar y
								creer que somos iguales a Dios.
							</p>

							<h3 className="text-xl font-bold text-white mt-8 mb-4">
								Una disciplina insustituible
							</h3>
							<p>
								Si entendemos esta realidad claramente, tener una vida de
								oración será sencillo y se convertirá en algo imprescindible en
								nuestro diario vivir. Entenderemos que si no vamos a la
								presencia del Eterno, nuestro día será un fracaso lógico. Es
								imposible conocer a Dios sin la oración, ya que fue el medio
								creado con ese propósito. La oración no puede ser sustituida por
								otra disciplina espiritual. No sirve de nada leer mucha Biblia,
								estudiar intensamente en un seminario, predicar con coherencia
								lógica o tener una voz agraciada si todo eso no va acompañado de
								una devota vida de oración.
							</p>
							<p>
								Daniel oraba tres veces al día, y por eso fue capaz de soportar
								el espíritu de idolatría en el imperio babilónico y tuvo un
								espíritu superior, al punto de que Dios le revelaba los secretos
								de los tiempos. Además, debido a su constante comunión con Dios,
								desempeñó un papel destacado en Babilonia durante tres reinados
								distintos, sin necesidad de comprometer sus principios y
								superando obstáculos con fe y seguridad en Jehová.
							</p>
							<p>
								Deberíamos preguntarnos si la oración con devoción es realmente
								parte integral de nuestro día a día, o si solo recurrimos a ella
								cuando queremos que Dios nos use con poder o cuando tenemos
								necesidades.
							</p>
							<p className="font-medium text-center italic text-white/90 text-xl mt-8">
								"Seamos verdaderos hijos de Dios. Comuniquemos a nuestro Padre
								celestial todo lo que queremos hacer, y qué mejor forma de
								hacerlo que con la oración, para que así habitemos bajo Su
								presencia. Amén."
							</p>
						</div>
					</section>
				</article>
			</main>

			{/* Back to top button */}
			<button
				onClick={scrollToTop}
				className={`fixed bottom-8 right-8 p-3 bg-yellow-500 text-black rounded-full shadow-[0_0_20px_rgba(234,179,8,0.4)] transition-all duration-300 hover:bg-yellow-400 hover:scale-110 focus:outline-none z-40 ${
					showScrollTop
						? "opacity-100 translate-y-0"
						: "opacity-0 translate-y-10 pointer-events-none"
				}`}
				aria-label="Back to top">
				<ChevronUp size={24} strokeWidth={3} />
			</button>

			<footer className="bg-neutral-950 text-slate-500 py-12 text-center border-t border-yellow-500/10">
				<p>© 2024 Mentalidad de Mangosta. Todos los derechos reservados.</p>
				<p className="text-sm mt-2">
					Diseñado para la edificación del cuerpo de Cristo.
				</p>
			</footer>
		</div>
	);
}
