import { IPetsRepository } from "../../repositories/IPetsRepository";
import { Pet } from "../../types/Pet";

export class PutPetUseCase{
    constructor(private petsRepository:IPetsRepository){}

    async execute(cnpj:string,id:string,petAtualizado:Pet){
        let atualizaPet = await this.petsRepository.putPet(cnpj,id,petAtualizado);
        return atualizaPet;
    }
}