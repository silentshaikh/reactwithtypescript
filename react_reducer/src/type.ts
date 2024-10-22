import { Dispatch } from "react";

export interface States{
    count:number;
};
export interface Action{
    type:string;
    payload?:any;
};
export interface ContextType{
    state:States;
    dispatch:Dispatch<Action>;
};
export interface ContextChild{
    children:JSX.Element;
};