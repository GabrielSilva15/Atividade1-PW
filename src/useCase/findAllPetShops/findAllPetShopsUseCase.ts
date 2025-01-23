import { IPetShopRepository } from "../../repositories/IPetshopRepository";

export class FindAllPetShopsUseCase{
    constructor(private petShopRepository:IPetShopRepository){}

    async execute(){
        const petshops = await this.petShopRepository.findAll();
        return petshops;
    }
}