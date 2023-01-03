import { expect } from "chai";
import { postcode, city, county, houseNameNumber, street, address, addressString } from "../../../src/functions/geographic/address";
import { GB } from "../../../src/locales/gb";

describe('Address module', () => {
    it('Should create a random postcode', () => {
        const result = postcode();
        expect(typeof result).to.be.equal('string');
    });

    it('Should create a city', () => {
        const result = city();
        expect(typeof result).to.be.equal('string');
        expect(GB.cities).to.include(result);
    });

    it('Should create a county', () => {
        const result = county();
        expect(typeof result).to.be.equal('string');
        expect(GB.counties).to.include(result);
    });

    it('Should create a street name', () => {
        const result = street();
        expect(typeof result).to.be.equal('string');
    });

    it('Should create a house name or number', () => {
        const result = houseNameNumber();
        expect(typeof result).to.be.oneOf(['string', 'number']);
    });

    it('Should create a complete address as an object', () => {
        const result = address();
        expect(typeof result).to.be.equal('object');
        expect(result).to.haveOwnProperty('country');
        expect(result).to.haveOwnProperty('county');
        expect(result).to.haveOwnProperty('city');
        expect(result).to.haveOwnProperty('street');
        expect(result).to.haveOwnProperty('houseNumber');
        expect(result).to.haveOwnProperty('postcode');
    });

    it('Should create a complete address as a string', () => {
        const result = addressString();
        expect(typeof result).to.be.equal('string');
    });
});
