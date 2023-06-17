interface Props {
  image: string;
  name: string;
}

export const Character: React.FC<Props> = ({ image, name }) => {
  return (
    <div className="card" style={{ width: "20rem" }}>
      <img className="card-img-top" src={image} alt={name} />
      <div className="card-body">
        <h3 className="card-title">{name}</h3>
      </div>
    </div>
  );
};
