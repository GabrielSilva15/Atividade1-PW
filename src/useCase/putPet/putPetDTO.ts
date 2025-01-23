import {z} from "zod";

export const putPetDTO = z.object({
    name:z.string({
        required_error:"Name is required",
        invalid_type_error:"Name must be a string",
    }),
    type:z.string({
        required_error:"type is required",
        invalid_type_error:"type must be a string",
    }),
    description:z.string({
        required_error:"description is required",
        invalid_type_error:"description must be a string",
    }),
    deadline_vaccination:z.string({
        required_error:"deadline vaccination is required",
        invalid_type_error:"deadline vaccination must be a string",
    }),
})

