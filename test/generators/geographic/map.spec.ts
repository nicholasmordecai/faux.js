import { expect } from "chai";
import { long, lat, latLong } from '../../../src/generators/geographic/map';
import { countDecimals } from '../../utils/internal';

describe('Map module', () => {
    it('Should create a random long', () => {
        const lng = long();
        expect(typeof lng).to.be.equal('number');
        expect(lng).to.be.within(-180, 180);
        console.log(lng);
        expect(countDecimals(lng)).to.be.lessThanOrEqual(9);
    });

    it('Should create a random lat', () => {
        const lt = lat();
        expect(typeof lt).to.be.equal('number');
        expect(lt).to.be.within(-180, 180);
        expect(countDecimals(lt)).to.be.lessThanOrEqual(9);
    });

    it('Should create a lat long object', () => {
        const latLng = latLong();
        expect(latLng).to.haveOwnProperty('lat');
        expect(latLng).to.haveOwnProperty('long');

        expect(latLng.lat).to.be.within(-180, 180);
        expect(countDecimals(latLng.lat)).to.be.lessThanOrEqual(9);

        expect(latLng.long).to.be.within(-180, 180);
        expect(countDecimals(latLng.long)).to.be.lessThanOrEqual(9);
    });
});
