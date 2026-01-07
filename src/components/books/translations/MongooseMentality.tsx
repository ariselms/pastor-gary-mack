import React, { useState, useEffect } from "react";
import { Menu, X, BookOpen, ChevronUp, ChevronRight } from "lucide-react";

export default function MongooseMentalityBook() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [activeSection, setActiveSection] = useState("");
	const [showScrollTop, setShowScrollTop] = useState(false);

	// Chapters data for navigation
	const chapters = [
		{ id: "acknowledgments", title: "Acknowledgments" },
		{ id: "introduction", title: "Introduction" },
		{ id: "chapter-1", title: "Chapter 1: The Beginning" },
		{ id: "chapter-2", title: "Chapter 2: Father God's Heart Also Loves the Lost" },
		{ id: "chapter-3", title: "Chapter 3: Forged in Fire" },
		{ id: "chapter-4", title: "Chapter 4: The Secret to Victory" },
		{ id: "chapter-5", title: "Chapter 5: No Conquest Without Faith" },
		{ id: "chapter-6", title: "Chapter 6: Winner Principles" },
		{ id: "chapter-7", title: "Chapter 7: Judases and Peters" },
		{ id: "chapter-8", title: "Chapter 8: The Golden Code" }
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
			<header className="sticky top-0 z-50 bg-black/95 backdrop-blur-md shadow-sm border-b border-yellow-300/20 transition-all duration-300">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between items-center h-16">
						{/* Title / Logo Area */}
						<div
							className="flex items-center space-x-3 cursor-pointer group"
							onClick={scrollToTop}>
							<div className="bg-yellow-300 p-1.5 rounded-lg text-black transition-transform group-hover:scale-105 shadow-[0_0_10px_rgba(234,179,8,0.3)]">
								<BookOpen size={20} strokeWidth={2.5} />
							</div>
							<span className="font-bold text-lg tracking-tight text-yellow-300 hidden sm:block drop-shadow-sm">
								Mongoose Mentality
							</span>
							<span className="font-bold text-lg tracking-tight text-yellow-300 sm:hidden">
								MdM
							</span>
						</div>

						{/* Desktop Navigation */}
						<nav className="hidden md:flex space-x-1">
							<div className="relative group">
								<button className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-slate-300 hover:text-yellow-300 transition-colors">
									<span>Table of Contents</span>
									<ChevronRight
										size={16}
										className="rotate-90 group-hover:text-yellow-300"
									/>
								</button>
								{/* Dropdown for Desktop */}
								<div className="absolute right-0 w-64 mt-2 bg-neutral-900 rounded-xl shadow-2xl border border-yellow-300/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right overflow-hidden">
									<div className="py-2">
										{chapters.map((chapter) => (
											<button
												key={chapter.id}
												onClick={() => scrollToSection(chapter.id)}
												className={`block w-full text-left px-4 py-2.5 text-sm transition-colors border-l-2 ${
													activeSection === chapter.id
														? "bg-yellow-300/10 text-yellow-300 border-yellow-300 font-medium"
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
							className="md:hidden p-2 rounded-md text-slate-300 hover:text-yellow-300 hover:bg-neutral-900 transition-colors focus:outline-none"
							aria-label="Menu">
							{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
						</button>
					</div>
				</div>

				{/* Mobile Navigation Drawer */}
				{isMenuOpen && (
					<div className="md:hidden border-t border-yellow-300/20 bg-neutral-950 absolute w-full shadow-lg max-h-[80vh] overflow-y-auto">
						<div className="py-2 px-2 space-y-1">
							{chapters.map((chapter) => (
								<button
									key={chapter.id}
									onClick={() => scrollToSection(chapter.id)}
									className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
										activeSection === chapter.id
											? "bg-yellow-300/10 text-yellow-300 border-l-4 border-yellow-300"
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
					{/* Acknowledgments */}
					<section
						id="acknowledgments"
						className="scroll-mt-24 animate-fade-in">
						<h2 className="text-3xl md:text-4xl font-extrabold text-yellow-300 mb-8 pb-2 border-b border-yellow-300/30 inline-block tracking-tight">
							ACKNOWLEDGMENTS
						</h2>
						<div className="space-y-6 text-lg text-slate-200">
							<p>
								I thank Father God for allowing me to write this book. I thank
								my family, especially my wife and children, for enduring and
								understanding all the times I have had to sacrifice some of the
								time I dedicate to them to carry out these projects for my
								Father.
							</p>
							<p>
								I am grateful to the entire congregation, the ministry, the
								pastors and leaders who have helped me. To my brothers and
								sisters, who have always been there for me, and to everyone who
								lent me a hand during each of my journeys.
							</p>
							<p>
								I am grateful to each and every person who stood up against me;
								they were a motivation for me not to stop and to be able to show
								them that Father God fulfills his purpose in my life.
							</p>
							<p>
								I urge you never to stop, no matter how many rise up, because
								there is One who sent you, who will never stop.
							</p>
						</div>
					</section>

					{/* Introduction */}
					<section id="introduction" className="scroll-mt-24">
						<h2 className="text-3xl md:text-4xl font-extrabold text-yellow-300 mb-8 pb-2 border-b border-yellow-300/30 inline-block tracking-tight">
							INTRODUCTION
						</h2>
						<div className="space-y-6 text-lg text-slate-200">
							<p>
								Sometimes life can be hard, and for many, past wounds prevent
								them from moving forward. However, there is a way out. We can't
								always control what happens to us, but we can control how we
								choose to face it. That, in essence, is what I call the{" "}
								<span className="text-yellow-300 font-medium italic">
									"mongoose mentality"
								</span>
								.
							</p>

							<h3 className="text-2xl font-bold text-yellow-100 mt-8 mb-4">
								The nature of the mongoose
							</h3>
							<p>
								In the animal kingdom, the mongoose is renowned for its courage,
								agility, and unwavering determination in the face of challenges.
								Although a relatively small creature, it is undeterred by the
								dangers that surround it or the predators it encounters. The
								mongoose's ability to overcome these risks stems not only from
								its physical prowess but also from its tenacious spirit. Instead
								of surrendering to imminent danger, it uses its courage and
								determination to overcome challenges and fight for its survival.
							</p>
							<p>
								Historically, the mongoose was an animal constantly attacked by
								snakes. It is said that when the snake saw the mongoose, it
								would devour it; but one day, seeing that the snake was about to
								devour its young, the mongoose stood up and fought. Although the
								snake managed to bite it, the mongoose was able to kill it.
								Researchers discovered that the snake failed to kill the
								mongoose because it possesses a mutant metabolism. This causes
								the venom that enters its body to be converted into an antibody
								that protects it. Often, there are things that want to kill us,
								but instead of destroying us, they make us stronger.
							</p>

							<h3 className="text-2xl font-bold text-yellow-100 mt-8 mb-4">
								A past transformed by Father God
							</h3>
							<p>
								Throughout my life, I faced situations that made me question my
								worth, my strength, and even my purpose. From a young age, the
								abuse I suffered seemed to define who I was and who I would
								become. However, I discovered that we are not condemned to be
								prisoners of our past. Although scars may try to define us,
								Father God has the power to transform any situation. He can
								restore our lives, change our story, and give us a new identity.
							</p>
							<p>
								The key to this transformation lies in a life of prayer and
								intimacy with Father God. It is through prayer that we break the
								chains that bind us to the past and move forward with firm steps
								toward our purpose. Without a deep connection with Father God,
								it is difficult to maintain a renewed mindset; but when we
								surrender our burdens to Him, He strengthens us to face and
								overcome them.
							</p>
							<p>
								Throughout this book, I will share how, despite what I've been
								through, I managed to change my mindset: I went from being a
								victim of circumstance to someone who walks with sure steps
								toward the destiny Father God has designed for me. I want you to
								know that this transformation process isn't easy, but it is
								possible.
							</p>

							<h3 className="text-2xl font-bold text-yellow-100 mt-8 mb-4">
								The power of a decision
							</h3>
							<p>
								The first step toward any real change begins with a decision.
								When I decided to stop living in the shadow of my past, I began
								to see my life differently. Just as the mongoose confronts its
								predator, we too can face our greatest fears, insecurities, and
								traumas with the strength Father God gives us.
							</p>
							<p>
								There were times when I thought I couldn't get better, that I
								was stuck in the valley of despair. But when I started to pray,
								to renew my mind, and to put my trust in Father God, everything
								began to change. The Bible says:{" "}
								<span className="italic text-yellow-200/90">
									"Do not conform to the pattern of this world, but be
									transformed by the renewing of your mind."
								</span>{" "}
								(
								<strong className="text-yellow-300 font-bold">
									Romans 12:2
								</strong>
								). Although I had no control over what happened to me as a
								child, I did have control over how I would live from that moment
								on and how I would use those experiences as motivation to grow
								with Father God's help.
							</p>
							<p>
								I want you to know that no matter what you've faced in your
								life, Father God can change your story. If I was able to change
								my mindset, heal, and improve, you can too. The transformation
								we seek begins in our minds and in our relationship with Father
								God. Every external change is a reflection of an internal
								transformation, and that transformation comes when we fully
								trust in Him.
							</p>
						</div>
					</section>

					{/* Chapter 1 */}
					<section
						id="chapter-1"
						className="scroll-mt-24 p-6 md:p-8 bg-neutral-900/50 rounded-2xl border border-yellow-300/10">
						<h2 className="text-2xl md:text-3xl font-extrabold text-yellow-300 mb-6 uppercase tracking-tight">
							CHAPTER 1: MONGOOSE MENTALITY: THE BEGINNING OF EVERYTHING
						</h2>
						<div className="space-y-6 text-lg text-slate-200">
							<p>
								Throughout our lives, we don't always have the freedom to choose
								the path we wish to take. Circumstances, often beyond our
								control, push us toward destinations we would never have chosen
								for ourselves. We are even forced to accept a reality we never
								imagined or wanted.
							</p>
							<p>
								But to help you better understand what I mean, let me share a
								part of my personal story. My testimony reflects how, despite
								the adversities and circumstances I faced, Father God's purpose
								was always present, guiding me through every challenge to
								transform me and lead me toward the life He designed for me.
							</p>

							<h3 className="text-xl font-bold text-yellow-100 mt-8 mb-4">
								An origin marked by rejection
							</h3>
							<p>
								My father and mother had an affair. He was married and lied to
								her, saying he was single. When she became pregnant, she took
								the opportunity to ask him to marry her, but he refused. He
								already had another family: a wife, two daughters, and another
								baby on the way. Hurt by this betrayal, when I was just five
								months old, my mother decided to leave the country, leaving me
								in the care of people she didn't know.
							</p>
							<p>
								I grew up with that family, who cared for me with great love
								until I was six. At that time, my mother came looking for me
								again, not because she had changed her mind and wanted to take
								care of me, but hoping that my father would return to her.
								However, the family that had raised me didn't want to let me go,
								since I didn't recognize the woman who had abandoned me. To me,
								she wasn't my mother; I couldn't see her as such.
							</p>
							<p>
								I had seen on television that some mothers sold their children
								to have their organs harvested, and I feared that my mother had
								done the same to me. That's why I was so afraid to go with her.
								When the family who had raised me refused to give me up, she
								threatened to take them to court and send them to jail. Despite
								their pain and how much they loved me, they had to let me go.
							</p>

							<h3 className="text-xl font-bold text-yellow-100 mt-8 mb-4">
								The pain of abuse
							</h3>
							<p>
								My mother began to abuse me in cruel ways. She would hit me on
								the head with pipes, tear the cartilage in my ears by pulling
								them hard, and submerge my head in tanks of water until I almost
								drowned. She also forced me to kneel on a wooden platform, while
								making me hold pieces of cinder block in each hand and a water
								container balanced on my head. If I ever became weak and made a
								movement that caused the container to fall, she would beat my
								back with a copper wire.
							</p>
							<p>
								After a year of abuse, when I was 7 years old, my mother decided
								to kick me out of the house without allowing me to return to the
								family that had raised me. They took me to my father, who said
								he couldn't take care of me because he already had a family,
								with a wife and three daughters (one of them my age), as if I
								were responsible for his mistakes.
							</p>
							<p>
								When my paternal grandmother learned of the situation, she
								decided to take me into her home. She began to raise me and
								teach me life principles, such as studying, being kind to
								others, and seeking Father God. However, despite this, I didn't
								have a normal childhood. While other children played, I had to
								go out and sell empanadas in the streets, or walk around hawking
								mangoes, avocados, and lemongrass, depending on the harvest
								season. I also sold charcoal and collected food in the
								neighborhood for the pigs my grandmother raised.
							</p>

							<h3 className="text-xl font-bold text-yellow-100 mt-8 mb-4">
								Orphan and helpless
							</h3>
							<p>
								Four years later, when I turned nine, everything got worse. My
								grandmother lost her battle with cancer. After she died, I was
								left in the care of my uncles, who were alcoholics. My nights
								became a nightmare. My uncles would come home drunk and wake me
								up by hitting me with their fists and kicking me. One of them
								even sexually abused me. The worst part was that no one believed
								me. My family always thought I was making it up.
							</p>
							<p>
								As parents, we must be very careful when our children talk to us
								about sensitive topics, especially if it involves abuse. It's
								important to investigate and observe what they tell us, because
								if we don't believe them or don't show interest when they tell
								us something, they will lose trust in us and may stop
								communicating their problems to us.
							</p>

							<h3 className="text-xl font-bold text-yellow-100 mt-8 mb-4">
								In the spiritual world, everything has a purpose
							</h3>
							<p>
								Reading this part of my story and all that I had to suffer, it's
								normal to wonder:{" "}
								<span className="italic text-yellow-300">
									Where was Father God?
								</span>{" "}
								In moments of pain and suffering, we question how a good being
								can allow such evil things to happen. Yet, in the midst of
								anguish and pain, Father God is present. We may not perceive Him
								immediately, but He is there, and I was able to confirm it.
							</p>

							<div className="border-l-4 border-yellow-300 pl-6 py-4 my-8 bg-yellow-300/10 italic text-slate-300 rounded-r-lg">
								One day, when I was about 11 years old, while I was sleeping, I
								dreamt that I was standing in front of a statue of Jesus Christ
								and that I was asking him for help. When I looked up, I realized
								that it wasn't a statue, but that He was there, smiling, and He
								said to me:{" "}
								<span className="font-semibold text-yellow-300">
									"I am not a statue, do not fear, I am with you."
								</span>
							</div>

							<p>
								At that moment, I heard a loud voice calling me:{" "}
								<span className="uppercase font-bold text-yellow-300">
									"GARY, WAKE UP!"
								</span>
								. When I opened my eyes, I saw a knife coming toward me. One of
								my uncles was trying to kill me. I jumped out of bed, running
								and screaming for help, and the neighbors came to my defense.
								They were the ones who took care of me after my grandmother
								died, and I am grateful to Father God for putting these people
								in my path during that difficult time. In the midst of it all,
								Father God used them to show His faithfulness. They fed me,
								clothed me, and their support was so important during those
								times of crisis.
							</p>

							<h3 className="text-xl font-bold text-yellow-100 mt-8 mb-4">
								The street school
							</h3>
							<p>
								But my story doesn't end there. From then on, I was forced to
								live on the streets, surrounded by drug dealers, muggers,
								prostitutes, and people with criminal backgrounds. Surprisingly,
								they were the ones who provided me with food and a place to
								sleep. However, they couldn't offer me the stability or
								happiness they themselves lacked. I remember crying every day,
								feeling like I had no father or mother, and that no one wished
								me a happy birthday, a happy New Year, or any other time when
								others received the affection of their loved ones.
							</p>
							<p>
								Anyone who carefully analyzes this part of my story might think
								that this dark period, which I consider more of a stop on the
								train of my life, wasn't part of Father God's plan. And, in
								reality, it's logical to think that way. However, it's important
								to understand the miraculous nature of Father God's word. Every
								experience we go through, even if not directly caused by Him,
								can be used by Father God to show His glory through us. Often,
								in these difficult times, Father God manifests Himself in
								unexpected and powerful ways.
							</p>

							<h3 className="text-xl font-bold text-yellow-100 mt-8 mb-4">
								Restoration and promise
							</h3>
							<p>
								I am certain that everything I went through with my mother had a
								purpose in Father God's plan. Today, my mother serves Christ,
								and our relationship has been transformed: she loves me, and I
								love her. My youngest brother is also a Christian, and now only
								my other brother remains. However, I trust that Father God is
								working in his life. I remember that one day He told me that my
								whole family would serve Him, and I believed Him. I have seen
								how that promise is being fulfilled and how Father God has been
								glorified in our lives.
							</p>
							<p>
								Therefore, I have no doubt that everything I suffered, even
								though I didn't understand it at the time, was somehow used by
								Father God in His divine plan for my benefit. What the enemy
								thought would destroy me, Father God reversed and used to bring
								blessing to my life.
							</p>
							<p>
								But the process wasn't easy. It required humility in His
								presence and prayer. I want to teach you that if you don't have
								a prayer life, make the necessary adjustments to begin praying
								immediately. Prayer is the most effective way, and I would say
								the only way, to maintain constant communication with Father
								God. You cannot receive the revelation of Father God's purpose
								for your life without prayer.
							</p>
							<p>
								Always seek to listen to Father God and speak to Him; make Him
								your friend. This will ensure your victory in the Christian
								life. Leave the past behind and focus on the glorious future
								Father God has in store for you.
							</p>
						</div>
					</section>

					{/* Chapter 2 */}
					<section
						id="chapter-2"
						className="scroll-mt-24 p-6 md:p-8 bg-neutral-900/50 rounded-2xl border border-yellow-300/10">
						<h2 className="text-2xl md:text-3xl font-extrabold text-yellow-300 mb-6 uppercase tracking-tight">
							CHAPTER 2: GOD'S HEART ALSO BEATS FOR THE LOST
						</h2>
						<div className="space-y-6 text-lg text-slate-200">
							<p>
								Sometimes we think that Father God only blesses and helps those
								who follow Him and strive to do His will. As Christians, we run
								the risk of becoming insensitive to the suffering of others,
								especially when we feel that, being saved, we are fine. However,
								we must remember that the world is full of people who suffer,
								and although it may seem hard to believe, these people also
								matter deeply to God.
							</p>
							<p>
								His mercy knows no bounds, as Scripture expresses:{" "}
								<span className="italic text-yellow-200/90">
									"He makes his sun rise on the righteous and the unrighteous."
								</span>{" "}
								(
								<strong className="text-yellow-300 font-bold">
									Matthew 5:45
								</strong>
								). This means that his love and compassion are not limited to
								those who faithfully follow him; he is attentive to everyone,
								even those who do not yet know him or who have strayed. God, in
								his infinite goodness, abandons no one. On the contrary,{" "}
								<span className="italic text-yellow-200/90">
									"Leave the 99 sheep to go after the one that is lost."
								</span>{" "}
								(
								<strong className="text-yellow-300 font-bold">
									Luke 15:4—7
								</strong>
								).
							</p>
							<p>
								That is the same love He showed me. I was that lost sheep, and
								even though I didn't deserve it, He came to find me, reached me
								with His grace, and brought me back to the fold.
							</p>

							<h3 className="text-xl font-bold text-yellow-100 mt-8 mb-4">
								No escape
							</h3>
							<p>
								I remember that when they called me because agents from the
								National Drug Control Directorate (DNCD) were going to raid the
								neighborhood where I was involved in drug micro-trafficking, I
								would pack everything up and go to a church to attend a service,
								praying to Father God that the DNCD wouldn't find me. But one
								day, members of that agency carried out a raid at 4:00 in the
								afternoon, and at that hour there were no churches open, so I
								had to go to the house of an associate in the criminal
								enterprise.
							</p>
							<p>
								I waited there, and at 7:00 p.m. they called me to say that the
								DNCD was no longer in the area, and that I should go to the
								location because there were many buyers waiting. I asked my
								contact, and he said there were no informants or suspicious
								vehicles in the area. I went down with 45 packets of cocaine, 5
								of marijuana, and 7 rocks of crack to sell. I also had cocaine
								for myself and my people, intending to use it all night.
							</p>
							<p>
								As I crossed the avenue, before reaching the point, four large
								DNCD vehicles pulled up, carrying about 40 hooded police
								officers armed with M-16 rifles. They had prisoners in the vans.
								Seeing this, I stopped in front of the second vehicle. I knew I
								had no escape. At that moment, I heard a loud voice say to me:
							</p>
							<p className="pl-4 border-l-2 border-yellow-300/50 text-yellow-200 italic">
								—Run!
							</p>
							<p>
								I wondered where I should run. Then I remembered that when I was
								in trouble, I cried out to God. Time seemed to stand still. I
								looked up at the sky, spoke to Father God aloud, and said:
							</p>

							<div className="bg-neutral-800/50 p-4 rounded-lg italic text-slate-300">
								—Lord, the Christians tell me that I will serve you by preaching
								your word, that you have shown in visions that I would preach in
								stadiums, and that you will be glorified through me with healing
								and deliverance. If that is true, I ask you to help me get out
								of this predicament. I would seek you, but out here, not in
								jail. If they catch me with all these drugs, when they find out
								who I am and review my records, they will sentence me to 20 to
								30 years. Please, help me.
							</div>

							<h3 className="text-xl font-bold text-yellow-100 mt-8 mb-4">
								A sign from heaven
							</h3>
							<p>At that moment, the sky flashed with a red light.</p>
							<p>
								—
								<span className="italic text-yellow-200">
									Lord, I'm not asking for signs, I'm asking for help
								</span>{" "}
								—I said desperately—.{" "}
								<span className="italic text-yellow-200">
									Please get me out of here.
								</span>
							</p>
							<p>
								I knew that lightning flash had been a sign from Father God to
								let me know He was listening to me, because it wasn't even
								cloudy. So I kept talking to Him and said:
							</p>
							<p className="pl-4 border-l-2 border-yellow-300/50 text-yellow-200 italic">
								—God, if you get me out of this, I will serve you with my life;
								I will serve you full time.
							</p>
							<p>
								At that moment, the sky flashed with lightning for the second
								time. Then, out of nowhere, a child of about two or three years
								old approached, tugged at my pants, and said:
							</p>
							<p className="pl-4 font-bold text-yellow-300">
								—Let's go with God.
							</p>
							<p>I looked at the child and said:</p>
							<p>
								—My son, get out of here because there are a lot of drugs and
								firearms; a shootout could happen at any moment.
							</p>
							<p>
								I gently pushed him away from me, but the boy clung to my pants
								and repeated:
							</p>
							<p className="pl-4 font-bold text-yellow-300">
								—Let's go with God.
							</p>
							<p>I looked up at the sky again and said:</p>
							<p className="pl-4 border-l-2 border-yellow-300/50 text-yellow-200 italic">
								—Lord, I haven't asked you for signs, but now I am going to ask
								you for one: give me a sign and I will leave.
							</p>
							<p>
								Lightning flashed in the sky for the third time. Then I picked
								up the child and started walking. I heard footsteps behind me,
								tried to turn my face, and the child held my face and said:
							</p>
							<p className="pl-4 font-bold text-yellow-300">
								—Don't turn around, they're watching you, let's go with God.
							</p>
							<p>
								At that moment I raised my hands to heaven and began to worship
								God as I walked, until I reached my house. I put the child down
								in front of my house and said to him: "I'm going to give you a
								potato chip and a soda when I see you again." He just smiled and
								left.
							</p>

							<h3 className="text-xl font-bold text-yellow-100 mt-8 mb-4">
								A pact of loyalty
							</h3>
							<p>
								I went to church with my wife to accept Christ. We went to the
								front and confessed Christ. I remember kneeling at the altar to
								pray and saying:
							</p>
							<p className="pl-4 border-l-2 border-yellow-300/50 text-yellow-200 italic">
								—Lord, I have accepted you, but I have never seen a Christian
								stealing or selling drugs. How am I going to support myself with
								a wife?
							</p>
							<p>I heard a voice that told me:</p>
							<p className="text-center font-bold text-2xl text-yellow-300 italic font-serif my-4">
								"Be faithful to me, take care of my things, and I will take care
								of yours."
							</p>
							<p>
								In 18 years of drug use, I had never heard voices, but that day
								I heard that voice and I knew it was the voice of Father God.
								Loud, clear, and unmistakable.
							</p>

							<h3 className="text-xl font-bold text-yellow-100 mt-8 mb-4">
								Does Father God listen to the sinner?
							</h3>
							<p>
								I know this part of my story may be controversial for many,
								because there's a notion that Father God doesn't hear the
								sinner's prayer. However, it's worth asking to what extent this
								is true, since we all begin in a sinful state, and the Lord, in
								His infinite mercy, has heard our cries.
							</p>
							<p>
								Although I do not want to make a doctrine of it, since the
								spiritual guidelines are already defined, I insist that a
								sincere prayer from a sinner to a just and kind God, asking for
								help and showing a willingness to serve Him with all one's
								heart, will not leave our divine Redeemer indifferent.
							</p>
							<p>
								We see this clearly in{" "}
								<strong className="text-yellow-300 font-bold">
									Luke 18:13-14
								</strong>
								. In this passage, a tax collector acknowledges his sins and
								disobedience before Father God, as well as his lack of merit to
								find forgiveness. In verse 14, Jesus Christ himself says that
								this man went home justified, while in the preceding verses, the
								Pharisee boasts of fasting twice a week and fulfilling the
								entire law, forgetting that before the Almighty no one can be
								justified except by His grace. It is from this recognition of
								our sins that we must establish a course of life in accordance
								with this precious gospel.
							</p>
							<p>
								I understand that if Father God hadn't heard me and rescued me
								when the DNCD almost arrested me, I don't know where I'd be
								today. But something happened: I placed all my faith and trust
								in the Lord's mercy, and I was blessed when my cry was heard and
								answered. That's why today I serve Him with immense joy, facing
								every obstacle with faith and courage. If Father God did it
								once, I have complete certainty that He will do it again, and
								His glory will be even greater.
							</p>
							<p>
								Make this truth a firm conviction in your life: remain constant
								in prayer, with faith, believing that nothing is impossible for
								our Lord and Savior Jesus Christ. Healing, improvement, and
								transformation of your life are also possible for you. The
								transformation we long for begins in our minds and in our
								relationship with God. Every external change is a reflection of
								an internal transformation, and that transformation comes when
								we fully trust in Him.
							</p>
						</div>
					</section>

					{/* Chapter 3 */}
					<section
						id="chapter-3"
						className="scroll-mt-24 p-6 md:p-8 bg-neutral-900/50 rounded-2xl border border-yellow-300/10">
						<h2 className="text-2xl md:text-3xl font-extrabold text-yellow-300 mb-6 uppercase tracking-tight">
							CHAPTER 3: FORGED IN FIRE
						</h2>
						<div className="space-y-6 text-lg text-slate-200">
							<p>
								It's very common that, when you decide to follow Christ, you'll
								face a series of spiritual attacks. This happens because the
								enemy, seeing that you've been freed by the power of Jesus and
								no longer has control over your life, seeks every possible way
								to regain his influence. He begins to attack you in different
								areas: you may experience lack, doubt, illness, and other
								difficulties that seem to arise out of nowhere. His purpose is
								to make you believe you were better off before you knew Christ,
								using lies and deception to sow doubt and weaken your faith.
							</p>
							<p>
								I went through a similar phase too. After surrendering my life
								to Christ, while I was praying one day, Father God spoke to me
								clearly and asked me to get rid of everything I owned: clothes,
								furniture, and other household belongings. All of it came from
								illicit activities, and obeying His voice, I threw it all away.
								I was left with literally nothing.
							</p>

							<h3 className="text-xl font-bold text-yellow-100 mt-8 mb-4">
								The price of obedience
							</h3>
							<p>
								My wife and I started sleeping at the church because we had
								nowhere else to go. Every day we went out to preach on street
								corners, in drug dens, in hospitals, orphanages, and prisons.
								Sometimes we got something to eat; sometimes we didn't. After
								preaching, we attended church services and then stayed there to
								sleep.
							</p>
							<p>
								One day, the pastor of the church approached me and told me we
								had to find another place to sleep, that we couldn't continue
								staying at the church with the other members. People in the
								neighborhood were already talking about what Father God had done
								in our lives, in my wife's and mine. He knew that as long as we
								were there, there wouldn't be any robberies in the church or the
								surrounding area.
							</p>
							<p>
								When the pastor asked us to leave, I explained our situation. We
								had nowhere to go. His response was direct:
							</p>
							<p className="pl-4 border-l-2 border-yellow-300/50 text-yellow-200 italic">
								—If you have nowhere to sleep, find another church where they
								can help you, where they'll let you stay. Go and gather at that
								place.
							</p>
							<p>
								At that moment, we felt devastated. We cried with helplessness
								and suffered greatly. We had no choice; we couldn't sleep on the
								street. The people in the neighborhood knew me well; they knew
								everything I had been through before coming to Christ, what my
								life had been like in the world. Now that I was on Father God's
								path, they couldn't bear to see me in that situation, sleeping
								on the street. They would question me about love and compassion
								in the church, and that would not only be humiliating but could
								also damage my witness to the kingdom of God.
							</p>
							<p>
								Desperate, I made a decision. My wife and I started sleeping in
								the church's backyard, a place where no one could see us. We
								waited until everyone had gone to sleep and then spread a sheet
								on the ground. The garbage dump was right in front of us, and at
								night it would fill with cockroaches and centipedes. We slept
								poorly, always with one eye open, watching our surroundings in
								case something happened. And if it rained, things got worse. We
								had to take refuge in an outhouse in the yard and wait there
								until the rain stopped.
							</p>
							<p>
								While we were in the latrine, I sat on the toilet and my wife
								snuggled into my lap to protect us from the cold and damp. It
								was a truly uncomfortable situation: cockroaches were falling
								from the ceiling on us as we tried to stay as safe as possible.
							</p>
							<p>
								Despite the hardships, we maintained a prayer routine from 5 to
								7 in the morning. During those hours, our struggle was not only
								against physical difficulties, but also a spiritual battle. We
								fervently proclaimed the kingdom of Father God.
							</p>

							<h3 className="text-xl font-bold text-yellow-100 mt-8 mb-4">
								Father God is not absent in our difficulty
							</h3>
							<p>
								You probably know the story of Shadrach, Meshach, and Abednego,
								three young men whose faith in Father God led them to face a
								very difficult test. When they refused to worship the golden
								statue that King Nebuchadnezzar had erected, they were thrown
								into a blazing furnace. But something amazing happened: the king
								not only saw the three young men in the furnace, but he also
								noticed a fourth figure with them,{" "}
								<span className="italic text-yellow-200">
									"as a son of the gods"
								</span>{" "}
								(
								<strong className="text-yellow-300 font-bold">
									Daniel 3:25
								</strong>
								). That figure was Jesus himself, accompanying them in the midst
								of their trial.
							</p>
							<p>
								This detail is crucial. Sometimes, Father God will not deliver
								us from difficulties, but will enter into them with us. In{" "}
								<strong className="text-yellow-300 font-bold">
									Isaiah 43:2
								</strong>
								, Father God promises us:{" "}
								<span className="italic text-yellow-200">
									"When you pass through the waters, I will be with you; and
									when you pass through the rivers, they will not sweep over
									you; when you walk through the fire, you will not be burned;
									the flames will not set you ablaze."
								</span>{" "}
								Instead of eliminating suffering, Father God joins us in the
								midst of it, offering us His presence and strength.
							</p>
							<p>
								He assures us that we are not alone in our struggles. Even
								though we face challenges and trials, Father God's presence
								transforms our difficulties into blessings and spiritual growth.
								My wife and I are living witnesses to this. Just as gold is
								purified in fire, we are strengthened through trials. The key is
								not to run from the process, but to embrace it, knowing that
								every step we take, every difficult moment we go through, is
								shaping us into the character of a true victor.
							</p>
							<p>
								Today, our lives have changed radically. Every week we visit
								public prisons across the country, go to hospitals and
								orphanages, preach Christ in the streets, and pastor the church
								"The Rescued Rescuing." This ministry has sparked a great
								revival in the Los Ríos region of the capital city.
							</p>
							<p>
								We have witnessed over a thousand prisoners accept Christ. In
								our evangelistic campaigns, we have seen criminals surrender
								knives, daggers, and firearms as they give themselves to Christ.
								They have seen the change in my life and trust that Father God
								can do the same in theirs.
							</p>

							<h3 className="text-xl font-bold text-yellow-100 mt-8 mb-4">
								Transforming pain into purpose
							</h3>
							<p>
								The difficulties they face are not a reason to cry, but to grow.
								The process is not a place for lamenting, but for training.
							</p>
							<p>
								My wife and I faced moments of deep sorrow and discouragement,
								but instead of remaining stuck in sadness, we chose to take our
								suffering to the cross of Christ. We transformed our pain into
								an opportunity to glorify Father God and speak of His greatness.
								We learned to recognize His purpose in our lives as a couple
								chosen for His glory.
							</p>
							<p>
								Remaining silent and inactive only fuels spiritual laziness,
								which is truly detrimental to emotional and spiritual health. We
								often justify our passivity with excuses based on our
								circumstances, but we cannot allow those excuses to hold us
								back. Moses was a stutterer, but that didn't prevent him from
								leading the people of Israel. Gideon felt insignificant and
								fearful, but Father God used him to deliver Israel from the
								Midianites. Jeremiah was young and felt he lacked the necessary
								experience, but Father God called him to be a powerful prophet.
							</p>
							<p>
								Spiritual mediocrity arises when we choose comfort over courage,
								and this can lead to stagnation in our growth and well-being in
								faith.
							</p>
							<p>
								When we face difficult situations, like the ones I experienced,
								it's natural to feel the urge to give up and abandon everything,
								filling ourselves with resentment toward those who should be
								helping us. It's easy to waver in our faith and succumb to
								despair. But that attitude belongs to those who are called, but
								not chosen. Those who have truly been selected by Father God and
								have the courage to be brave, put on the armor of Christ and go
								out onto the battlefield with faith in Father God as their
								guide.
							</p>
							<p>
								I won't deny that discouraging thoughts arose. This is a very
								common trick of the enemy in modern times. In moments of
								weakness, I compared my current life, filled with financial
								difficulties, with my previous life, when money came in
								questionable ways. But since Christ rescued me, He has sealed me
								for His glory. That transformation taught me that, even though
								the path may be difficult, Father God's purpose in our lives is
								much greater than any challenge we may face.
							</p>
							<p>
								Some people understand the value of prudence and the power of
								silence. While Christians should avoid speaking rashly, there
								are also times when it is vital to pray and, at the same time,
								speak boldly about who Jesus is and what he has done in our
								lives. If I had remained silent during my difficulties and not
								shared my faith, I cannot imagine where I would be today; I
								probably wouldn't have the ministry Father God has entrusted to
								me.
							</p>
							<p>
								Thanks to His eternal mercy, my wife and I have been able to
								remain steadfast, even in adversity, proclaiming Christ and
								strengthening our prayer. Only in this way did we find the
								direction we needed.
							</p>

							<div className="bg-yellow-900/20 p-6 rounded-lg my-8 border border-yellow-300/30">
								<p className="italic font-medium text-yellow-100 mb-4 text-center">
									"I waited patiently for the Lord; he turned to me and heard my
									cry. He lifted me out of the slimy pit, out of the mud and
									mire; he set my feet on a rock and gave me a firm place to
									stand. He put a new song in my mouth, a hymn of praise to our
									God. Many will see and fear the Lord and put their trust in
									him."
								</p>
								<p className="text-right font-bold text-yellow-300">
									—Psalm 40:1-3
								</p>
							</div>

							<p>
								I cannot remain silent or live in anonymity, dedicating myself
								only to praying in private without telling others about the God
								who saved me. I will shout it everywhere! Christ saves! Christ
								lives!
							</p>
						</div>
					</section>

					{/* Chapter 4 */}
					<section
						id="chapter-4"
						className="scroll-mt-24 p-6 md:p-8 bg-neutral-900/50 rounded-2xl border border-yellow-300/10">
						<h2 className="text-2xl md:text-3xl font-extrabold text-yellow-300 mb-6 uppercase tracking-tight">
							CHAPTER 4: THE SECRET TO VICTORY
						</h2>
						<div className="space-y-6 text-lg text-slate-200">
							<p>
								Everyone longs for victory, success, growth, and the blessings
								that come with it. However, few are willing to pay the price
								these achievements demand. Many want to grow, but when faced
								with the process, they retreat out of fear. Others yearn for
								blessings but run from trials. The truth is, victory is not the
								fruit of comfort, but of sacrifice, perseverance, and above all,
								absolute dependence on God.
							</p>
							<p>
								Those who truly achieve victory are not those who sit and cry in
								the midst of the process, beginning to doubt Father God's
								goodness, but those who understand that every trial is
								preparation, and every process is an opportunity to grow in
								faith, character, and spiritual maturity. A very famous saying
								goes that{" "}
								<span className="italic text-yellow-200">
									"God gives his toughest battles to his toughest soldiers"
								</span>
								, but almost no one mentions that the soldier who wins the
								battle is exalted and decorated... not for having avoided the
								battlefield, but for having resisted to the end, with courage
								and perseverance.
							</p>
							<p>
								How can someone who has never faced a battle be declared
								victorious? Winners are not those who have never faced
								difficulties, but those who refused to give up. They are people
								who, despite setbacks, falls, and adversity, persevered.
							</p>
							<p>
								Next, I will share two fundamental principles for achieving
								victory:
							</p>

							<h3 className="text-xl font-bold text-yellow-100 mt-8 mb-4">
								Never stop praying
							</h3>
							<p>
								It's important to recognize that we have sometimes adopted
								mistaken ideas about what it means to pray. Often, we've fallen
								into routines or practices that don't lead to true communion
								with God. We might think we're in a holy place simply because
								we've set aside time to pray, but that doesn't guarantee we're
								actually entering His presence. It's vital to learn to pray
								correctly, not out of habit, but because prayer is the only
								thing that can truly strengthen our spiritual life.
							</p>
							<p>
								Prayer is the means by which we deepen our communion with Father
								God, giving us the assurance that His promises will be fulfilled
								in our lives. However, if we pray without acknowledging who
								Father God is and without the reverence He deserves, we are not
								genuinely entering His presence.
							</p>
							<p>
								Sometimes our prayers are brief, lasting 10, 30 minutes, or
								perhaps an hour, but if we pray with the constancy and depth
								that Jesus did, our communication with Father Father God would
								become more natural and powerful.
							</p>
							<p>
								Jesus, though unsinful, spent entire nights in prayer, as the
								Gospel of Luke recounts. He would go up the mountain and pray
								for hours, then come down and perform miracles, fulfilling
								Father God's will on earth. If He, being the Son of God,
								considered prayer a priority, how much more should we, who are
								imperfect, follow His example. Let us not forget that prayer
								requires sacrifice and perseverance, something we often avoid
								because we prefer to rely on our own self-sufficiency rather
								than seek Father God's guidance.
							</p>
							<p>
								The disciples noticed that every time Jesus prayed, his requests
								were granted, which led them to want to learn to pray with the
								same intensity and effectiveness. Jesus taught them that prayer
								should be an intimate communion with Father God, a sincere
								dialogue in the secret place where the Father reveals himself
								and speaks to our hearts.
							</p>
							<p>
								Through prayer, we receive power and direction for our lives.
								Jesus emphasized, as recorded in Matthew, that we should pray in
								secret, not seeking the approval of others, but a genuine
								relationship with Father God.
							</p>
							<p>
								Father God doesn't focus so much on the physical place where we
								pray, but rather on our disposition and communion with Him. We
								cannot fall into the trap of reducing prayer to a formula or
								method. No matter how many books we read, prayer cannot be
								limited to human techniques. It is a spiritual pattern that must
								be lived out through experience and relationship with Father
								God.
							</p>
							<p>
								Jesus didn't give us a rigid method for praying, but a model to
								be lived with sincerity and authenticity. Prayer isn't
								mechanical; it's a space where Father God reveals himself,
								speaks to us, and transforms us. As he says{" "}
								<strong className="text-yellow-300 font-bold">
									Mark 11:24
								</strong>
								:{" "}
								<span className="italic text-yellow-200">
									"Therefore I tell you, whatever you ask for in prayer, believe
									that you have received it, and it will be yours."
								</span>{" "}
								But for that to become a reality, we must pray from a place of
								genuine communion with the Father, not simply repeating words,
								but aligning our hearts with His will.
							</p>
							<p>
								It's not so much about the time we spend praying or where we do
								it, but about the disposition with which we approach Father God.
								He seeks a living and authentic relationship with us, and that
								relationship is key to receiving what we have asked for,
								according to His will and purpose.
							</p>

							<h3 className="text-xl font-bold text-yellow-100 mt-8 mb-4">
								Cling to Father God's will
							</h3>
							<p>
								Many times we find ourselves pursuing our own desires and plans,
								without realizing that Father God has a different, much bigger
								and better purpose for our lives.
							</p>
							<p>
								In the model prayer that Jesus taught us, He does not say "Do
								what I want", but instead asked:{" "}
								<span className="italic text-yellow-200">
									"Thy will be done, on earth as it is in heaven."
								</span>{" "}
								(
								<strong className="text-yellow-300 font-bold">
									Matthew 6:10
								</strong>
								). This is not just a simple phrase, but a declaration of trust
								and total surrender to the Father's plans, acknowledging that
								His will is good, pleasing, and perfect.
							</p>
							<p>
								As children of Father God, we must learn to cling to His will,
								understanding that His ways and thoughts are higher than our own
								(
								<strong className="text-yellow-300 font-bold">
									Isaiah 55:8-9
								</strong>
								). Although we sometimes don't understand the reasons behind
								certain situations, we must trust that His plan will always lead
								us to a more blessed destination. Often, what we ask for or long
								for is limited by our human perspective, but Father God, who
								sees the whole picture, has the best for us, even when it
								doesn't align with what we initially desired.
							</p>
							<p>
								Clinging to Father God's will means letting go of our own
								desires, submitting our plans to His control, and trusting that
								He has a purpose for every situation. While it may not always be
								easy to accept that things don't go as planned, we must remember
								that what He has in store for us is always greater than anything
								we can imagine or ask for.
							</p>
							<p>
								When Jesus approaches John the Baptist in{" "}
								<strong className="text-yellow-300 font-bold">
									Matthew 3:13-17
								</strong>
								, John had already preached about Him, stating that after him
								would come someone who existed before him. For John, the
								greatest blessing he could experience would be to be baptized by
								the One he spoke of, Jesus, for he knew that He was the Son of
								God. However, he did not know that there would be an even
								greater blessing than being baptized by Him.
							</p>
							<p>
								By fulfilling the Father's will and baptizing Jesus, instead of
								being baptized by Him, John witnessed one of the greatest
								displays of glory recorded in the New Testament, and perhaps
								even the entire Bible. Only John was able to see the "three
								greats" in a single manifestation: he saw the Son when he
								immersed him in the Jordan, he saw the Holy Spirit descend in
								the form of a dove upon the Son, and he heard the Father open
								the heavens and declare:{" "}
								<span className="italic text-yellow-200">
									"This is my beloved Son, in whom I am well pleased."
								</span>
							</p>
							<p>
								John the Baptist witnessed the simultaneous presence of the
								Father, the Son, and the Holy Spirit in a glorious
								manifestation. Therefore, we should always pray that the
								Father's will be done, not our own. We ask for things that, in
								our opinion, are great, but Father God has even greater
								blessings prepared for our lives.
							</p>
							<p className="pl-4 border-l-2 border-yellow-300/50 text-yellow-200 italic my-6">
								"Likewise the Spirit helps us in our weakness, for we do not
								know how to pray as we ought, but the Spirit himself intercedes
								for us with groanings too deep for words." (
								<strong className="text-yellow-300 font-bold not-italic">
									Romans 8:26
								</strong>
								).
							</p>
							<p>
								The Bible is clear in stating that we don't know what is truly
								best for us, and therefore, we cannot ask correctly unless the
								Holy Spirit puts the right words in our mouths. Thus, as
								believers in Christ, it is crucial not to cling to material
								things or positions, but to walk with the mental flexibility
								that, at any moment, Father God will move us according to His
								higher plan. Setting goals is not a sin; in fact, it is a very
								good and right thing to do, but we must understand that the
								Lord's ways are higher than our own, and His thoughts are far
								more perfect.
							</p>
							<p>
								If you have been praying for years for something in particular
								and suddenly discover that Father God's will is different,
								simply give thanks and firmly follow the path He sets.{" "}
								<strong className="text-yellow-300 font-bold">
									Proverbs 14:12
								</strong>{" "}
								teaches us that{" "}
								<span className="italic text-yellow-200">
									"There is a path that seems right to a man, but in the end it
									leads to death."
								</span>{" "}
								It is important to reflect on this biblical truth when dreaming
								about what we desire for our lives, because clinging to ideals
								without consulting Father God's will will only lead us down a
								"path of death".
							</p>
							<p>
								We must allow the Holy Spirit to minister to our spirit
								regarding Father God's purpose for us, molding our souls to be
								submissive to His heavenly designs, even though they don't
								always bring us happiness. Joy, however, will always be present.
							</p>
						</div>
					</section>

					{/* Chapter 5 */}
					<section
						id="chapter-5"
						className="scroll-mt-24 p-6 md:p-8 bg-neutral-900/50 rounded-2xl border border-yellow-300/10">
						<h2 className="text-2xl md:text-3xl font-extrabold text-yellow-300 mb-6 uppercase tracking-tight">
							CHAPTER 5: WITHOUT FAITH THERE IS NO CONQUEST
						</h2>
						<div className="space-y-6 text-lg text-slate-200">
							<p>
								The story of the fall of the walls of Jericho demonstrates how
								unwavering faith is essential to achieving seemingly impossible
								victories. In the book of{" "}
								<strong className="text-yellow-300 font-bold">
									Joshua 6:1-20
								</strong>
								, Father God gave an instruction that, humanly speaking, made no
								sense: to circle the city for six days in silence, and on the
								seventh day to circle it seven times, blow the trumpets and cry
								out for the walls of Jericho to fall.
							</p>
							<p>
								Perhaps, for the Israelite army, accustomed to using their
								weapons in every battle, this strategy may have seemed strange;
								however, they obeyed with faith, and it was precisely that faith
								in the word of Father God that allowed them to conquer the city
								in a miraculous way.
							</p>
							<p>
								How many victories have you lost because of your lack of faith?
								How many times have you let doubt prevent you from moving toward
								the victory Father God has already promised? Faith is the bridge
								that will take you to a higher level of intimacy with God, where
								you can achieve the victories you thought were impossible.
							</p>

							<h3 className="text-xl font-bold text-yellow-100 mt-8 mb-4">
								The power of believing
							</h3>
							<p>
								Many times we pray without faith, and without faith it is
								impossible for a miracle to happen. When Jesus performed
								miracles, he approached people and asked them if they believed.
								They answered him, saying: "Yes, I believe so". Then Jesus said
								to them:{" "}
								<span className="italic text-yellow-300 font-semibold">
									"Your faith has saved you"
								</span>
								. And instantly they received the miracle. Likewise, if we
								believe, Father God will do greater, greater, and more powerful
								things in our lives if we trust in Him.
							</p>
							<p>
								I remember one day, at an evangelistic campaign, Father God was
								glorified in healing and deliverance from the very first day. On
								the second day, a mother approached me with her 11-year-old
								daughter and said:
							</p>
							<p className="pl-4 border-l-2 border-yellow-300/50 text-yellow-200 italic">
								"If you pray for her, she will heal. My daughter believes it."
							</p>
							<p>I replied:</p>
							<p className="pl-4 border-l-2 border-yellow-300/50 text-yellow-200 italic">
								—My dear, remember that it is not I who heals, but the one who
								sent me, who is Father God. Do you believe that He will heal
								you?
							</p>
							<p>And the girl replied:</p>
							<p className="pl-4 border-l-2 border-yellow-300/50 text-yellow-200 italic">
								—My mother was sick, my father too, and when you prayed for him
								yesterday, he was healed.
							</p>
							<p>The girl continued:</p>
							<p className="pl-4 border-l-2 border-yellow-300/50 text-yellow-200 italic">
								—I suffer from epilepsy; every day I wake up at 1:30 in the
								morning with seizures. If you pray for me, I know Father God
								will heal me.
							</p>
							<p>
								I asked her:{" "}
								<span className="italic text-yellow-200">
									—Do you believe Father God will heal you?
								</span>{" "}
								—and she answered me:{" "}
								<span className="font-bold text-yellow-300">—Yes.</span>
							</p>
							<p>
								Then I said to her:{" "}
								<span className="font-bold text-yellow-300">
									—Your faith has healed you.
								</span>
							</p>
							<p>
								The next day, her mother approached me and testified that her
								daughter had woken up at 4:00 a.m. The mother was awake,
								watching her, waiting to see if she would have the epileptic
								seizure that always plagued her at that time. The girl asked her
								what she was doing awake, since the pastor who had prayed for
								her said that Father God had healed her. Then, the daughter told
								her to go back to sleep, assuring her that she was already
								healed.
							</p>

							<h3 className="text-xl font-bold text-yellow-100 mt-8 mb-4">
								Certainty in the invisible
							</h3>
							<div className="bg-yellow-900/20 p-6 rounded-lg my-6 border border-yellow-300/30">
								<p className="italic font-medium text-yellow-100 mb-4">
									"But without faith it is impossible to please Father God,
									because anyone who comes to him must believe that he exists
									and that he rewards those who earnestly seek him."
								</p>
								<p className="text-right font-bold text-yellow-300">
									—Hebrews 11:6
								</p>
							</div>
							<p>
								In{" "}
								<strong className="text-yellow-300 font-bold">
									Hebrews 11:1
								</strong>
								, The best and clearest definition of faith is given here. It
								says that faith is the certainty and absolute assurance of what
								is hoped for, and the conviction and vision of what has not yet
								been seen. This implies that when we pray to Father God, we
								await the miracle without doubting, understanding that Father
								God's will for our lives is good.
							</p>
							<p>
								When I pray, even though I don't physically see what I'm asking
								for, in the spiritual realm I know it's a reality. If we take
								verse 6 and combine it with verse 1, we see that Father God is
								pleased with those who don't doubt, with those who believe
								without seeing. Consequently, He will open the heavens in their
								favor.
							</p>
							<p>
								To pray with faith, one must step outside the natural realm and
								immerse oneself in the spiritual, forgetting human limitations
								and trusting in Father God's inexhaustible resources. It is
								essential to clarify what Father God's will means, since those
								who pray with faith accept His will, understanding that it is
								what is best for the one who asks. Faith breaks chains, but it
								does not attempt to override the designs of the Holy Spirit.
							</p>
							<p>
								Faith does not confuse Father God's will with human emotions.
								Rather, it is a force that empowers us to bring heaven to earth.
								The apostle James emphasizes the connection between faith and
								works, for faith without works is worthless. Therefore, I invite
								you to strengthen your faith: yes, your conviction in Father God
								and the assurance that He guides you in all your ways.
								Furthermore, I urge you to discipline yourself in prayer, in
								constant intimacy with the Lord. Only in this way will you see
								His will fulfilled in your life.
							</p>

							<h3 className="text-xl font-bold text-yellow-100 mt-8 mb-4">
								Faith without works is dead faith
							</h3>
							<p>
								It's easy to say we have faith in Father God, that we trust in
								His power and His promises, but the reality is that faith isn't
								just a matter of words or thoughts. True faith is demonstrated
								through actions. The apostle James expresses it this way:{" "}
								<span className="italic text-yellow-200">
									"So also faith by itself, if it is not accompanied by works,
									is dead."
								</span>{" "}
								(
								<strong className="text-yellow-300 font-bold">
									James 2:17
								</strong>
								). A faith without works is sterile, empty.
							</p>
							<p>
								A dead faith produces no miracles. The reason you ask and don't
								receive is because your faith lacks action. It's not just about
								asking; it's about moving forward toward what you asked for and
								acting as if you've already received it.
							</p>
							<p>
								When Jesus healed people, he didn't just tell them to have
								faith; he also called them to action. To many he said:{" "}
								<span className="italic text-yellow-200">
									"Get up, take up your mat and walk."
								</span>{" "}
								(<strong className="text-yellow-300 font-bold">John 5:8</strong>
								). He was not only declaring health, but he was demanding a
								response, an action.
							</p>
							<p>
								True faith is manifested when we not only say we believe, but
								when we act as if what we ask for is already a reality. It is
								the kind of faith that doesn't wait to see before acting, but
								moves forward, trusting that Father God has already answered.
							</p>
							<p>
								It's easy to say you have faith, but how do you demonstrate it?
								Are you moving in the direction of what you believe Father God
								will do in your life? The faith that pleases Father God is that
								which goes beyond prayer and becomes action, obedience, and
								complete trust.
							</p>

							<h3 className="text-xl font-bold text-yellow-100 mt-8 mb-4">
								An essential request
							</h3>
							<p>
								In{" "}
								<strong className="text-yellow-300 font-bold">Luke 17:5</strong>
								, We see a key moment in the lives of the disciples: "The
								apostles said to the Lord: Increase our faith." This request
								reveals a profound understanding of the heart of Jesus'
								ministry. Observing the miracles, teachings, and life of their
								Master, the disciples didn't ask for more power, more fame, or
								even more spiritual gifts. They asked the Master to increase
								their faith, because they understood that faith is the
								foundation upon which everything else is built.
							</p>
							<p>
								It's interesting that, faced with the grandeur of what they saw,
								they didn't ask for extraordinary abilities or recognition. They
								didn't seek power to perform the same miracles Jesus did, but
								rather they wanted the most essential thing: faith. They knew
								that everything Jesus accomplished would only be possible
								through it.
							</p>
							<p>
								As Jesus said on another occasion:{" "}
								<span className="italic text-yellow-200">
									"If you have faith as small as a mustard seed, you can say to
									this mountain, 'Move from here to there,' and it will move;
									nothing will be impossible for you."
								</span>{" "}
								(
								<strong className="text-yellow-300 font-bold">
									Matthew 17:20
								</strong>
								). With faith, anything is possible: miracles, transformation,
								and a life guided by Father God's will. It's not just a
								superficial belief; it's a conviction that drives you to act, to
								trust fully in what Father God will do, even if you don't yet
								see it.
							</p>

							<h3 className="text-xl font-bold text-yellow-100 mt-8 mb-4">
								Verses about faith
							</h3>
							<ul className="space-y-4">
								{[
									{
										ref: "Hebrews 11:1",
										text: "Faith, then, is the assurance of things hoped for, the conviction of things not seen."
									},
									{
										ref: "Matthew 21:22",
										text: "And whatever you ask for in prayer, believing, you will receive."
									},
									{
										ref: "Mark 9:23",
										text: "Jesus said to him, “If you can believe, all things are possible to him who believes.”"
									},
									{
										ref: "Romans 10:17",
										text: "So then faith comes by hearing, and hearing by the word of God."
									},
									{
										ref: "2 Corinthians 5:7",
										text: "For we walk by faith, not by sight."
									},
									{
										ref: "Ephesians 2:8",
										text: "For by grace you have been saved through faith, and this is not from yourselves; it is the gift of God."
									},
									{
										ref: "James 1:6",
										text: "But let him ask in faith, with no doubting, for he who doubts is like a wave of the sea driven and tossed by the wind."
									},
									{
										ref: "Matthew 17:20",
										text: "Jesus said to them, “Because of your little faith. For truly I tell you, if you have faith as small as a mustard seed, you can say to this mountain, ‘Move from here to there,’ and it will move. Nothing will be impossible for you.”"
									}
								].map((verse, index) => (
									<li
										key={index}
										className="flex flex-col sm:flex-row gap-2 sm:gap-4 bg-neutral-900 border border-neutral-800 p-4 rounded-lg shadow-sm">
										<span className="font-bold text-yellow-300 whitespace-nowrap">
											{verse.ref} —
										</span>
										<span className="text-slate-300 italic">{verse.text}</span>
									</li>
								))}
							</ul>
						</div>
					</section>

					{/* Chapter 6 */}
					<section
						id="chapter-6"
						className="scroll-mt-24 p-6 md:p-8 bg-neutral-900/50 rounded-2xl border border-yellow-300/10">
						<h2 className="text-2xl md:text-3xl font-extrabold text-yellow-300 mb-6 uppercase tracking-tight">
							CHAPTER 6: PRINCIPLES THAT EVERY WINNER MUST APPLY
						</h2>
						<div className="space-y-8 text-lg text-slate-200">
							<p>
								When you notice the absence of Father God's voice in your life,
								it's not that He has stopped speaking to you because He doesn't
								want to as a Father. On the contrary, His greatest desire is to
								communicate daily with His creation. However, He often doesn't
								do so because, when He speaks, His primary purpose is to give us
								guidance, and human beings are generally unwilling to follow it.
							</p>
							<p>
								Most people don't like to obey what Father God asks, and for
								this reason, He prefers to stop speaking to you, since it would
								be pointless if we don't follow His will. If Father God speaks
								to you constantly and you don't obey, you would be sinning at
								every moment, because disobedience is sin. Therefore, in His
								wisdom and love, Father God prefers to stop speaking to you
								rather than provoke you to sin through disobedience.
							</p>

							<div>
								<h3 className="text-xl font-bold text-yellow-100 mb-3">
									Act out of conviction, not feelings
								</h3>
								<p className="mb-4">
									You shouldn't tie your feelings or emotions to your calling,
									because that could cause you to miss out on the blessings
									Father God has for your life. We often associate our emotions
									with our purpose, which can lead us astray from Father God's
									plan. Father God loved the world so much that He gave His only
									Son, the Beloved of heaven. If He had tied His feelings or
									emotions to that act of love, perhaps He wouldn't have allowed
									Jesus to give His life for us. He wouldn't have let His Son
									die on the cross of Calvary.
								</p>
								<p className="mb-4">
									That's why you often find yourself crying in a corner, feeling
									alone, distressed, or believing that Father God has abandoned
									you. But Father God isn't looking for someone who lives only
									on feelings; He's looking for warriors who will rise up in the
									midst of their tears, their brokenness, and their battles, and
									say:{" "}
									<span className="italic text-yellow-200">
										"I can, I'm going to fight this battle because Father God
										has chosen me for this."
									</span>
								</p>
								<p className="mb-4">
									When someone is called, they can decide whether to go or not,
									because they have only heard one voice. But when someone is
									chosen, they have no alternative; they have been singled out
									for a clear purpose. Like when we were children and our
									parents called us and our siblings; perhaps no one answered,
									and then they sent someone else to do the job. But when our
									father called our name directly, there was no choice: we had
									to do what was assigned to us.
								</p>
								<p className="mb-4">
									The same is true with Father God. Perhaps He has not only
									called you, but chosen you for a mission that only you can
									fulfill.
								</p>
								<p>
									Sometimes you ask yourself:{" "}
									<span className="italic text-yellow-200">—Why me, Lord?</span>{" "}
									The answer is that if this process had been given to someone
									else, perhaps that person would have given up by now. But you,
									even though you've been through a lot, have persevered. Father
									God chose you, and that's why you need to finish the
									assignment you were given, in order to receive your blessings.
								</p>
							</div>

							<div>
								<h3 className="text-xl font-bold text-yellow-100 mb-3">
									Don't be discouraged by criticism
								</h3>
								<p className="mb-4">
									There will always be people who criticize the success of
									others because, deep down, they know they'll never achieve it.
									That's why, when you accomplish something, many will try to
									minimize your achievements, saying things like: "He succeeded
									because he had help", "Anyone can own that vehicle", "Anyone
									can get that position in the company", or "That leadership is
									nothing special". But those criticisms stem from the fact that
									they themselves have not achieved what you have, and that is
									why they do not value what you have.
								</p>
								<p className="mb-4">
									This happens even within families. Some will say: "Anyone can
									have a stable family", but they don't see what lies behind
									that stability. They don't understand that before having a
									harmonious marriage, you had to shape your partner, go through
									difficult times, and often cry in silence to get to where you
									are today.
								</p>
								<p className="mb-4">
									To achieve that position at your company, you had to endure
									difficult situations: embarrassing moments from your boss,
									confrontations, uncomfortable situations that were all part of
									your growth. Many times, it wasn't because you deserved it,
									but because he was the boss, and you learned to handle those
									situations.
								</p>
								<p>
									It's easy to criticize from a place of comfort, once you've
									already achieved something. People who criticize do so because
									they're unwilling to go through what you've gone through. They
									prefer to remain seated on the sidelines, criticizing others
									instead of standing up and applauding their success, hoping
									that one day they too will achieve it.
								</p>
							</div>

							<div>
								<h3 className="text-xl font-bold text-yellow-100 mb-3">
									Give without restrictions
								</h3>
								<p className="mb-4">
									It is essential to learn to obey Father God's voice when He
									speaks to us about giving, for true blessing lies in it. It's
									not just about giving what is comfortable for us, but about
									offering what He specifically asks of us. It's not enough to
									offer an apology when Father God calls you to sincere
									forgiveness. It's not about handing over an old shirt when He
									asks you to buy a new one for your brother. Nor is it enough
									to give what you have in your pockets when He is calling you
									to offer what you have in your bank account.
								</p>
								<p className="mb-4">
									For many, giving can be a challenge, but letting go is one of
									the purest ways to demonstrate faith, as the Bible teaches us
									that God{" "}
									<span className="italic text-yellow-200">
										"loves a cheerful giver"
									</span>{" "}
									(
									<strong className="text-yellow-300 font-bold">
										2 Corinthians 9:7
									</strong>
									). And we do not give with the purpose of receiving something
									in return; we give with the confidence that Father God is and
									always will be our sustenance.
								</p>
								<p className="mb-4">
									He who gives without expecting anything in return is truly
									free, but he who gives expecting something becomes a slave to
									that desire. He remains bound to what he expects, because his
									motivation is not the act of giving, but the reward he longs
									to obtain. Many times, people offer you something or help you
									hoping that, at some point, you will return the favor.
									However, anyone who gives with the expectation of receiving
									becomes a prisoner of that which they expect.
								</p>
								<p>
									When you give in that way, you find yourself waiting for
									gratitude that may never come. You become tied to people who,
									in many cases, won't value the effort you made for them.
									Therefore, when you give or help, do it without expecting
									anything in return, so you don't become a slave to those who
									will never appreciate what you did. If you live waiting for
									recognition, you could get trapped in an endless wait, while
									for them, that act that cost you so much meant nothing, or
									they might even come to believe that anyone could have done
									it.
								</p>
								<p>
									However, in times of need, when they were alone, it was your
									courage that made all the difference. You were the one who
									stepped in, no matter how deep the problem was. That's why,
									when you decide to give or help, do it from the heart, without
									expecting anything in return. Only then will you be truly
									free, without depending on the gratitude or approval of
									others.
								</p>
							</div>

							<div>
								<h3 className="text-xl font-bold text-yellow-100 mb-3">
									Speak the truth, but in love
								</h3>
								<p className="mb-4">
									People don't like it when you're hypocritical, but they also
									don't like it when you tell them the truth directly. Often,
									human beings reject hypocrisy and lies, but at the same time,
									they feel uncomfortable when told the truth. A common example
									is when your partner asks you: "How do I look?". If you
									answer: "I don't like how those clothes look on you" or "That
									garment makes you look heavier", she feels hurt. However, if
									you avoid being honest and soften your opinion, you're accused
									of being a hypocrite and asked to be sincere.
								</p>
								<p className="mb-4">
									This dilemma arises because, although people say they want the
									truth, they are often unprepared to receive it without
									discomfort. However, it's important to point out that telling
									the truth doesn't mean offending. Some believe that being
									brutally honest and offending others is a way of being
									sincere, but that's not the case. Being honest doesn't imply
									hurting others.
								</p>
								<p>
									Therefore, we must be careful how we tell the truth. The truth
									has the power to confront, but it shouldn't offend. It's
									possible to be honest without hurting others' feelings by
									using the truth wisely and respectfully.
								</p>
							</div>

							<div>
								<h3 className="text-xl font-bold text-yellow-100 mb-3">
									Be wise when seeking advice
								</h3>
								<p className="mb-4">
									Not everyone should be asked for advice, nor should you take
									it from just anyone. I repeat: not everyone is qualified to
									give you advice, nor do they all deserve to have their opinion
									taken seriously. Often, people advise you from their own
									perspective, and their situation may have nothing to do with
									yours. Others give opinions based on what they've heard or
									what little they know, not on the reality of the situation.
								</p>
								<p className="mb-4">
									This is where the importance of discernment comes in—the
									ability to wisely judge which advice is helpful and which is
									not. The Bible calls us to be prudent and to ask for
									discernment in order to make right decisions.{" "}
									<strong className="text-yellow-300 font-bold">
										Proverbs 3:21
									</strong>{" "}
									tells us:{" "}
									<span className="italic text-yellow-200">
										"My son, keep your judgment and discernment, and do not lose
										sight of prudence."
									</span>{" "}
									It is essential to ask Father God for wisdom to distinguish
									between an opinion that builds up and one that destroys.
								</p>
								<p className="mb-4">
									This often happens when you decide to start your own business.
									There will always be people who give you bad advice, either
									because they don't want you to succeed or because they're
									afraid of your success. Others will offer opinions intended to
									undermine your project and distract you from what you truly
									want to achieve. That's why it's not uncommon to hear of
									people who dreamed of opening a clothing store and end up
									opening a restaurant.
								</p>
								<p className="mb-4">
									Why does this happen? Because they listened to so many
									opinions that they ended up abandoning their own dreams to
									follow those of others. Or they were swayed by advice that led
									them astray from their original path, guided by those who
									didn't want them to succeed as well.
								</p>
								<p className="mb-4">
									Here, discernment is vital: knowing when to listen and when to
									follow the purpose Father God has placed in your heart. As it
									says{" "}
									<strong className="text-yellow-300 font-bold">
										James 1:5
									</strong>
									: "If any of you lacks wisdom, you should ask God, who gives
									generously to all without finding fault, and it will be given
									to you."
								</p>
								<p>
									Remember that not everyone has the same heart as you, nor the
									same intention to give you good advice or an honest opinion.
									Therefore, be very careful who you listen to, and make sure
									your decisions are guided by wisdom from above, not by the
									opinions of those who don't share your dreams or vision.
								</p>
							</div>

							<div>
								<h3 className="text-xl font-bold text-yellow-100 mb-3">
									Love yourself
								</h3>
								<p className="mb-4">
									Loving yourself is the greatest romance in life. Often you
									dedicate your love to others, but you forget to love yourself.
									You strive to give love to others, but you neglect the
									affection you also need. Why does this happen? Because you
									haven't taken the time to stop and think about yourself.
									Sometimes, you need to say: "Today, I need to rest." Even if
									you want to spend time with your friends, it's essential to
									prioritize yourself. First, love yourself and rest; then,
									share with others.
								</p>
								<p className="mb-4">
									How long has it been since you treated yourself to something
									simple, like enjoying a cup of coffee while gazing at the sea?
									When was the last time you did something you truly love but
									have been putting off for so long? It's important to make time
									for yourself, because self-love is the romance that lasts a
									lifetime.
								</p>
								<p className="mb-4">
									People will be by your side as long as it suits them; some
									value you, others only take advantage of your generosity or
									personality. And often, some of them will leave, betray you,
									or simply disappear. Even if some stay, at the end of the day,
									the only one who will always be there for you, without fail,
									is yourself.
								</p>
								<p>
									It's important to understand that self-love is not
									selfishness. The Bible itself teaches us:{" "}
									<span className="italic text-yellow-200">
										"Love your neighbor as yourself"
									</span>{" "}
									(
									<strong className="text-yellow-300 font-bold">
										Matthew 22:39
									</strong>
									). This commandment implies that in order to love others, we
									must first love ourselves. If we don't take care of our own
									physical, emotional, and spiritual health, we cannot truly
									care for others. Loving yourself doesn't mean neglecting
									others, but rather ensuring that you are strong and whole
									enough to give your best to those around you.
								</p>
							</div>

							<div>
								<h3 className="text-xl font-bold text-yellow-100 mb-3">
									Don't be afraid of failure
								</h3>
								<p className="mb-4">
									Those who know how to climb aren't afraid of falling, because
									they're confident they know how to climb back up. Many people
									fear facing defeat or losing something simply because they
									don't understand how they got where they are. They climbed one
									day because someone helped them, but then they boasted of
									having achieved it through their own merit. And now, they fear
									falling because they know that, at some point, they betrayed
									the person who lent them a hand, and they no longer have their
									support.
								</p>
								<p className="mb-4">
									That's why those who truly know how to achieve success aren't
									afraid of losing it, because they've learned the process and
									don't depend on others to climb back up. It's crucial that,
									even if someone helps you reach higher, you learn the path to
									success yourself. That way, if you ever have to fall, you
									won't have to betray or hurt anyone for fear of falling.
									Instead, you'll have the confidence that, regardless of the
									circumstances, you'll know how to get back up.
								</p>
								<p>
									True success is not just about reaching the top, but about
									understanding the process so that, if you find yourself in a
									valley, you can climb back up with the same strength.
								</p>
							</div>
						</div>
					</section>

					{/* Chapter 7 */}
					<section
						id="chapter-7"
						className="scroll-mt-24 p-6 md:p-8 bg-neutral-900/50 rounded-2xl border border-yellow-300/10">
						<h2 className="text-2xl md:text-3xl font-extrabold text-yellow-300 mb-6 uppercase tracking-tight">
							CHAPTER 7: BEWARE OF JUDASES AND PETERS
						</h2>
						<div className="space-y-6 text-lg text-slate-200">
							<p>
								Many times, you might be mistaken for a wolf because of your
								loyalty to your pack, not because of any ill will. Loyalty isn't
								something you talk about, but something you prove; it's not
								something you show off, but something you demonstrate when the
								time comes. Loyalty has its hours, minutes, and seconds. Why do
								I refer to loyalty this way? Because loyalty is tested in the
								exact and precise moment things happen, and that's when you know
								if you're truly loyal.
							</p>
							<p>
								Therefore, when you choose, you must choose wisely so that, in
								doing so, you don't attract a Judas, as many will say, but
								perhaps a Peter. What does this mean? In reality, Judas didn't
								betray the Master for no reason; Judas was chosen to betray the
								Master. Jesus didn't take Judas to the mountain, Jesus didn't
								lead Judas to walk on water, Jesus didn't pay Judas's taxes.
								However, with Peter, Jesus took him to the mountain, revealed
								who he was, paid Peter's tax with a coin found in the mouth of a
								fish, and walked on water with him.
							</p>

							<h3 className="text-xl font-bold text-yellow-100 mt-8 mb-4">
								The betrayal of closeness
							</h3>
							<p>
								There are some "Peters" to whom you have given everything: you
								have taken them into your home, fed them, helped them
								financially, and at the moment when they have you on the cross,
								they are the first to betray you and deny you three times.
							</p>
							<p>
								Those Peters who swore loyalty to you, who said they would go
								with you to the death, who claimed that nothing else mattered
								because you were their brother and their friend, are the first
								ones who, when the persecution against you begins, say: "I don't
								know him. I'm not him. I've never been with him."
							</p>
							<p>
								That's why you have to be careful, not with the Judases, who
								were chosen to strengthen you. Why to strengthen you? Because
								the Judases are those people who are there, and you know they're
								not good for you, but their presence has a purpose. And the
								moment you want to throw in the towel, you say: "No, I can't let
								her go because if I do, this Judas will make fun of me. If I let
								her go, this Judas will say he was right. If I let her go, this
								Judas will say he was always right about everything bad he said
								about me." That's why those Judases give you the strength to
								carry on.
							</p>
							<p>
								However, those Peters who said they would go with you to the
								ends of the earth, the moment the persecution, criticism,
								murmuring, and blasphemy against you begin, when you fall or
								fail, are the first to deny you and say: "I was there for a
								while, but he's not my brother, he never helped me, he never did
								anything like that for me." That's why you should beware not of
								Judases, but of Peters. The enemy will never betray you; the one
								who betrays you is a friend.
							</p>

							<h3 className="text-xl font-bold text-yellow-100 mt-8 mb-4">
								The loyalty of the pack
							</h3>
							<p>
								On that same point, it's worth noting that wolves aren't the
								strongest. No, but you also won't see them jumping around in a
								circus. Why? Because they're loyal to their packs. Wolves aren't
								the kind of people who applaud you when they disagree with you.
								No, no, no. Wolves don't join the strongest side simply because
								it's the most popular; they won't change sides for that reason.
							</p>
							<p>
								Wolves don't betray. They don't side with those who are strong
								in times of weakness; they prefer to die loyal to their pack,
								loyal to their own. Do you know why? Because wolves fight for
								the pack, not for their own interests. Envy exists in many
								others, and that's why they only follow people with some kind of
								success. Wolves don't feel envy; they fight for the entire pack,
								because they understand that blessings should be shared by all.
							</p>
							<p>
								Some people align themselves with only one side or the other
								because they believe what's theirs is theirs alone, and that's
								when envy creeps in—that feeling of the follower who hasn't
								achieved anything in life. But wolves aren't like that; they
								don't feel envy because they understand that what they're going
								to receive is for everyone to enjoy. That's why I repeat: you've
								been mistaken for wolves not because of any malice in your
								heart, but because of your loyalty to your pack. Continue to be
								loyal to your pack; sooner or later, life will reward you.
							</p>
							<p>
								What are you? A Judas or a Peter? A wolf loyal to its pack, or
								simply a lion that wants to reign alone?
							</p>

							<h3 className="text-xl font-bold text-yellow-100 mt-8 mb-4">
								If you want to arrive early, go slowly
							</h3>
							<p>
								This point is very important because my grandfather always told
								me:{" "}
								<span className="italic text-yellow-200">
									"If you want to arrive early, go slowly."
								</span>{" "}
								When I was a child, I didn't understand this, until one day, in
								an accident, I realized that the faster I ran, the later I might
								reach my destination, or simply never arrive.
							</p>
							<p>
								Many times in life, blessings are waiting for us, but we want to
								rush things and try to speed up the process. This causes us to
								lose our way, the blessings to slip away, and we fail to receive
								what Father God has truly reserved for us.
							</p>
							<p>
								We often think that Father God has forgotten us, and that's why
								we don't receive what we want. But that's not the case; many
								times we're asking for what we want, not what's best for us. God
								doesn't want to give us only what we want, but what is truly
								best for us.
							</p>
							<p>
								It's like a child who comes home and says: "I'm hungry, Mommy,
								serve me my food." Although the food isn't ready yet, the mother
								replies: "Hold on, wait". The child insists, but she knows that
								serving him raw food could upset his stomach or cause
								indigestion. If he waits a little longer, he can enjoy a
								properly prepared meal. My grandfather used to say: "Hunger that
								expects to be satisfied is not hunger", because when you wait
								eagerly, you enjoy it more, since you value the effort and the
								waiting time.
							</p>

							<h3 className="text-xl font-bold text-yellow-100 mt-8 mb-4">
								Memories of a better time
							</h3>
							<p>
								Remember those times when we were kids, when three or four of us
								slept in the same bed, wore the same uniform because one of us
								studied in the morning and the other in the afternoon, and
								shared the same backpack to carry our notebooks? Remember how we
								invented games with rubber bands or cardboard cars?
							</p>
							<p>
								To go to the bathroom, we often went a few meters from the house
								and saw monsters formed by trees that were just shapes among the
								plants. We waited for darkness to play hide-and-seek or other
								games we invented, like the crazy helper or the "tag".
							</p>
							<p>
								When the lights came back on, we celebrated with a euphoric
								shout, because there was a woman who told us stories about
								people who had died in the neighborhood and appeared in the
								alleyways, and we believed all those stories. Many times we
								couldn't even walk at night for fear of those tales.
							</p>
							<p>
								Remember how close we were, sharing a lollipop or a soda. We all
								sucked on the same lollipop or drank from the same bottle,
								enjoying every shared sip. No one was disgusted by anyone, no
								one was envious. Every Sunday at 3 p.m., we'd get dressed to go
								for a walk around the neighborhood, all of us kids.
							</p>
							<p>
								We bought mints and gum to take around the neighborhood, then
								we'd go back home and play a little in front of the house. I
								remember those times; they were beautiful times. There was only
								one television for the whole neighborhood, for the whole area,
								for the whole district. We all watched it together. El Chavo,
								the little dolls like Candy, the metal frog, Honey Bee Hutch,
								the Thundercats and the Smurfs.
							</p>
							<p>
								We used to watch those cartoons where there was always a bad guy
								and a good guy who won. Even though television required us to
								turn an antenna outside the house, we all enjoyed it.
							</p>

							<h3 className="text-xl font-bold text-yellow-100 mt-8 mb-4">
								Recovering the essence of family
							</h3>
							<p>
								We all sat there enjoying that television. Nowadays, technology
								has stolen that from us; everyone has a cell phone while we're
								gathered together, and we don't realize we're not talking. Not
								just friends, but our family too. How long has it been since you
								cooked dinner for everyone on a day other than Christmas Eve?
								How long has it been since you ate lunch with your family at
								noon? How long has it been since you asked your children what
								happened at school? They always have an imaginary friend who is
								really just themselves.
							</p>
							<p>
								Remember that you were one too, which is why we need to return
								to those values of love. We need to return to those times when
								we all gathered to eat together and talk about our lives, so
								that we could feel like a family living not just in a house, but
								in a happy home. Remember: "If you want to arrive early, go
								slowly to enjoy all the scenery that life has to offer."
							</p>
							<p>
								And so we come to the best point: prayer. It is the golden code.
								After having mentioned each of these codes of life or secrets of
								life, I want to offer you this secret or golden code called "the
								prayer".
							</p>
						</div>
					</section>

					{/* Chapter 8 */}
					<section
						id="chapter-8"
						className="scroll-mt-24 p-6 md:p-8 bg-yellow-900/30 rounded-2xl shadow-lg border border-yellow-300/30">
						<h2 className="text-2xl md:text-3xl font-extrabold text-yellow-300 mb-6 border-b border-yellow-300/30 pb-4 uppercase tracking-tight">
							CHAPTER 8: THE GOLDEN CODE
						</h2>
						<div className="space-y-6 text-lg text-yellow-50">
							<p>
								Prayer is a lifestyle, because it's where you empower yourself
								with Father God's power. There is power in your relationship
								with God. There are two kinds of relationships: one with Father
								God and one with your neighbor. Your relationship with Father
								God should be your priority, and if you have problems in your
								relationship with your neighbor or with Father God, He won't
								hear your prayer.
							</p>

							<h3 className="text-xl font-bold text-white mt-8 mb-4">
								Identity and authority
							</h3>
							<p>
								One of the most important aspects of prayer is having identity.
								If you lack identity, you lack authority; and if you lack
								identity, your honor will not be genuine. You must first go to
								the source of life, which is Father God, having identity and
								knowing that you belong to Him and are in Him.
							</p>
							<p>
								We must learn to pray not as bastards, not as servants, but as
								children. We must know to whom we are praying so that our prayer
								is not vain, superficial, or routine. We must remember that we
								are praying to the Father, our source of life. Every time we
								pray to the Father, we acknowledge that He is our source of
								life.
							</p>
							<p>
								The stronger our sense of identity, the more Father God uses us.
								Identity is believing based on firsthand experience, and that
								experience leads us to pray more. Consequently, by praying more,
								we attain greater spiritual maturity and learn to depend on
								Father God.
							</p>

							<h3 className="text-xl font-bold text-white mt-8 mb-4">
								The power of intercession
							</h3>
							<p>
								When we pray constantly, we become not only speakers, but also
								intercessors. But to be an intercessor, it is necessary to have
								a life of prayer with Father God. In{" "}
								<strong className="text-white">Exodus 32:32</strong>, when Moses
								interceded for the people who sinned against Father God by
								making a golden calf, Moses' prayer of intercession was so
								powerful that Father God took it into account and changed his
								mind.
							</p>
							<p>
								When we reach the level of intercession, we become true
								intercessors and are in the spiritual dimension of{" "}
								<strong className="text-white">John 17:11-21</strong>, where
								Jesus spoke to us about being one in Him and in the Father,
								because He is our greatest intercessor. When you are a true
								intercessor, you are not selfish; you pray for others and not
								for your own benefit. You sacrifice for others, and Father God
								is pleased by sacrifices for His glory.
							</p>

							<h3 className="text-xl font-bold text-white mt-8 mb-4">
								Recognizing the sovereignty of Father God
							</h3>
							<p>
								To pray effectively, it is essential to understand our position
								and Father Father God's position in the communion established
								between the Almighty and humankind. By carefully studying the
								model prayer that Jesus taught us, we notice that Christ begins
								it with{" "}
								<span className="italic text-yellow-200">
									"Our Father who art in heaven"
								</span>
								. This should be the attitude of one who approaches Father God
								in prayer: to recognize His absolute deity and superiority.
							</p>
							<p>
								No one who seeks Father God based on their own merits, without
								surrendering their earthly crowns to the Redeemer, will be heard
								by the King of kings and Lord of lords. Father God is not just
								another god; He is the only true Father God, the One who is
								all-powerful and who has never lost a battle. This makes Him
								immediately superior to humankind. It is useless to be arrogant
								in prayer and believe that we are equal to Father God.
							</p>

							<h3 className="text-xl font-bold text-white mt-8 mb-4">
								An irreplaceable discipline
							</h3>
							<p>
								If we understand this reality clearly, having a life of prayer
								will be simple and will become essential in our daily lives. We
								will understand that if we do not go into the presence of the
								Eternal One, our day will be a logical failure. It is impossible
								to know Father God without prayer, since it was created as the
								means for that purpose. Prayer cannot be replaced by any other
								spiritual discipline. It is useless to read a lot of the Bible,
								study intensely in a seminary, preach with logical coherence, or
								have a beautiful voice if all of that is not accompanied by a
								devout life of prayer.
							</p>
							<p>
								Daniel prayed three times a day, and because of this, he was
								able to endure the spirit of idolatry in the Babylonian Empire
								and possessed a superior spirit, to the point that Father God
								revealed to him the secrets of the ages. Furthermore, due to his
								constant communion with Father God, he played a prominent role
								in Babylon during three distinct reigns, without compromising
								his principles and overcoming obstacles with faith and trust in
								Jehovah.
							</p>
							<p>
								We should ask ourselves if devotional prayer is truly an
								integral part of our daily lives, or if we only turn to it when
								we want Father God to use us powerfully or when we have needs.
							</p>
							<p className="font-medium text-center italic text-white/90 text-xl mt-8">
								"Let us be true children of Father God. Let us communicate to
								our Heavenly Father all that we want to do, and what better way
								to do so than through prayer, so that we may dwell in His
								presence. Amen."
							</p>
						</div>
					</section>
				</article>
			</main>

			{/* Back to top button */}
			<button
				onClick={scrollToTop}
				className={`fixed bottom-8 right-8 p-3 bg-yellow-300 text-black rounded-full shadow-[0_0_20px_rgba(234,179,8,0.4)] transition-all duration-300 hover:bg-yellow-300 hover:scale-110 focus:outline-none z-40 ${
					showScrollTop
						? "opacity-100 translate-y-0"
						: "opacity-0 translate-y-10 pointer-events-none"
				}`}
				aria-label="Back to top">
				<ChevronUp size={24} strokeWidth={3} />
			</button>

			<footer className="bg-neutral-950 text-slate-500 py-12 text-center border-t border-yellow-300/10">
				<p>© 2024 Mongoose Mentality. All rights reserved.</p>
				<p className="text-sm mt-2">
					Designed for the edification of the body of Christ.
				</p>
			</footer>
		</div>
	);
}
