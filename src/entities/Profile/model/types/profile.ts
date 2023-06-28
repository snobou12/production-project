import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

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
}
