interface ICardProps {
  imageURL: string;
  buttonURL: string;
  description: string;
  buttonText: string;
  title: string;
  zIndex?: string;
}

const Card = ({
  imageURL,
  buttonURL,
  description,
  buttonText,
  title,
}: ICardProps) => {
  return (
    <div className={`card-container`}>
      <img src={imageURL} alt="" className="rounded-lg" />
      <div>
        <p className="card-title">{title}</p>
        <p className="card-description">
          {description}
        </p>
        <button className="card-button">
          <a href={buttonURL}>{buttonText}</a>
        </button>
      </div>
    </div>
  );
};

export default Card;
