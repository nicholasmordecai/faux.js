import { locales, localeSelectors, ILocale } from './locales';

export interface IConfig {
    seed: number;
    locale: localeSelectors;
}

export const Config: IConfig = {
    seed: Date.now(),
    locale: 'gb'
}

export let getLocale: ILocale = locales[Config.locale];