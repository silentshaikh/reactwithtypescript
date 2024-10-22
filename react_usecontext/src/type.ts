import { JSXSource } from "react/jsx-dev-runtime";

export interface PropDrilling{
    num:string[];
}
export interface UserData{
    name:string;
    email:string;
}
export interface Contexts{
    children:JSX.Element;
    userData:UserData;
}