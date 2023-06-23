interface Props {
  increment: (value: number) => void;
}

export const ShowIncrement: React.FC<Props> = ({ increment }) => {
  console.log("Me volvi a generar :(");
  return (
    <button className="btn btn-primary" onClick={() => increment(5)}>
      Incrementar
    </button>
  );
};
