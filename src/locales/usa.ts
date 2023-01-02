import { ILocale } from '.';

export const usa: ILocale = {
	code: 'usa',
	languageCode: 'en-us',
	timezones: [],
	zipcodeFormats: ['99999', '99999-9999'],
	states: [
		{
			name: 'Alabama',
			code: 'AL',
			counties: [
				{
					name: 'Jefferson County',
					cities: [
						{ 
							name: 'Adamsville', neighbourhoods: [

							] 
						},
						{
							name: 'Bessemer', neighbourhoods: [

							]
						}
					]
				},
				{
					name: 'Mobile County',
					cities: [
                        
					]
				}
			]
		}
	]
};
