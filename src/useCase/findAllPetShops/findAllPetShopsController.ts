import { FindAllPetShopsUseCase } from "./findAllPetShopsUseCase";
import {Request,Response} from "express"


export class FindAllPetShopsController{
    constructor(private findAllPetShopsUseCase:FindAllPetShopsUseCase){}

    async handle(request:Request,response:Response){
        try {
            let petshops = await this.findAllPetShopsUseCase.execute();

            return response.status(200).json(petshops);
        } catch (error:any) {
            return response.status(400).json({error:error.message})
        }
    }
}