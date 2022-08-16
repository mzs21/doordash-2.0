interface IServiceProps {
  imageURL: string;
  alt: string;
  headerTwo: string;
  headerThree: string;
  SVGElement: React.SVGProps<SVGSVGElement>;
  buttonHeadline: string;
  buttonURL: string;
  scaleClass?: string;
}

const Service = ({
  imageURL,
  alt,
  headerTwo,
  headerThree,
  SVGElement,
  buttonHeadline,
  buttonURL,
  scaleClass,
}: IServiceProps) => {
  return (
    <div className="service-container">
      <img
        src={imageURL}
        alt={alt}
        className={`place-self-center ${scaleClass} sm:scale-100`}
      />

      <div className="xl:text-center">
        <div>
          <h2 className="font-black text-xl"> {headerTwo} </h2>
          <h3 className="font-semibold text-lg">{headerThree}</h3>
        </div>

        <button>
          <a href={buttonURL}>
            <span className="flex justify-between">
              <span className="text-red-500 font-bold text-sm sm:text-base ">
                {buttonHeadline}{" "}
              </span>
              <>{SVGElement}</>
            </span>
          </a>
        </button>
      </div>
    </div>
  );
};

export default Service;
