import { Model } from 'mongoose';
import { UpdateDossierDto } from './dto/update-dossier.dto';
import { DossierDocument } from './types';
export declare class DossierService {
    private readonly dossierModel;
    constructor(dossierModel: Model<DossierDocument>);
    create(payload: any): Promise<DossierDocument>;
    findAll(): Promise<DossierDocument[]>;
    getStatistic(): Promise<any>;
    findOne(id: number): string;
    update(id: number, updateDossierDto: UpdateDossierDto): string;
    remove(id: number): string;
}
