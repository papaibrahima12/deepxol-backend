"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DossierController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const dossier_service_1 = require("./dossier.service");
const update_dossier_dto_1 = require("./dto/update-dossier.dto");
const multer_1 = require("multer");
let DossierController = class DossierController {
    constructor(dossierService) {
        this.dossierService = dossierService;
    }
    async create(payload, res, electro) {
        try {
            if (electro) {
                let { originalname } = electro;
                payload.electro = originalname;
                let fileNameSplit = originalname.split(".");
                if (payload.diagnostic == "OUI") {
                    payload.dossierNumber = '1-' + fileNameSplit[0];
                }
                else
                    payload.dossierNumber = '0-' + fileNameSplit[0];
            }
            else {
                const today = new Date();
                const random = Math.floor(Math.random() * (99999));
                const year = today.getFullYear();
                payload.dossierNumber = 'D-' + year + '-' + random;
                payload.electro = 'default_file.xml';
            }
            const dossier = await this.dossierService.create(payload);
            return res.status(common_1.HttpStatus.CREATED).json(dossier);
        }
        catch (error) {
            throw new common_1.HttpException(error.response, error.status);
        }
    }
    async findAll() {
        return await this.dossierService.findAll();
    }
    async getStatistic(res) {
        const payload = await this.dossierService.getStatistic();
        return res.status(common_1.HttpStatus.CREATED).json(payload);
    }
    findOne(id) {
        return this.dossierService.findOne(id);
    }
    findDossier(number) {
        return this.dossierService.findDossierNumber(number);
    }
    async update(id, updateDossierDto) {
        return await this.dossierService.update(id, updateDossierDto);
    }
    remove(id) {
        return this.dossierService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('electro', {
        storage: (0, multer_1.diskStorage)({
            destination: './files/electrocardiogrammes',
            filename: (_req, electro, cb) => {
                const today = new Date();
                const random = Math.floor(Math.random() * (99999));
                const year = today.getFullYear();
                let dossierNumber = 'D-' + year + '-' + random;
                const fileNameSplit = electro.originalname.split(".");
                const fileExt = fileNameSplit[fileNameSplit.length - 1];
                electro.originalname = `${dossierNumber}.${fileExt}`;
                cb(null, `${dossierNumber}.${fileExt}`);
            }
        })
    })),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], DossierController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DossierController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('statistics'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DossierController.prototype, "getStatistic", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DossierController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('number/:number'),
    __param(0, (0, common_1.Param)('number')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DossierController.prototype, "findDossier", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_dossier_dto_1.UpdateDossierDto]),
    __metadata("design:returntype", Promise)
], DossierController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DossierController.prototype, "remove", null);
DossierController = __decorate([
    (0, common_1.Controller)('api/dossier'),
    __metadata("design:paramtypes", [dossier_service_1.DossierService])
], DossierController);
exports.DossierController = DossierController;
function getRndInteger(arg0, arg1) {
    throw new Error('Function not implemented.');
}
//# sourceMappingURL=dossier.controller.js.map