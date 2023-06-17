import { ChangeEvent, useState } from "react";

export const useForm = (initialForm = {} ) => {
  const [formState, setFormState] = useState(initialForm);

  const handleInputOnChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setFormState({ ...formState, [name]: value });
  };

  const handleButtonReset = () => setFormState(initialForm);

  return {
    ...formState,
    formState,
    handleInputOnChange,
    handleButtonReset,
  }
}
