import { petshops } from "../../repositories";
import { FindAllPetsUseCase } from "./findAllPetsUseCase";
import { Request,Response } from "express";


export class FindAllPetsController{
    constructor(private findAllPetsUseCase:FindAllPetsUseCase){}

    async handle(request:Request,response:Response){
        try {
            
            const {cnpj}:any = request.headers;
            
            let getPets:any= await this.findAllPetsUseCase.execute(cnpj);


            return response.status(200).json(getPets);

        } catch (error:any) {
            return response.status(400).json({error:error.message});
        }

    }
}