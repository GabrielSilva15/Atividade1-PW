import { Pet } from "../types/Pet"


export interface IPetsRepository{
    findAll(cnpj:string):Promise<Pet[]>
    createPet(cnpj:string,pet:Pet):Promise<Pet>
    putPet(cnpj:string,id:string,petAtualizado:Pet):Promise<Pet>
    patchPetVaccinated(cnpj:string,id:string,petAtualizado:Pet):Promise<Pet>
    deletePet(cnpj:string,id:string):Promise<Pet[]>
}