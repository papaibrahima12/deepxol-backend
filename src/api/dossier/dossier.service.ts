/* eslint-disable prettier/prettier */
/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdateDossierDto } from './dto/update-dossier.dto';
import { DossierDocument } from './types';

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
  async update(id: string, updateDossierDto: UpdateDossierDto):Promise<DossierDocument> {
    return this.dossierModel.findByIdAndUpdate(id,updateDossierDto)
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

  async findOne(id: string) {
    return this.dossierModel.findOne({_id: id});
  }

  remove(id: number) {
    return this.dossierModel.findByIdAndRemove(id);
  }

  
}
