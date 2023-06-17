import { useRef } from "react";

export const FocusScreen = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => !!inputRef.current && inputRef.current.select();
  return (
    <>
      <h1 className="mt-5">Focus Screen</h1>
      <hr />
      <input
        className="form-control"
        type="text"
        placeholder="Ingrese su nombre"
        ref={inputRef}
      />
      <button className="btn btn-success mt-2" onClick={handleClick}>
        Set Focus
      </button>
    </>
  );
};
