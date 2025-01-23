import { Request,Response,NextFunction } from "express";


export function checkExistUserAccount(request:Request,response:Response,next:NextFunction){
    try {
        
        const {cnpj} =  request.headers;
        
        if(!cnpj){
            throw Error("User not exists");
        }

        next();
    } catch (error:any) {
        return response.status(404).json({error:error.message});
    }
}