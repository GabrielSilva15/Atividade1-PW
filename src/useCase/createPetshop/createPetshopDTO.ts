import { z } from "zod";

//Função para validar o telefone - ter que arrumar
const validateCNPJ = (phone:string) => {
    const phoneValidate = /^(\+\d{1,2}\s?)?(\()?\d{2,4}(\))?\s?(\d{4,5}(-|\s)?\d{4})$/;
    const isValid = phoneValidate.test(phone);
    return isValid;
}




export const CreatePetshopDTO = z.object({

    name:z.string({
        required_error:"Name is required",
        invalid_type_error:"Name must be a string",
    }).min(5).max(255).refine(data => !!data, { message: 'The name is mandatory' }),


    cnpj: z
    .string({
      required_error: 'CPF/CNPJ é obrigatório.',
    })
    .refine((doc) => {
      const replacedDoc = doc.replace(/\D/g, '');
      return replacedDoc.length <= 14;
    }, 'CNPJ deve conter no máximo 14 caracteres.')
    .refine((doc) => {
      const replacedDoc = doc.replace(/\D/g, '');
      return !!Number(replacedDoc);
    }, 'CPF/CNPJ deve conter apenas números.'),

    
})