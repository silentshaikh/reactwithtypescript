import { ChangeEvent} from "react";
export interface UserInput{
    username:string;
    useremail:string;
    usernumber:string;
    gender:string;
    usermessage:string;
};
export interface User{
    name:string;
    upUser:(e:ChangeEvent<HTMLInputElement>) => void;
    error:boolean;
};
export interface Email{
    email:string;
    upEmail:(e:ChangeEvent<HTMLInputElement>) => void;
    error:boolean;
};
export interface Numbers{
    number:string;
    upNumber:(e:ChangeEvent<HTMLInputElement>) => void;
    error:boolean;
};
export interface Gender{
    gender:string;
    upGender:(e:ChangeEvent<HTMLInputElement>) => void;
    error:boolean;
};
export interface Message{
    message:string;
    upMessage:(e:ChangeEvent<HTMLTextAreaElement>) => void;
    error:boolean;
};
export interface Error{
    error:string;
}