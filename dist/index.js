var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const ul = document.querySelector(".item-list");
document.addEventListener("DOMContentLoaded", () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield getResponse();
    data.map((character) => {
        console.log(character);
        const li = document.createElement("li");
        const name = document.createElement("h4");
        const image = document.createElement("img");
        const ki = document.createElement("p");
        const maxKi = document.createElement("p");
        const race = document.createElement("p");
        const gender = document.createElement("p");
        const affiliation = document.createElement("p");
        const deleteAt = document.createElement("deleteAt");
        name.innerText = character.name;
        image.src = character.image;
        image.className = "image";
        ki.innerText = `Ki: ${character.ki}`;
        maxKi.innerText = `Max Ki: ${character.maxKi}`;
        race.innerText = `Race: ${character.race}`;
        gender.innerText = `Gender: ${character.gender}`;
        affiliation.innerText = `Affiliation: ${character.affiliation}`;
        deleteAt.type = "checkbox";
        li.appendChild(name);
        li.appendChild(image);
        li.appendChild(ki);
        li.appendChild(maxKi);
        li.appendChild(race);
        li.appendChild(gender);
        li.appendChild(affiliation);
        li.appendChild(deleteAt);
        ul.appendChild(li);
    });
}));
function getResponse() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("https://dragonball-api.com/api/characters?limit=58");
        let data = yield response.json();
        return data.items;
    });
}
export {};
