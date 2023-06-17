import { useForm } from "../hooks/useForm";

export const FormCustomHook = () => {
  const { username, email, password, handleInputOnChange, handleButtonReset } = useForm({
    username: "",
    email: "",
    password: "",
  });

  return (
    <>
      <h1 className="mt-5">Formulario con custom Hook</h1>
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

      <input
        className="form-control mt-2"
        type="password"
        placeholder="Contraseña"
        name="password"
        value={password}
        onChange={handleInputOnChange}
      />

      <button className="btn btn-primary mt-2" onClick={handleButtonReset}>Borrar</button>
    </>
  );
};
