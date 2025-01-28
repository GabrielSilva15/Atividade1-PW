import { IPetShopRepository } from "../IPetshopRepository";
import { PetShop } from "../../types/PetShop";
import { petshops } from "..";
import { prisma } from "../../services/prisma";


export class PetShopRepository implements IPetShopRepository{


    async  findAll(){
        let resultado = await prisma.petshop.findMany({
            include:{
                pets:true
            }
        });
        let petshops:PetShop[]=[];
        resultado.forEach((result:any )=>{
            petshops.push(result);
        })
        
        return petshops;
    }

    async create(petshop:PetShop): Promise<unknown> {
        
        let newPetshop = await prisma.petshop.create({
            data:{
                id:petshop.id,
                name:petshop.name,
                cnpj:petshop.cnpj
            },
            include:{
                pets:true
            }
        });

        return {
            id:newPetshop.id,
            name:newPetshop.name,
            cnpj:newPetshop.cnpj,
            pets:newPetshop.pets,
            created_at:newPetshop.createAt
        };
    }
}