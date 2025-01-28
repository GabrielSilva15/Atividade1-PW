import { PutPetUseCase } from "./putPetUseCase";
import { Request,Response } from "express";
import { putPetDTO } from "./putPetDTO";
import { petshops } from "../../repositories";
import { Pet } from "../../types/Pet";
import {z} from "zod";


export class PutPetController{
    constructor(private putPetUseCase:PutPetUseCase){}

    async handle(request:Request,response:Response){
       try {
            const {cnpj}:any= request.headers;
            const {id} = request.params;

            if(!cnpj){
                throw Error("Petshop not exists!");
            }

            putPetDTO.parse(request.body);

            const data:z.infer<typeof putPetDTO> = request.body;

            let resultado:any=petshops.filter((petshop)=>{if(petshop.cnpj === cnpj) return petshop});
            let pets:Pet[] = resultado[0].pets;
            let pet= pets.find(pet => {return pet.id === id}) as Pet;

            if(!pet){
                throw Error("Pet com esse id nao encontrado!");
            }
            
            let petAtualizado={
                id:pet.id,
                name:data.name,
                type:data.type,
                description:data.type,
                vaccinated:pet.vaccinated,
                deadline_vaccination:new Date(data.deadline_vaccination),
                created_at:pet.created_at
                };

            await this.putPetUseCase.execute(cnpj,id,petAtualizado);

            return response.status(201).json(petAtualizado);
       } catch (error:any) {
            return response.status(400).json({error:error.message});
       }

    }
}
