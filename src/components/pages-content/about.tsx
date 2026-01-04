"use client";

import { useLanguageContext } from "@/context/languageContext";
import { languageOptions } from "@/static";
import { JumbotronShared } from "@/components/jumbotron/";
import { Container3xl, MaxTextWidth } from "@/components/containers";

export function AboutPageContent() {
  const { language } = useLanguageContext();
  const isEnglish = language === languageOptions.english;

  // aboutContent object to keep the return statement clean and readable
  const aboutContent = {
    topSmTitle: isEnglish ? "About Me" : "Sobre Mí",
    mainTitle: isEnglish ? "My Values" : "Mis Valores",
    mainText: isEnglish
      ? "Learn about what moves my faith, my conviction and values in the Bible that move my ministry."
      : "Aprende sobre aquello que me mueve en la fe, mis convicciones y valores bíblicos que mueven mi ministerio.",
    bioTitle: isEnglish
      ? "Pastor Gary Mack Biography"
      : "Biografía del Pastor Gary Mack",
    bioP1: isEnglish
      ? "Pastor Gary Mack's life began in a crucible of rejection and extreme survival. Abandoned by his father and subjected to severe cruelty by his mother, he found himself destitute at a young age following the death of his grandmother. His childhood and adolescence were marred by familial abuse and the harsh realities of the streets, eventually leading him into the dangerous world of drug micro-trafficking. Yet, amidst the darkness and crime, a divine purpose preserved his life, protecting him even when surrounded by imminent peril."
      : "La vida del Pastor Gary Mack comenzó marcada por el rechazo y la supervivencia extrema. Abandonado por su padre y maltratado cruelmente por su madre, quedó desamparado a una edad temprana tras la muerte de su abuela. Su infancia y adolescencia transcurrieron entre abusos familiares y la dureza de las calles, donde terminó involucrado en el mundo del microtráfico de drogas. Sin embargo, en medio de la oscuridad y la delincuencia, Dios tenía un propósito reservado para él, protegiendo su vida incluso cuando estaba rodeado de peligros inminentes.",
    bioP2: isEnglish
      ? `His radical transformation occurred during a massive police raid from which there was no human escape. After crying out to God and pledging his service, he was miraculously guided to safety—an event that marked the end of his criminal life and the beginning of his ministry. Together with his wife, he paid a high price for his faith, enduring homelessness and sleeping exposed to the elements in a churchyard. It was in this "furnace of fire" that he forged what he calls the "mongoose mentality": an unwavering determination to face the enemy and transform the poison of the past into strength.`
      : `Su transformación radical ocurrió durante una redada policial de la que humanamente no tenía escapatoria. Tras clamar a Dios y prometerle su servicio, fue guiado milagrosamente hacia la seguridad, un evento que marcó el fin de su vida delictiva y el inicio de su ministerio. Junto a su esposa, pagó un alto precio por su fe, llegando a vivir en la indigencia y durmiendo a la intemperie en el patio de una iglesia. Fue en ese "horno de fuego" donde forjó lo que él llama la "mentalidad de mangosta": una determinación inquebrantable para enfrentar al enemigo y transformar el veneno del pasado en fortaleza.`,
    bioP3: isEnglish
      ? `Today, Gary Mack stands as a living testament to the restorative power of the Gospel. As the founder and pastor of the ministry "Los Rescatados Rescatando" (The Rescued Rescuing) in Los Ríos, he dedicates his life to reaching the marginalized, taking the Word of God into prisons, hospitals, and drug dens. His ministry has witnessed the conversion of thousands of inmates and criminals who have surrendered their weapons in exchange for a new life. Through his books and preaching, he teaches that victory is conquered through prayer and faith, demonstrating that God can turn any history of pain into a glorious purpose.`
      : `Hoy, Gary Mack es un testimonio vivo del poder restaurador del Evangelio. Como fundador y pastor del ministerio "Los Rescatados Rescatando" en el sector Los Ríos, dedica su vida a alcanzar a los marginados, llevando la palabra de Dios a cárceles, hospitales y puntos de droga. Su ministerio ha sido testigo de la conversión de miles de reclusos y delincuentes que han entregado sus armas a cambio de una nueva vida. A través de sus libros y prédicas, enseña que la victoria se conquista con oración y fe, demostrando que Dios puede cambiar cualquier historia de dolor en un propósito de gloria.`,
  };

  return (
    <>
      <JumbotronShared
        topSmTitle={aboutContent.topSmTitle}
        mainTitle={aboutContent.mainTitle}
        mainText={aboutContent.mainText}
      />
      <Container3xl>
        <article className="py-24 text-slate-200">
          <MaxTextWidth>
            <h1>{aboutContent.bioTitle}</h1>
            <p className="mb-3">{aboutContent.bioP1}</p>
            <p className="mb-3">{aboutContent.bioP2}</p>
            <p className="mb-3">{aboutContent.bioP3}</p>
          </MaxTextWidth>
        </article>
      </Container3xl>
    </>
  );
}