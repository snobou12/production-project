import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

export enum ValidateProfileError{
	INCORRECT_USER_DATA='INCORRECT_USER_DATA',
	INCORRECT_USER_FIRSTNAME='INCORRECT_USER_FIRSTNAME',
	INCORRECT_USER_LASTNAME='INCORRECT_USER_LASTNAME',
	INCORRECT_USER_AGE='INCORRECT_USER_AGE',
	INCORRECT_USER_CITY='INCORRECT_USER_CITY',
	INCORRECT_USER_USERNAME='INCORRECT_USER_USERNAME',
	INCORRECT_USER_AVATAR='INCORRECT_USER_AVATAR',
	INCORRECT_USER_CURRENCY='INCORRECT_USER_CURRENCY',
	INCORRECT_USER_COUNTRY='INCORRECT_USER_COUNTRY',
	INCORRECT_NO_DATA='INCORRECT_NO_DATA',
	SERVER_ERROR='SERVER_ERROR'

}

export interface IProfile{
    first?:string;
	lastname?:string;
	age?: number;
	currency?: Currency;
	country?: Country;
	city?: string;
	username?: string;
	avatar?: string;
}

export interface ProfileSchema{
    data?:IProfile,
	form?:IProfile,
    isLoading:boolean;
    error?:string;
    readonly:boolean;
	validateErrors?:ValidateProfileError[]
}
