import { CreatePetshopUseCase } from "./createPetshopUseCase";
import { CreatePetshopDTO } from "./createPetshopDTO";
import { Request,Response } from "express";
import {z} from "zod"
import { petshops } from "../../repositories";


export class CreatePetshopController{
    constructor(private createPetshopUseCase:CreatePetshopUseCase){}

    async handle(request:Request,response:Response){
        try {
            CreatePetshopDTO.parse(request.body);

            const data:z.infer<typeof CreatePetshopDTO> = request.body;

            let verifyCnpj = petshops.filter((petshop)=>petshop.cnpj === data.cnpj);
            
            if(verifyCnpj.length !== 0){
                throw Error("Cnpj ta no sistema");
            }

            
            const petshopCreated = await this.createPetshopUseCase.execute({...data});

            return response.status(201).json({
                id:petshopCreated.id,
                name:petshopCreated.name,
                cnpj:petshopCreated.cnpj,
                pets:petshopCreated.pets            
            });

        } catch (error:any) {
            return response.status(400).json({error:error.message});
        }
    }

}