export interface Product {
  id: string;
  title: string;
  titleEn: string;
  category: 'ebook' | 'video_pack' | 'app';
  categoryLabel: string;
  categoryLabelEn: string;
  price: string;
  oldPrice?: string;
  url: string;
  isFeatured?: boolean;
  isBestSeller?: boolean;
  isNew?: boolean;
  description: string;
  descriptionEn: string;
  features: string[];
  featuresEn: string[];
  icon: string; // Lucide icon name
  badge?: string;
  badgeEn?: string;
}

export interface RoadmapItem {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  icon: string;
  tag: string;
  tagEn: string;
  status: 'active' | 'in_progress' | 'planned';
}

export interface FaqItem {
  id: string;
  question: string;
  questionEn: string;
  answer: string;
  answerEn: string;
}
