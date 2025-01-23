import { IPetsRepository } from "../../repositories/IPetsRepository";
import { Pet } from "../../types/Pet";

export class CreatePetUseCase{
    constructor(private petsRepository:IPetsRepository){}

    async execute(cnpj:string,data:any){
        const newPet = {
            id:data.id,
            name:data.name,
            type:data.type,
            description:data.description,
            vaccinated:data.vaccinated,
            deadline_vaccination: data.deadline_vaccination,
            created_at:data.created_at
        }

        
        let updatedPet = await this.petsRepository.createPet(cnpj,newPet);
        return updatedPet;
    }
}