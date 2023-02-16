import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DossierModule } from './api/dossier/dossier.module';
import { FileUploadService } from './shared/services/file.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import {UserModule} from "./users/users.module";


// mongodb+srv://falilou:FmaYFsXYhVelD1GK@clusterird.orpdhel.mongodb.net/deepxol?retryWrites=true&w=majority
@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://pisow:deepxolUcadSn@deepxol-database.fm2sitd.mongodb.net/?retryWrites=true&w=majority'),
    DossierModule,
    AuthModule,
    UserModule
  ],
  controllers: [AppController,],
  providers: [AppService],
})
export class AppModule {}
