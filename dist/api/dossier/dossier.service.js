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
exports.DossierService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let DossierService = class DossierService {
    constructor(dossierModel) {
        this.dossierModel = dossierModel;
    }
    async create(payload) {
        const newDossier = new this.dossierModel(payload);
        newDossier.isActive = true;
        return await newDossier.save();
    }
    async update(id, updateDossierDto) {
        const existingStudent = await this.dossierModel.findByIdAndUpdate(id, updateDossierDto, { new: true });
        console.log(existingStudent);
        if (!existingStudent) {
            throw new common_1.NotFoundException(`Student #${id} not found`);
        }
        return existingStudent;
    }
    async findAll() {
        return this.dossierModel.find({ isActive: true }).exec();
    }
    async getStatistic() {
        const dossiers = await this.dossierModel
            .find({ isActive: true })
            .exec();
        const countFibrillation = await this.dossierModel.count({ diagnostic: 'OUI' });
        const countNotFibrillation = await this.dossierModel.count({ diagnostic: 'NON' });
        let total = countFibrillation + countNotFibrillation;
        return { total: total, fibrillation: countFibrillation, notFibrillation: countNotFibrillation };
    }
    async findOne(id) {
        const existingStudent = await this.dossierModel.findById(id).exec();
        if (!existingStudent) {
            throw new common_1.NotFoundException(`Student #${id} not found`);
        }
        return existingStudent;
    }
    async findDossierNumber(number) {
        return this.dossierModel.findOne({ dossierNumber: number });
    }
    async remove(id) {
        const deletedStudent = this.dossierModel.findByIdAndRemove(id);
        if (!deletedStudent) {
            throw new common_1.NotFoundException(`Student #${id} not found`);
        }
        return deletedStudent;
    }
};
DossierService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Dossier')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], DossierService);
exports.DossierService = DossierService;
//# sourceMappingURL=dossier.service.js.map