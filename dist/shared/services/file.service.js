"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUploadService = void 0;
const aws_sdk_1 = require("aws-sdk");
const common_1 = require("@nestjs/common");
let FileUploadService = class FileUploadService {
    async upload(file, originalname) {
        const bucketS3 = process.env.AWS_S3_BUCKET_NAME;
        await this.uploadS3(file.buffer, bucketS3, originalname);
    }
    async uploadS3(file, bucket, name) {
        try {
            const s3 = this.getS3();
            const params = {
                Bucket: bucket,
                Key: String(name),
                Body: file,
            };
            return new Promise((resolve, reject) => {
                s3.upload(params, (err, data) => {
                    if (err) {
                        common_1.Logger.error(err);
                        reject(err.message);
                    }
                    resolve(data);
                    return name;
                });
            });
        }
        catch (error) {
            console.log(error);
        }
    }
    getS3() {
        return new aws_sdk_1.S3({
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        });
    }
};
FileUploadService = __decorate([
    (0, common_1.Injectable)()
], FileUploadService);
exports.FileUploadService = FileUploadService;
//# sourceMappingURL=file.service.js.map