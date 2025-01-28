import { Pet } from "../../types/Pet";
import { IPetsRepository } from "../IPetsRepository";
import { petshops } from "..";
import { PetShop } from "../../types/PetShop";
import { prisma } from "../../services/prisma";


export class PetRepository implements IPetsRepository{
    async findAll(cnpj:string): Promise<Pet[]> {
        let resultado = await prisma.pet.findMany({
            where:{
                petshopCnpj:cnpj
            }
        })

        let pets:Pet[] = [];

        resultado.forEach(pet=>{

            pets.push({
                id:pet.id,
                name:pet.name,
                type:pet.type,
                description:pet.description,
                vaccinated:pet.vaccinated,
                deadline_vaccination:pet.deadline_vaccination,
                created_at:pet.createAt
            })
        })

        
        // let resultado:any=petshops.filter((petshop)=>{if(petshop.cnpj === cnpj) return petshop});
        // let pets = resultado.pets;
        return pets;
    }


    async createPet(cnpj: string, pet: any): Promise<Pet> {

        let resultado = await prisma.pet.create({
            data:{...pet,
                petshopCnpj:cnpj
            }
        })

        let newPet:Pet = {
            id:resultado.id,
                name:resultado.name,
                type:resultado.type,
                description:resultado.description,
                vaccinated:resultado.vaccinated,
                deadline_vaccination:resultado.deadline_vaccination,
                created_at:resultado.createAt
        }

        return newPet;
    }

    async putPet(cnpj: string, id:string, petAtualizado: Pet): Promise<Pet> {
       
        let resultado =  await prisma.pet.update({
            where:{
                id:id,
                petshopCnpj:cnpj
            }, 
            data:{
                ...petAtualizado
            }
        })

        return {
            id:resultado.id,
            name:resultado.name,
            type:resultado.type,
            description:resultado.description,
            vaccinated:resultado.vaccinated,
            deadline_vaccination:resultado.deadline_vaccination,
            created_at:resultado.createAt
        };
    }

    async patchPetVaccinated(cnpj: string, id: string, petAtualizado: Pet): Promise<Pet> {
       
        

        let resultado =  await prisma.pet.update({
            where:{
                id:id,
                petshopCnpj:cnpj
            }, 
            data:{
                ...petAtualizado
            }
        })

        return {
            id:resultado.id,
            name:resultado.name,
            type:resultado.type,
            description:resultado.description,
            vaccinated:resultado.vaccinated,
            deadline_vaccination:resultado.deadline_vaccination,
            created_at:resultado.createAt
        };;
    }

    async deletePet(cnpj: string, id: string): Promise<void> {
        
        let pet = await prisma.pet.delete({
            where:{
                id:id,
                petshopCnpj:cnpj
            }
        })

        return;

    }
}