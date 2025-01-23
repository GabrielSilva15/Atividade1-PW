import { IPetsRepository } from "../../repositories/IPetsRepository";

export class DeletePetUseCase{
    constructor(private petsRepository:IPetsRepository){}

    async execute(cnpj:string,id:string){
        let deletePet = await this.petsRepository.deletePet(cnpj,id);
        return deletePet;
    }
}