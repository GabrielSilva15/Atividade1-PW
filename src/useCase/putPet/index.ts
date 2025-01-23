import { PutPetController } from "./putPetController";
import { PutPetUseCase } from "./putPetUseCase";
import { PetRepository } from "../../repositories/implementations/PetRepository";

const petRepository = new PetRepository();
const putPetUseCase = new PutPetUseCase(petRepository);
const putPetController = new PutPetController(putPetUseCase);

export {putPetUseCase,putPetController};