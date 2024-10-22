import { Dispatch } from "react";

export interface ContentType{
    value:string;
    setValue:(e:string) =>void; 
    list:ProfileUser[];
    setList:Dispatch<React.SetStateAction<ProfileUser[]>>;
};
export interface ProfileUser{
    id:number;
    name:string;
}
export interface contentProvider{
    children:JSX.Element;
};