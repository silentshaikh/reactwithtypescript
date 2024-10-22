export let pokeApi = `https://pokeapi.co/api/v2/pokemon/`;
export interface PokeType{
    hpPoke:number;
    namePoke:string;
    imgPoke:string;
    attckPoke:number;
    defencePoke:number;
    speedPoke:number;
    typePoke:Types[];
};
interface Types{
    slot:number;
    type:{
        name:string;
        url:string;
    }
}
export interface InputType{
    value:string;
    setValue:(e:string) => void;
   
};