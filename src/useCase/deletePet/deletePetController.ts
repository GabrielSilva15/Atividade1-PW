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

            let resultado:any=petshops.filter((petshop)=>{if(petshop.cnpj === cnpj) return petshop});

            if(resultado.let === 0){
                throw Error("Petshop not exists!");
            }
            
            let pets:Pet[]= resultado[0].pets;
            let getPet= pets.find((pet) => {return pet.id === id}) as Pet;

            if(!getPet){
                throw Error("Pet com esse id nao encontrado!");
            }

            await this.deletePetUseCase.execute(cnpj,id);

            return response.status(201).json(pets);

        } catch (error:any) {
            return response.status(404).json({error:error.message})
        }

    }
}