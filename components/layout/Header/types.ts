export type THeaderLink = {
  text: string;
  key: string;
  pathName?: string;
  items?: THeaderLink[];
};

export type THeaderLinks = THeaderLink[];
