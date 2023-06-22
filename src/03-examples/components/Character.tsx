import { useLayoutEffect, useRef, useState } from "react";

interface Props {
  image: string;
  name: string;
}

export const Character: React.FC<Props> = ({ image, name }) => {
  const hRef = useRef<HTMLHeadingElement>(null);
  const [hSize, setHSize] = useState({width: 0, height: 0});
  useLayoutEffect(() => {
    const {width, height} = hRef.current.getBoundingClientRect();
    setHSize({width, height})
  }, [name]);
  return (
    <>
      <div className="card" style={{ width: "20rem" }}>
        <img className="card-img-top" src={image} alt={name} />
        <div className="card-body">
          <h3 ref={hRef} className="card-title">
            {name}
          </h3>
        </div>
      </div>
      <code className="mt-5">{JSON.stringify(hSize)}</code>
    </>
  );
};
