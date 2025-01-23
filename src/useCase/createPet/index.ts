import { CreatePetController } from "./createPetController";
import { CreatePetUseCase } from "./createPetUseCase";
import { PetRepository } from "../../repositories/implementations/PetRepository";

const petRepository = new PetRepository();
const createPetUseCase = new CreatePetUseCase(petRepository);
const createPetController = new CreatePetController(createPetUseCase);

export {createPetUseCase,createPetController};