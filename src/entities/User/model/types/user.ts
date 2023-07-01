export interface IUser{
    id: string;
    username:string;
}

export interface UserSchema{
    authData?:IUser,
    // нельзя менять
    _inited:boolean;
}
