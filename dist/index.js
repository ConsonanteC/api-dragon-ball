var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
document.addEventListener("DOMContentLoaded", () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield getResponse;
    data.map((character) => {
        console.log(character);
        const li = document.createElement("li");
        //     const li = document.createElement("li") as HTMLLIElement;
        // const name = document.createElement("h4") as HTMLHeadingElement;
        // const image = document.createElement("img") as HTMLImageElement;
        // const status= document.createElement("p") as HTMLParagraphElement;
        // const specie= document.createElement("p") as HTMLParagraphElement;
        // const gender= document.createElement("p") as HTMLParagraphElement;
        // const location= document.createElement("p") as HTMLParagraphElement;
        // const origin= document.createElement("p") as HTMLParagraphElement;
    });
}));
function getResponse() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("https://dragonball-api.com/api/characters");
        let data = yield response.json();
        return data.items;
    });
}
export {};
