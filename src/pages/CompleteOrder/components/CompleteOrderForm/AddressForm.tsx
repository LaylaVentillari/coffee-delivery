import { useFormContext } from "react-hook-form";
import { Input } from "../../../../components/Input/input";
import { AddressFormContainer } from "./styles";

interface ErrorsType{
  errors: {
    [key: string]: {
      message: string;
    }
  }
}


export function AddressForm(){
  
  const {register, formState} = useFormContext();
  const {errors} = formState as unknown as ErrorsType;


  return(
    <AddressFormContainer>
      <Input 
        placeholder="CEP" 
        type="number" 
        className="cep"
        {...register("cep")}
        error={errors.cep?.message}
        />
      <Input placeholder="Rua" className="street"  />
      <Input placeholder="Número" className="number" />
      <Input placeholder="Complemento" className="complement" />
      <Input placeholder="Bairro" />
      <Input placeholder="Cidade"/>
      <Input placeholder="UF" />
    </AddressFormContainer>
  )
}