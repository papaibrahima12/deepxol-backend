import { DossierService } from './dossier.service';
import { Dossier } from "./entities/dossier.entity";
export declare class DossierController {
    private readonly dossierService;
    constructor(dossierService: DossierService);
    create(payload: any, res: any, electro: any): Promise<any>;
    findAll(): Promise<import("./types").DossierDocument[]>;
    getStatistic(res: any): Promise<any>;
    findOne(response: any, id: string): Promise<any>;
    findDossier(number: string): Promise<Dossier & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(response: any, id: string, updateDossierDto: Dossier): Promise<any>;
    remove(response: any, id: string): Promise<any>;
}
