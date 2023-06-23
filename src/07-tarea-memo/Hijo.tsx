import { memo } from "react";

interface Props {
    numero: number;
    incrementar: (num: number) => void
}

export const Hijo: React.FC<Props> = memo(({ numero, incrementar }) => {
  console.log("  Me volví a generar :(  ");

  return (
    <button
      className="btn btn-primary me-2"
      onClick={() => incrementar(numero)}
    >
      {numero}
    </button>
  );
});
