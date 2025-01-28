import { IPetShopRepository } from "../IPetshopRepository";
import { PetShop } from "../../types/PetShop";
import { petshops } from "..";


export class PetShopRepository implements IPetShopRepository{


    async  findAll(){
        return petshops;
    }

    async create(petshop:any): Promise<PetShop> {
        let newPetshop = new PetShop(petshop);
        petshops.push(newPetshop);

        return newPetshop;
    }
}