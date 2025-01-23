import {uuid} from "uuidv4";
import { Pet } from "./Pet";

export class PetShop{
    public id!: string
    public name!: string
    public cnpj!: string 
    public pets!: Pet[]

    
    constructor(props: Omit<PetShop,"id">, id?:string){

        Object.assign(this,props);
        if(!id){
            this.id=uuid();
        }
    }
}