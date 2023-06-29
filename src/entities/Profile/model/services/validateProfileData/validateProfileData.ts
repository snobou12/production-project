import { IProfile, ValidateProfileError } from '../../types/profile';

// Можно что угодно добавить
export const validateProfileData = (profile?:IProfile) => {
    const errors:ValidateProfileError[] = [];
    if (!profile) {
        return [ValidateProfileError.INCORRECT_NO_DATA];
    }
    const {
        first, lastname, age, city, username, avatar, currency, country,
    } = profile;

    if (!first) {
        errors.push(ValidateProfileError.INCORRECT_USER_FIRSTNAME);
    }
    if (!lastname) {
        errors.push(ValidateProfileError.INCORRECT_USER_LASTNAME);
    }
    if (!age || !Number.isInteger(age)) {
        errors.push(ValidateProfileError.INCORRECT_USER_AGE);
    }
    if (!city) {
        errors.push(ValidateProfileError.INCORRECT_USER_CITY);
    }
    if (!username) {
        errors.push(ValidateProfileError.INCORRECT_USER_USERNAME);
    }

    if (!avatar) {
        errors.push(ValidateProfileError.INCORRECT_USER_AVATAR);
    }
    if (!currency) {
        errors.push(ValidateProfileError.INCORRECT_USER_CURRENCY);
    }

    if (!country) {
        errors.push(ValidateProfileError.INCORRECT_USER_COUNTRY);
    }
    return errors;
};
