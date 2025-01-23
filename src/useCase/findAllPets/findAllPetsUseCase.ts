import { IPetsRepository } from "../../repositories/IPetsRepository";

export class FindAllPetsUseCase{
    constructor(private petsRepository:IPetsRepository){}

    async execute(cnpj:string){
        let pets = await  this.petsRepository.findAll(cnpj);
        
        return pets;
    }
}