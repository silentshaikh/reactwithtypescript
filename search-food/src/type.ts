export interface ContextTypes {
    food:FoodList[];
    mapFood:string[];
    filterFood :(e:string) => void;
}
export interface FoodList {
  headOne: string;
  headTwo: string;
  para: string;
  img: string;
}
export interface ContextsChild{
    children:JSX.Element;
}