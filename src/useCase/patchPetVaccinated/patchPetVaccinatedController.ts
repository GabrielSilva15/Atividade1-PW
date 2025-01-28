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

            let resultado:any=petshops.filter((petshop)=>{if(petshop.cnpj === cnpj) return petshop});
            let pets:Pet[] = resultado[0].pets;
            let atualizaPet= pets.find((pet:any) => {return pet.id === id}) as Pet;

            if(!atualizaPet){
                throw Error("Pet com esse id nao encontrado!");
            }

            atualizaPet.vaccinated= true;
        
            await this.patchPetVaccinatedUseCase.execute(cnpj,id,atualizaPet);

            return response.status(201).json(atualizaPet)

        } catch (error:any) {
            return response.status(400).json({error:error.message})
        }

    }
}