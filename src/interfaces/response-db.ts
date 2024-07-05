// To parse this data:
//
//   import { Convert, IResponseDB } from "./file";
//
//   const iResponseDB = Convert.toIResponseDB(json);

export interface IResponseDB {
    items: Item[];
    meta:  Meta;
    links: Links;
}

export interface Item {
    id:          number;
    name:        string;
    ki:          string;
    maxKi:       string;
    race:        string;
    gender:      Gender;
    description: string;
    image:       string;
    affiliation: Affiliation;
    deletedAt:   null;
}

export enum Affiliation {
    ArmyOfFrieza = "Army of Frieza",
    Freelancer = "Freelancer",
    ZFighter = "Z Fighter",
}

export enum Gender {
    Female = "Female",
    Male = "Male",
}

export interface Links {
    first:    string;
    previous: string;
    next:     string;
    last:     string;
}

export interface Meta {
    totalItems:   number;
    itemCount:    number;
    itemsPerPage: number;
    totalPages:   number;
    currentPage:  number;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toIResponseDB(json: string): IResponseDB {
        return JSON.parse(json);
    }

    public static iResponseDBToJson(value: IResponseDB): string {
        return JSON.stringify(value);
    }
}
