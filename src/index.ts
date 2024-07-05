import {IResponseDB, Item} from "./interfaces/response-db";

document.addEventListener("DOMContentLoaded", async () => {
    const data: Item[] = await getResponse;

    data.map ((character: Item) => {
        console.log(character);

        const li = document.createElement("li") as HTMLLIElement;



    //     const li = document.createElement("li") as HTMLLIElement;
    // const name = document.createElement("h4") as HTMLHeadingElement;
    // const image = document.createElement("img") as HTMLImageElement;
    // const status= document.createElement("p") as HTMLParagraphElement;
    // const specie= document.createElement("p") as HTMLParagraphElement;
    // const gender= document.createElement("p") as HTMLParagraphElement;
    // const location= document.createElement("p") as HTMLParagraphElement;
    // const origin= document.createElement("p") as HTMLParagraphElement;
    })
});




async function getResponse (): Promise<Item[]> {
    const response = await fetch ("https://dragonball-api.com/api/characters");
    let data: IResponseDB = await response.json();

    return data.items;
}