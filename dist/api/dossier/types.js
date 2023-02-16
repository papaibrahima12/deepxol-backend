"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DossierSchema = void 0;
const mongoose_1 = require("mongoose");
exports.DossierSchema = new mongoose_1.Schema({
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
    tach_arter: {
        type: String,
        default: "NON"
    },
    tach_arter_value: String,
    chads_vasc: String,
    isActive: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});
//# sourceMappingURL=types.js.map