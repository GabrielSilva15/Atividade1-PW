import { PetRepository } from "../../repositories/implementations/PetRepository";
import { FindAllPetsController } from "./findAllPetsController";
import { FindAllPetsUseCase } from "./findAllPetsUseCase";

const petRepository = new PetRepository();
const findAllPetsUseCase = new FindAllPetsUseCase(petRepository)
const findAllPetsController = new FindAllPetsController(findAllPetsUseCase);

export {findAllPetsUseCase,findAllPetsController};