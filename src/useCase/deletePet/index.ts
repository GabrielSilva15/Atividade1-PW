import { PetRepository } from "../../repositories/implementations/PetRepository";
import { DeletePetController } from "./deletePetController";
import { DeletePetUseCase } from "./deletePetUseCase";

const petRepository = new PetRepository();
const deletePetUseCase = new DeletePetUseCase(petRepository);
const deletePetController = new DeletePetController(deletePetUseCase);

export {deletePetUseCase,deletePetController};