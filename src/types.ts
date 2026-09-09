export type Language = 'en' | 'ja' | 'ko' | 'zh';

export type Localized<T = string> = {
  en: T;
  ja: T;
  ko: T;
  zh?: T;
};

export const getTranslation = <T = string>(
  content: Localized<T> | undefined,
  lang: Language,
  fallbackLang: Language = 'en'
): T | undefined => {
  if (!content) return undefined;
  if (lang === 'zh') {
    return content.zh ?? content[fallbackLang] ?? content.en;
  }
  return content[lang] ?? content[fallbackLang] ?? content.en;
};

export interface SpaceItem {
  id: string;
  number: string;
  title: Localized;
  subtitle: Localized;
  kicker: Localized;
  description: Localized;
  extendedDescription?: Localized;
  imageUrl: string;
  originalReferenceName: string;
  cleanedDescription: Localized;
  features: Localized[];
}

export interface TeaItem {
  id: string;
  name: Localized;
  japaneseName: string;
  type: 'gyokuro' | 'matcha' | 'sencha' | 'hojicha' | 'sparkling' | 'botanical';
  origin: string;
  temperature: string;
  infusions: number;
  tastingNotes: Localized;
  description: Localized;
  price: string;
  isSignature?: boolean;
}

export interface FinancierItem {
  id: string;
  name: Localized;
  japaneseName: string;
  description: Localized;
  pairing: Localized;
  price: string;
}

export interface ExperienceItem {
  id: string;
  type: 'drink' | 'experience' | 'learn';
  title: Localized;
  subtitle: Localized;
  duration: string;
  capacity: string;
  description: Localized;
  included: Localized[];
  price: string;
  isReservationRequired?: boolean;
}

export interface StoryItem {
  id: string;
  number: string;
  title: Localized;
  subtitle: Localized;
  readingTime: string;
  excerpt: Localized;
  content: Localized<string[]>;
  imageAlt: string;
}

export interface ReferencePhotoItem {
  id: string;
  referenceNumber: string;
  title: Localized;
  category: 'exterior' | 'interior' | 'garden' | 'craft' | 'material';
  description: Localized;
  machiyaDetail: Localized;
  imageUrl: string;
}

export interface ThingsItem {
  id: string;
  category: 'tea' | 'sparkling-tea' | 'financiers' | 'ceramics' | 'objects' | 'gifts';
  name: Localized;
  japaneseName: string;
  description: Localized;
  details: Localized;
  price: string;
  materialOrOrigin: string;
  imageUrl: string;
  inStock: boolean;
}

export interface GatheringItem {
  id: string;
  category: 'whats-on' | 'collaborations' | 'residencies' | 'open-call';
  title: Localized;
  subtitle: Localized;
  dateOrPeriod: Localized;
  hostOrCollaborator: Localized;
  description: Localized;
  bulletPoints: Localized[];
  status: 'upcoming' | 'ongoing' | 'open' | 'archived';
  actionLabel?: Localized;
}

export interface FaqItem {
  id: string;
  question: Localized;
  answer: Localized;
  category: string;
}

export interface ArchitectureBranch {
  id: string;
  title: string;
  label: Localized;
  subItems?: {
    id: string;
    title: string;
    label: Localized;
  }[];
}

