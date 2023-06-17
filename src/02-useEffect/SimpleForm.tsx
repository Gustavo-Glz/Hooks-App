import { ChangeEvent, useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "Gustavo",
    email: "gustavo@gmail.com",
  });

  const { username, email } = formState;

  const handleInputOnChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setFormState({ ...formState, [name]: value });
  };

  useEffect(() => {
    // console.log("useEffect called");
  }, []);

  useEffect(() => {
    // console.log("formState changed");
  }, [formState]);

  useEffect(() => {
    // console.log("email changed");
  }, [email]);


  return (
    <>
      <h1 className="mt-5">Formulario simple</h1>
      <hr />
      <input
        className="form-control mt-2"
        type="text"
        placeholder="Username"
        name="username"
        value={username}
        onChange={handleInputOnChange}
      />
      <input
        className="form-control mt-2"
        type="email"
        placeholder="ejemplo@correo.com"
        name="email"
        value={email}
        onChange={handleInputOnChange}
      />
      {
        (username === "Gustavo1") ? <Message/> : null
      }
    </>
  );
};
