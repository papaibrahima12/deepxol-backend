/* eslint-disable prettier/prettier */
/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */
import {Injectable, NotFoundException} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdateDossierDto } from './dto/update-dossier.dto';
import { DossierDocument } from './types';
import {Dossier} from "./entities/dossier.entity";

@Injectable()
export class DossierService {
  
  constructor(
    @InjectModel('Dossier')
    private readonly dossierModel: Model<DossierDocument>,
  ){}
  
  async create(payload: any): Promise<DossierDocument>{
      const newDossier = new this.dossierModel(payload);
      newDossier.isActive = true;
      return await newDossier.save();
  }
  async update(id: string, updateDossierDto: Dossier):Promise<DossierDocument> {
    const existingStudent = await this.dossierModel.findByIdAndUpdate(id, updateDossierDto, { new: true });
    console.log(existingStudent);
    if (!existingStudent) {
      throw new NotFoundException(`Student #${id} not found`);
    }
    return existingStudent;
  }

  async findAll(): Promise<DossierDocument[]> {
    return this.dossierModel.find({isActive: true}).exec()
  }

  async getStatistic(): Promise<any>{
    const dossiers = await this.dossierModel
      .find({ isActive: true })
      .exec();
      const countFibrillation = await this.dossierModel.count({ diagnostic: 'OUI' });
      const countNotFibrillation = await this.dossierModel.count({ diagnostic: 'NON' });
      let total = countFibrillation + countNotFibrillation
      return { total: total, fibrillation: countFibrillation, notFibrillation: countNotFibrillation }
  }

  async findOne(id: string) :Promise<DossierDocument> {
    const existingStudent = await this.dossierModel.findById(id).exec();
    if (!existingStudent) {
      throw new NotFoundException(`Student #${id} not found`);
    }
    return existingStudent;
  }

  async findDossierNumber(number: string) {
    return this.dossierModel.findOne({dossierNumber: number});
  }

 async remove(id: string):Promise<DossierDocument> {
    const deletedStudent = this.dossierModel.findByIdAndRemove(id);
   if (!deletedStudent) {
     throw new NotFoundException(`Student #${id} not found`);
   }
   return deletedStudent;
  }
}
