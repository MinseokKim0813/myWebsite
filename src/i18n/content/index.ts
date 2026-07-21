import type { Locale } from "../locale";
import { enContent } from "./en";
import { koContent } from "./ko";
import type { SiteContent } from "./shared";

const content: Record<Locale, SiteContent> = {
  en: enContent,
  ko: koContent,
};

export const getContent = (locale: Locale): SiteContent => content[locale];

/** @deprecated Use getContent(locale).research.publications */
export const publications = enContent.research.publications;
