import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { IProfile, ValidateProfileError } from '../../types/profile';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { validateProfileData } from '../validateProfileData/validateProfileData';

export const updateProfileData = createAsyncThunk<IProfile, string | undefined, ThunkConfig<ValidateProfileError[]>>(
    'profile/updateProfileData',
    async (profileId, thunkApi) => {
        const { extra, rejectWithValue, getState } = thunkApi;
        if (!profileId) {
            return rejectWithValue([ValidateProfileError.INCORRECT_NO_DATA]);
        }
        try {
            // внутри async thunk getState, извне - useSelector()
            const formData = getProfileForm(getState());

            const errors = validateProfileData(formData);
            if (errors.length) {
                return rejectWithValue(errors);
            }
            const response = await extra.api.put<IProfile>(`/profile/${profileId}`, formData);
            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
        }
    },
);
