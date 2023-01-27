import { S3 } from 'aws-sdk';
export declare class FileUploadService {
    upload(file: any, originalname: any): Promise<void>;
    uploadS3(file: any, bucket: any, name: any): Promise<unknown>;
    getS3(): S3;
}
