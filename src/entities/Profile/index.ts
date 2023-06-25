export { IProfile, ProfileSchema } from './model/types/profile';
export { profileReducer, profileActions } from './model/slice/profileSlice';
export { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData';

export { default as ProfileCard } from './ui/ProfileCard/ProfileCard';
