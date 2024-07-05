import {IResponseDB, Item} from "./interfaces/response-db";

const ul = document.querySelector(".ul") as HTMLUListElement;

document.addEventListener("DOMContentLoaded", async () => {
    const data: Item[] = await getResponse;

    data.map ((character: Item) => {
        console.log(character);

        const li = document.createElement("li") as HTMLLIElement;
        const name = document.createElement("h4") as HTMLHeadingElement; 
        const image = document.createElement("img") as HTMLImageElement;
        const ki = document.createElement("p") as HTMLParagraphElement;
        const maxKi = document.createElement("p") as HTMLParagraphElement;
        const race = document.createElement("p") as HTMLParagraphElement;
        const gender = document.createElement("p") as HTMLParagraphElement;
        const description = document.createElement("p") as HTMLParagraphElement;
        const affiliation = document.createElement("p") as HTMLParagraphElement;
        const deleteAt = document.createElement("deleteAt") as HTMLInputElement;

        name.innerText = character.name;
        image.src = character.image;
        image.className = "image";
        ki.innerText = `Ki: ${character.ki}`;
        maxKi.innerText = `Max Ki: ${character.maxKi}`;
        race.innerText = `Race: ${character.race}`;
        gender.innerText = `Gender: ${character.gender}`;
        description.innerText = `Description: ${character.description}`;
        affiliation.innerText = `Affiliation: ${character.affiliation}`;
        deleteAt.type = "checkbox";

        li.appendChild(name);
        li.appendChild(image);
        li.appendChild(ki);
        li.appendChild(maxKi);
        li.appendChild(race);
        li.appendChild(gender);
        li.appendChild(description);
        li.appendChild(affiliation);
        li.appendChild(deleteAt);

        ul.appendChild(li);
    })
});

async function getResponse (): Promise<Item[]> {
    const response = await fetch ("https://dragonball-api.com/api/characters");
    let data: IResponseDB = await response.json();

    return data.items;
}