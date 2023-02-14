import { localeSelectors, ILocale } from './locales';
export interface IConfig {
    seed: number;
    locale: localeSelectors;
}
export declare const Config: IConfig;
export declare const getLocale: ILocale;
