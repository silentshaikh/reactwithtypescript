import { ChangeEvent, Dispatch, FormEvent, SetStateAction } from "react";

export interface NoteList{
    id:number;
    title:string
    notes:string;
    date:string;
};
export interface ContextTypes{
    userSearch:string;
    userTitle:string;
    userNotes:string;
    searchNotes:NoteList[];
    handleValue:(e:ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => void;
    notes:NoteList[];
    setNotes:Dispatch<React.SetStateAction<NoteList[]>>;
    onSubmit:(e:FormEvent<HTMLFormElement>) => void;
    onDelete:(e:number) => void;
    onEdit:(e:number) => void;
};
export interface ContType{
    children:JSX.Element;
};
export interface UserInput{
    userTitle:string,
        userSearch:string,
        userNotes:string
};