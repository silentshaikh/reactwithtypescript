import { ChangeEvent } from "react";
export interface InputType{
    inputValue:string;
    setValue:(e:string) => void;
    submitTodo:(e:ChangeEvent<HTMLFormElement>) => void;
};
export interface TodoList{
     id:number;
    todo:string;
    checked:boolean;
};
export interface Todo{
    todoList:TodoList[];
    deleteTodo: (e:number) => void;
    editTodo:(e:number) => void;
    taskComplete:(e:string) => void;
};
export interface List{
    ids:number;
    todo:string;
    checked:boolean;
    deleteTodo:(e:number) => void;
    editTodo:(e:number) => void;
    taskComplete:(e:string) => void;
}
