import { expect } from "chai";
import { long, lat, LatLong } from './../../../src/generators/geographic/map';
import { countDecimals } from './../../utils/internal';

//! Sometimes failing due to decimal length being 8 not 9 (due to last decimal being a 0 I think)

describe('Address module', () => {
    it('Should create a random long', () => {
        const lng = long();
        expect(typeof lng).to.be.equal('number');
        expect(lng).to.be.within(-180, 180);
        expect(countDecimals(lng)).to.be.equal(9);

    });

    it('Should create a random lat', () => {
        const lt = lat();
        expect(typeof lt).to.be.equal('number');
        expect(lt).to.be.within(-180, 180);
        expect(countDecimals(lt)).to.be.equal(9);
    });

    it('Should create a lat long object', () => {
        const latLng = LatLong();
        expect(latLng).to.haveOwnProperty('lat');
        expect(latLng).to.haveOwnProperty('long');

        expect(latLng.lat).to.be.within(-180, 180);
        expect(countDecimals(latLng.lat)).to.be.equal(9);

        expect(latLng.long).to.be.within(-180, 180);
        expect(countDecimals(latLng.long)).to.be.equal(9);
    })
});
