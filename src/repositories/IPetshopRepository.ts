import { PetShop } from "../types/PetShop"

export interface IPetShopRepository{
    findAll():Promise<PetShop[]>
    create(petshop:PetShop):Promise<unknown>
}