import { petshops } from "../../repositories";
import { Pet } from "../../types/Pet";
import { DeletePetUseCase } from "./deletePetUseCase";
import { Request,Response } from "express";

export class DeletePetController{
    constructor(private deletePetUseCase:DeletePetUseCase){}

    async handle(request:Request,response:Response){

        try {
            const {cnpj}:any = request.headers;

            if(!cnpj){
                throw Error("Cnpj is empty!");
            }

            const {id} = request.params;

            await this.deletePetUseCase.execute(cnpj,id);

            return response.status(201).json("Pet deletado com sucesso");

        } catch (error:any) {
            return response.status(404).json({error:error.message})
        }

    }
}