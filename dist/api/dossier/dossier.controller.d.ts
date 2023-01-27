import { FileUploadService } from 'src/shared/services/file.service';
import { DossierService } from './dossier.service';
import { UpdateDossierDto } from './dto/update-dossier.dto';
export declare class DossierController {
    private readonly dossierService;
    private fileUpload;
    constructor(dossierService: DossierService, fileUpload: FileUploadService);
    create(payload: any, res: any, electro: any): Promise<any>;
    findAll(): Promise<import("./types").DossierDocument[]>;
    getStatistic(res: any): Promise<any>;
    findOne(id: string): string;
    update(id: string, updateDossierDto: UpdateDossierDto): string;
    remove(id: string): string;
}
