import {uuid} from "uuidv4";

export class Pet{
    public id!: string
    public name!: string
    public type!: string 
    public description!: string 
    public vaccinated!: boolean 
    public deadline_vaccination!: Date
    public created_at!:Date
    
    constructor(props: Omit<Pet,"id">, id?:string){
        
        Object.assign(this,props);
        if(!id){
            this.id=uuid();
        }
    }
}