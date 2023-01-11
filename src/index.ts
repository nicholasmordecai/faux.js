import { Config } from './configuration';
import Generators from './generators';
import Core from './core';
import API from './api';
import { locales as Locales } from './locales';
 
export default {
    API,
    Config,
    Core,
    Generators,
    Locales,
}

export const Tseudo = {
    person: Generators.identification.person,
    uuid: Generators.identification.uuid,
    address: Generators.geographic.address,
    map: Generators.geographic.map,
    bank: Generators.finance.bank,
    number: Generators.math.number,
    array: Generators.util.array,
    string: Generators.util.string
}