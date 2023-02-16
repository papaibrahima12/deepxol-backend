/* eslint-disable prettier/prettier */
/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete, Get,
  HttpException,
  HttpStatus,
  Param, Post, Put,
  Res,
  UploadedFile, UseInterceptors
} from '@nestjs/common';
import {FileInterceptor, FilesInterceptor} from '@nestjs/platform-express';
import {DossierService} from './dossier.service';
import {UpdateDossierDto} from './dto/update-dossier.dto';
import {diskStorage} from 'multer'

@Controller('api/dossier')
export class DossierController {

  constructor(private readonly dossierService: DossierService) {}
    //     const today = new Date();
    //     const random = Math.floor(Math.random() * (99999 - 0) ) + 0;
    //     const year = today.getFullYear();
    //     let dossierNumber = 'D-'+year+'-'+random

  @Post()
  @UseInterceptors(FileInterceptor('electro', {
    storage: diskStorage({
      destination: './files/electrocardiogrammes',
      filename: (_req, electro, cb ) => {
        const today = new Date();
        const random = Math.floor(Math.random() * (99999));
        const year = today.getFullYear();
        let dossierNumber = 'D-'+year+'-'+random
        const fileNameSplit = electro.originalname.split(".")
        const fileExt = fileNameSplit[fileNameSplit.length - 1]
        electro.originalname = `${dossierNumber}.${fileExt}`
        cb(null, `${dossierNumber}.${fileExt}`)
      }
    })
  }))
  async create(@Body() payload: any, @Res() res, @UploadedFile() electro) {
    try {
      if (electro) {
          let { originalname } = electro;
          payload.electro = originalname;
          let fileNameSplit = originalname.split(".")
          if(payload.diagnostic == "OUI"){
            payload.dossierNumber = '1-'+fileNameSplit[0]
          }else
            payload.dossierNumber = '0-'+ fileNameSplit[0]
      } else {
        const today = new Date();
        const random = Math.floor(Math.random() * (99999));
        const year = today.getFullYear();
        payload.dossierNumber = 'D-' + year + '-' + random
        payload.electro = 'default_file.xml';
      }
      const dossier = await this.dossierService.create(payload);
      return res.status(HttpStatus.CREATED).json(dossier);
    } catch (error) {
      throw new HttpException(error.response, error.status);
    }
  }

  @Get()
  async findAll() {
    return await this.dossierService.findAll();
  }

  @Get('statistics')
  async getStatistic(@Res() res) {
    const payload = await this.dossierService.getStatistic();
    return res.status(HttpStatus.CREATED).json(payload);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dossierService.findOne(id);
  }

  @Get('number/:number')
  findDossier(@Param('number') number: string) {
    return this.dossierService.findDossierNumber(number);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateDossierDto: UpdateDossierDto) {
    return await this.dossierService.update(id, updateDossierDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dossierService.remove(+id);
  }
}
function getRndInteger(arg0: number, arg1: number) {
  throw new Error('Function not implemented.');
}

