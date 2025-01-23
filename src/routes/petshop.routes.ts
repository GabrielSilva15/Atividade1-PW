import { Router } from "express";
import { findAllPetShopsController } from "../useCase/findAllPetShops";
import { createPetshopController } from "../useCase/createPetshop";
import { findAllPetsController } from "../useCase/findAllPets";
import { checkExistUserAccount } from "../middlewares/checkExistUserAccount";
import { createPetController } from "../useCase/createPet";
import { putPetController } from "../useCase/putPet";
import { patchPetVaccinatedController } from "../useCase/patchPetVaccinated";
import { deletePetController } from "../useCase/deletePet";

const router = Router();

//Get
router.get("/petshops",(request,response)=>findAllPetShopsController.handle(request,response));
router.get("/pets",checkExistUserAccount,(request,response)=>findAllPetsController.handle(request,response));

//Post
router.post("/petshops",(request,response)=>createPetshopController.handle(request,response));
router.post("/pets",checkExistUserAccount,(request,response)=>createPetController.handle(request,response));

//PUT 
router.put("/pets/:id",checkExistUserAccount,(request,response)=>putPetController.handle(request,response));

//Patch
router.patch("/pets/:id/vaccinated",checkExistUserAccount,(request,response)=>patchPetVaccinatedController.handle(request,response));

//Delete
router.delete("/pets/:id",checkExistUserAccount,(request,response)=>deletePetController.handle(request,response));



export default router;