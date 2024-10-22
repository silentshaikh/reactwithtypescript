import song from "../public/3DBX7QOEzWPNcDhqXInk6GBEvhK.jpg";
import peter from "../public/6UTZmeQcxbtW32MyR5nKIx7ID4f.jpg";
import ala from "../public/eLFfl7vS8dkeG1hKp5mwbm37V83.jpg";
import bear from "../public/kPzcvxBwt7kEISB9O4jJEuBn72t.jpg";
import froz from "../public/mINJaa34MtknCYl5AjtNJzWj8cD.jpg";
import tres from "../public/zMKatZ0c0NCoKzfizaCzVUcbKMf.jpg";
export interface MoviesList {
    img:string,
    name:string,
    lang:string,
    gen:string,
}
const MovieList:MoviesList[] = [
    {
        img:ala,
        name:"Aladdin",
        lang:"English",
        gen:"Animation,Family,Adventure,Fantasy,Romance",
    },
    {
        img:bear,
        name:"We Bare Bears: The Movie",
        lang:"English",
        gen:"Animation,Family,Adventure,Fantasy,Romance",
    },
    {
        img:froz,
        name:"Frozen II",
        lang:"English",
        gen:"Animation,Family,Adventure,Fantasy,Romance",
    },
    {
        img:peter,
        name:"Peter Pan",
        lang:"English",
        gen:"Animation,Family,Adventure,Fantasy,Romance",
    },
    {
        img:song,
        name:"Song of the Sea",
        lang:"English",
        gen:"Animation,Family,Adventure,Fantasy,Romance",
    },
    {
        img:tres,
        name:"Treasure Planet",
        lang:"English",
        gen:"Animation,Family,Adventure,Fantasy,Romance",
    },
];
export {MovieList};