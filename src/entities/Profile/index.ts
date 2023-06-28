export { IProfile, ProfileSchema } from './model/types/profile';
export { profileReducer, profileActions } from './model/slice/profileSlice';
export { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData';

export { default as ProfileCard } from './ui/ProfileCard/ProfileCard';

export { getProfileData } from './model/selectors/getProfileData/getProfileData';
export { getProfileLoading } from './model/selectors/getProfileLoading/getProfileLoading';
export { getProfileError } from './model/selectors/getProfileError/getProfileError';
