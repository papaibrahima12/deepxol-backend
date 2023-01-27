import { Module } from '@nestjs/common';
import { DossierService } from './dossier.service';
import { DossierController } from './dossier.controller';
import { FileUploadService } from 'src/shared/services/file.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DossierSchema } from './types';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Dossier', schema: DossierSchema }]),
  ],
  
  controllers: [DossierController],
  providers: [DossierService, FileUploadService]
})
export class DossierModule {}
