import { memo } from "react";

interface Props {
  value: number;
}

export const Small: React.FC<Props> = memo(({ value }) => {
  console.log("Me volvi a redibujar");
  return <small>{value}</small>;
});
