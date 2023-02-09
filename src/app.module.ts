import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DossierModule } from './api/dossier/dossier.module';
import { FileUploadService } from './shared/services/file.service';
import { MongooseModule } from '@nestjs/mongoose';

// mongodb+srv://falilou:FmaYFsXYhVelD1GK@clusterird.orpdhel.mongodb.net/deepxol?retryWrites=true&w=majority
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/'),
    DossierModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
