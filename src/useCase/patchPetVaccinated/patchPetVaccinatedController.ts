import { petshops } from "../../repositories";
import { Pet } from "../../types/Pet";
import { PatchPetVaccinatedUseCase } from "./patchPetVaccinatedUseCase";
import { Request,Response } from "express";

export class PatchPetVaccinatedController{
    constructor(private patchPetVaccinatedUseCase:PatchPetVaccinatedUseCase){}

    async handle(request:Request,response:Response){
        try {
            const {cnpj}:any = request.headers;
            const {id} = request.params;

            if(!cnpj){
                throw Error("Petshop not exists!");
            }

            const data = request.body;
            data.vaccinated = true;
            let petAtualizado =await this.patchPetVaccinatedUseCase.execute(cnpj,id,data);

            return response.status(201).json(petAtualizado)

        } catch (error:any) {
            return response.status(400).json({error:error.message})
        }

    }
}