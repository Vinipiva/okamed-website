import { pt } from '../content/pt';
import { es } from '../content/es';

const translations = { pt, es } as const;

export type Locale = keyof typeof translations;

export function useTranslations(locale: string | undefined): typeof pt {
  const lang = (locale ?? 'pt') as Locale;
  return translations[lang] ?? translations.pt;
}
