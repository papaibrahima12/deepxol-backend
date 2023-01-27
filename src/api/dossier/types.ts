import { Document, Schema } from "mongoose";

export interface IDossier{
    dossierNumber: string,
    fullName: string,
    phone: string,
    pathologie: string,
    address: string,
    electro: string,
    diagnostic: string,
    comment: string,
    gender: string,
    race: string,
    antecedant: [string],
    implantationOlder: string,
    fibrilationLoad: string,
    age: string,
    isActive: boolean,
    insuffisanceCardiaque: string

}
export type DossierDocument = IDossier & Document

export const DossierSchema = new Schema<IDossier>({
    dossierNumber: String,
    fullName: String,
    phone: String,
    pathologie: String,
    address: String,
    electro: String,
    diagnostic: {
        type: String,
        default: "NON"
    },
    comment: String,
    gender: String,
    race: String,
    antecedant: [String],
    implantationOlder: String,
    fibrilationLoad: String,
    age: String,
    insuffisanceCardiaque: String,
    isActive: {
        type: Boolean,
        default: true
    }
},
{ timestamps: true },
)