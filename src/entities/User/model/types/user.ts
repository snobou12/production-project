export interface IUser{
    id: string;
    username:string;
    avatar?:string;
    role?:string;
}

export interface UserSchema{
    authData?:IUser,
    // нельзя менять
    _inited:boolean;
}
