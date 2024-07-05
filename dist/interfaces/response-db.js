// To parse this data:
//
//   import { Convert, IResponseDB } from "./file";
//
//   const iResponseDB = Convert.toIResponseDB(json);
export var Affiliation;
(function (Affiliation) {
    Affiliation["ArmyOfFrieza"] = "Army of Frieza";
    Affiliation["Freelancer"] = "Freelancer";
    Affiliation["ZFighter"] = "Z Fighter";
})(Affiliation || (Affiliation = {}));
export var Gender;
(function (Gender) {
    Gender["Female"] = "Female";
    Gender["Male"] = "Male";
})(Gender || (Gender = {}));
// Converts JSON strings to/from your types
export class Convert {
    static toIResponseDB(json) {
        return JSON.parse(json);
    }
    static iResponseDBToJson(value) {
        return JSON.stringify(value);
    }
}
