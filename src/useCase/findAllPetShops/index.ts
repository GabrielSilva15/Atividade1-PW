import { FindAllPetShopsController } from "./findAllPetShopsController";
import { FindAllPetShopsUseCase } from "./findAllPetShopsUseCase";
import { PetShopRepository } from "../../repositories/implementations/PetShopRepository"; 

const petShopRepository = new PetShopRepository();
const findAllPetShopsUseCase = new FindAllPetShopsUseCase(petShopRepository);
const findAllPetShopsController = new FindAllPetShopsController(findAllPetShopsUseCase);

export {findAllPetShopsUseCase,findAllPetShopsController};