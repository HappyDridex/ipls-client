import type { RouteLocationRaw } from 'vue-router';

export type THeaderLinkKey =
    | 'about'
    | 'analytics'
    | 'art'
    | 'study'
    | 'project';

export type THeaderLink = {
    text: string;
    key: string;
    route?: RouteLocationRaw;
    items?: THeaderLink[];
};

export type THeaderLinks = THeaderLink[];
