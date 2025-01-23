import { IPetShopRepository } from "../../repositories/IPetshopRepository";
import { PetShop } from "../../types/PetShop";

export class CreatePetshopUseCase{
    constructor(private petShopRepository:IPetShopRepository){}

    async execute(data:any){

        const newPetshop = {
                id:data.id,
                name:data.name,
                cnpj:data.cnpj,
                pets:data.pets 
        }
        
        let createPetshop = await this.petShopRepository.create(newPetshop);
        
        return createPetshop;
    }
}