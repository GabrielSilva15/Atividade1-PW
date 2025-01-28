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
            
            let petAtualizado = await this.putPetUseCase.execute(cnpj,id,{...data, deadline_vaccination:new Date(data.deadline_vaccination)});

            return response.status(200).json(petAtualizado);
       } catch (error:any) {
            return response.status(400).json({error:error.message});
       }

    }
}
