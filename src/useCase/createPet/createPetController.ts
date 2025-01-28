import { CreatePetUseCase } from "./createPetUseCase";
import { Request,Response } from "express";
import { createPetDTO } from "./createPetDTO";
import {z} from "zod"
import { petshops } from "../../repositories";
import { uuid } from "uuidv4";
import { Pet } from "../../types/Pet";


export class CreatePetController{
    constructor(private createPetUseCase:CreatePetUseCase){}

    async handle(request:Request,response:Response){
        try {
            const {cnpj}:any = request.headers;
            createPetDTO.parse(request.body);

            const data:z.infer<typeof createPetDTO> = request.body;

            if(!cnpj){
                throw Error("Cnpj passado nao corresponde a nenhum petshop no sistema!");
            }

            console.log(data);
            
            
            let newPet =await this.createPetUseCase.execute(cnpj,{...data,vaccinated:false,deadline_vaccination:new Date(data.deadline_vaccination)});  
            
            

            return response.status(201).json({
                id:newPet.id,
                name:newPet.name,
                type:newPet.type,
                description:newPet.description,
                vaccinated:newPet.vaccinated,
                deadline_vaccination:newPet.deadline_vaccination,
                created_at:newPet.created_at,
            })

        } catch (error:any) {
            return response.status(400).json({error:error.message})
        }

    }
}