import { Pet } from "../../types/Pet";
import { IPetsRepository } from "../IPetsRepository";
import { petshops } from "..";
import { PetShop } from "../../types/PetShop";


export class PetRepository implements IPetsRepository{
    async findAll(cnpj:string): Promise<Pet[]> {
        
        let resultado:any=petshops.filter((petshop)=>{if(petshop.cnpj === cnpj) return petshop});
        let pets = resultado[0].pets;
        return pets;
    }
    async createPet(cnpj: string, pet: any): Promise<Pet> {
        
        let resultado:any=petshops.filter((petshop)=>{if(petshop.cnpj === cnpj) return petshop});
        let pets = resultado[0].pets;
        let newPet = new Pet(pet);
        pets.push(newPet)
        return newPet;
    }

    async putPet(cnpj: string, id:string, petAtualizado: Pet): Promise<Pet> {
        let resultado:any=petshops.filter((petshop)=>{if(petshop.cnpj === cnpj) return petshop});
        let pets:Pet[] | any = resultado[0].pets;
        let getPet:Pet[] = pets.filter((pet:Pet) =>pet.id===id);
        let index = pets.indexOf(getPet[0]);
        
        if(index > -1){
            pets.splice(index,1,petAtualizado);
        }

        return petAtualizado;
    }

    async patchPetVaccinated(cnpj: string, id: string, petAtualizado: Pet): Promise<Pet> {
        let resultado:any=petshops.filter((petshop)=>{if(petshop.cnpj === cnpj) return petshop});
        let pets:Pet[] | any = resultado[0].pets;
        let getPet:Pet[] = pets.filter((pet:Pet) =>pet.id===id);
        let index = pets.indexOf(getPet[0]);
        
        if(index > -1){
            pets.splice(index,1,petAtualizado);
        }

        return petAtualizado;
    }

    async deletePet(cnpj: string, id: string): Promise<Pet[]> {
        let resultado:any=petshops.filter((petshop)=>{if(petshop.cnpj === cnpj) return petshop});
        let pets:Pet[] | any = resultado[0].pets;
        let getPet:Pet[] = pets.filter((pet:Pet) =>pet.id===id);
        let index = pets.indexOf(getPet[0]);
        if(index > -1){
            pets.splice(index,1);
        }

        return pets;
    }
}