import { Model } from 'mongoose';
import { DossierDocument } from './types';
import { Dossier } from "./entities/dossier.entity";
export declare class DossierService {
    private readonly dossierModel;
    constructor(dossierModel: Model<DossierDocument>);
    create(payload: any): Promise<DossierDocument>;
    update(id: string, updateDossierDto: Dossier): Promise<DossierDocument>;
    findAll(): Promise<DossierDocument[]>;
    getStatistic(): Promise<any>;
    findOne(id: string): Promise<DossierDocument>;
    findDossierNumber(number: string): Promise<Dossier & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    remove(id: string): Promise<DossierDocument>;
}
