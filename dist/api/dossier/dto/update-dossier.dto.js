"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDossierDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_dossier_dto_1 = require("./create-dossier.dto");
class UpdateDossierDto extends (0, mapped_types_1.PartialType)(create_dossier_dto_1.CreateDossierDto) {
}
exports.UpdateDossierDto = UpdateDossierDto;
//# sourceMappingURL=update-dossier.dto.js.map