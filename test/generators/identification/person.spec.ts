import { expect } from 'chai';
import { GB } from './../../../src/locales/gb';
import { firstName, nickname, gender, lastName, middleNames, fullName } from './../../../src/generators/identification/person';

describe('Person Generator', () => {
    it('Should select a random male first name', () => {
        const fName = firstName({ gender: 'Male'});
        expect(fName).to.be.string;
        expect(fName).to.be.oneOf(GB.names.male);
    });

    it('Should select a random female first name', () => {
        const fName = firstName({ gender: 'Female'});
        expect(fName).to.be.string;
        expect(fName).to.be.oneOf(GB.names.female);
    });

    it('Should select a random name, male or female', () => {
        const fName = firstName();
        expect(fName).to.satisfy(() => {
            return GB.names.female.includes(fName) || GB.names.male.includes(fName)
        });
    });

    it('Should pick a random nickname', () => {
        const nName = nickname();
        expect(nName).to.be.string;
        expect(nName).to.be.oneOf(GB.names.nicknames);
    });

    it('Should pick a random gender', () => {
        const gndr = gender();
        expect(gndr).to.be.string;
        expect(gndr).satisfies(() => {
            return gndr === 'Male' || gndr === 'Female'
        });
    });

    it('Should pick a random lastName', () => {
        const lName = lastName();
        expect(lName).to.be.string;
        expect(lName).to.be.oneOf(GB.names.lastNames);
    });

    it('Should pick a random lastName', () => {
        const lName = lastName();
        expect(lName).to.be.string;
        expect(lName).to.be.oneOf(GB.names.lastNames);
    });

    it('Should pick some middle names', () => {
        const mNames = middleNames();
        expect(mNames.length).to.be.within(0, 2);

        for(let mName of mNames) {
            expect(mName).to.be.string;
            expect(mName).to.be.oneOf(GB.names.middleNames);
        }
    });

    it('Should generate a full person name object', () => {
        const personName = fullName();
        expect(personName).to.haveOwnProperty('firstName');
        expect(personName).to.haveOwnProperty('lastName');
        expect(personName).to.haveOwnProperty('middleNames');
        expect(personName).to.haveOwnProperty('nickName');
        expect(personName).to.haveOwnProperty('gender');
    });

    it('Should generate a male full person name object', () => {
        const personName = fullName({gender: 'Male'});
        expect(personName).to.haveOwnProperty('firstName');
        expect(personName).to.haveOwnProperty('lastName');
        expect(personName).to.haveOwnProperty('middleNames');
        expect(personName).to.haveOwnProperty('nickName');
        expect(personName).to.haveOwnProperty('gender');
        expect(personName.firstName).to.be.oneOf(GB.names.male);
    });

    it('Should generate a female full person name object', () => {
        const personName = fullName({gender: 'Female'});
        expect(personName).to.haveOwnProperty('firstName');
        expect(personName).to.haveOwnProperty('lastName');
        expect(personName).to.haveOwnProperty('middleNames');
        expect(personName).to.haveOwnProperty('nickName');
        expect(personName).to.haveOwnProperty('gender');
        expect(personName.firstName).to.be.oneOf(GB.names.female);
    });
});