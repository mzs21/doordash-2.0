interface IServiceProps {
  imageURL: string;
  alt: string;
  headerTwo: string;
  headerThree: string;
  SVGElement: React.SVGProps<SVGSVGElement>;
  buttonHeadline: string;
  buttonURL: string;
}

const Service = ({
  imageURL,
  alt,
  headerTwo,
  headerThree,
  SVGElement,
  buttonHeadline,
  buttonURL,
}: IServiceProps) => {
  return (
    <div className="">
      <div>
        <img src={imageURL} alt={alt} />
      </div>
      <div>
        <div>
          <h2 className=""> {headerTwo} </h2>
          <h3 className="">{headerThree}</h3>
        </div>
        <button>
          <a href={buttonURL}>
            <span>{buttonHeadline}</span>
            <>{SVGElement}</>
          </a>
        </button>
      </div>
    </div>
  );
};

export default Service;
