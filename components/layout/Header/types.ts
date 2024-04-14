export type THeaderLinkKey = 'about' | 'analytics' | 'art' | 'study' | 'project';

export type THeaderLink = {
  text: string;
  key: THeaderLinkKey;
  pathName?: string;
  items?: THeaderLink[];
};

export type THeaderLinks = THeaderLink[];
