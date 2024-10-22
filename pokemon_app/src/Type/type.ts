import { ChangeEvent, FormEvent } from "react";

export interface PokeCards{
    pokeCards:Pokaemon[];
    value:string
}
export interface Results{
    name:string;
    url:string;
}
export interface InputType{
    value:string;
    setValue:(e:string) => void;
    // onHandleInput:(e:ChangeEvent<HTMLInputElement>) => void;
   
};
export interface ApiType{
    count:number;
    next:string;
    previous:string | null;
    results: Results[]
} 

//pokaemon cards interface
// Interface for each ability
interface Ability {
    ability: {
        name: string;
        url: string;
    };
    is_hidden: boolean;
    slot: number;
}

// Interface for the 'cries' property
interface Cries {
    latest: string;
    legacy: string;
}

// Interface for each form
interface Form {
    name: string;
    url: string;
}

// Interface for game indices
interface GameIndex {
    game_index: number;
    version: {
        name: string;
        url: string;
    };
}

// Interface for each move
interface Move {
    move: {
        name: string;
        url: string;
    };
    version_group_details: Array<{
        level_learned_at: number;
        move_learn_method: {
            name: string;
            url: string;
        };
        version_group: {
            name: string;
            url: string;
        };
    }>;
}

// Interface for species
interface Species {
    name: string;
    url: string;
}

// Interface for sprites
interface Sprites {
    back_default: string;
    back_female: string | null;
    back_shiny: string;
    back_shiny_female: string | null;
    front_default: string;
    front_female: string | null;
    front_shiny: string;
    front_shiny_female: string | null;
    other: {
        dream_world: {
            front_default: string;
            front_female: string | null;
        };
        "official-artwork": {
            front_default: string;
        };
    };
}

// Interface for each stat
interface Stat {
    base_stat: number;
    effort: number;
    stat: {
        name: string;
        url: string;
    };
}

// Interface for each type
interface Type{
    slot:number;
    type:{
        name:string;
        url:string;
    }
}

// Main Pokémon interface
export interface Pokaemon {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    is_default: boolean;
    order: number;
    weight: number;
    abilities: Ability[];
    cries: Cries;
    forms: Form[];
    game_indices: GameIndex[];
    held_items: any[]; // Adjust according to actual structure if needed
    location_area_encounters: string;
    moves: Move[];
    past_abilities: any[]; // Adjust according to actual structure if needed
    past_types: any[]; // Adjust according to actual structure if needed
    species: Species;
    sprites: Sprites;
    stats: Stat[];
    types: Type[];
}
