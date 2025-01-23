import { PatchPetVaccinatedController } from "./patchPetVaccinatedController";
import { PatchPetVaccinatedUseCase } from "./patchPetVaccinatedUseCase";
import { PetRepository } from "../../repositories/implementations/PetRepository";

const petRepository = new PetRepository();
const patchPetVaccinatedUseCase = new PatchPetVaccinatedUseCase(petRepository);
const patchPetVaccinatedController = new PatchPetVaccinatedController(patchPetVaccinatedUseCase);

export {patchPetVaccinatedUseCase,patchPetVaccinatedController};