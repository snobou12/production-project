import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import i18n from 'shared/config/i18n/i18n';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { IProfile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<IProfile, void, ThunkConfig<string>>(
    'profile/fetchProfileData',
    async (_, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;
        try {
            const response = await extra.api.get<IProfile>('/profile');
            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue(i18n.t('Uncorrect Login Data'));
        }
    },
);
