import type { TTags } from '@/components/ui/Tag/types';

export type TArticleCardType = 'columned' | 'rowed' | 'covered';

export type TArticleBaseCardData = {
  id: number;
  title: string;
  img: string;
  description: string;
  time: string;
  tags?: TTags;
};

export type TArticleBaseCard = TArticleBaseCardData & { type?: TArticleCardType };
