"use client";

import { useLanguageContext } from "@/context/languageContext";
import { languageOptions } from "@/static";

export interface SectionHeaderProps {
  enTitle: string;
  enDescription: string;
  spTitle: string;
  spDescription: string;
}
export default function SectionHeader({
  enTitle = "English Title",
  enDescription = "English Description",
  spTitle = "Spanish Title",
  spDescription = "Spanish Description"
}: SectionHeaderProps) {

  const { language } = useLanguageContext();

  return (
        <section className="py-16">
          <h2 className="text-3xl md:text-4xl mb-12 font-bold text-black dark:text-white text-center">
            {language === languageOptions?.spanish
              ? spTitle
              : enTitle}
          </h2>
          <p className="text-lg font-normal text-slate-700 lg:text-xl sm:px-16 lg:px-48 dark:text-slate-300 text-center max-w-[80ch] mx-auto">
            {language === languageOptions.english
              ? enDescription
              : spDescription}
          </p>
        </section>
  )
}