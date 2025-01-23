import { CreatePetshopController } from "./createPetshopController";
import { CreatePetshopUseCase } from "./createPetshopUseCase";
import { PetShopRepository } from "../../repositories/implementations/PetShopRepository";

const petShopRepository = new PetShopRepository();
const createPetshopUseCase = new CreatePetshopUseCase(petShopRepository);
const createPetshopController = new CreatePetshopController(createPetshopUseCase);

export {createPetshopUseCase,createPetshopController};