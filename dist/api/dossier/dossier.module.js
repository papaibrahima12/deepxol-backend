"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DossierModule = void 0;
const common_1 = require("@nestjs/common");
const dossier_service_1 = require("./dossier.service");
const dossier_controller_1 = require("./dossier.controller");
const file_service_1 = require("../../shared/services/file.service");
const mongoose_1 = require("@nestjs/mongoose");
const types_1 = require("./types");
let DossierModule = class DossierModule {
};
DossierModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'Dossier', schema: types_1.DossierSchema }]),
        ],
        controllers: [dossier_controller_1.DossierController],
        providers: [dossier_service_1.DossierService, file_service_1.FileUploadService]
    })
], DossierModule);
exports.DossierModule = DossierModule;
//# sourceMappingURL=dossier.module.js.map