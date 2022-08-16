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
          <h2 className="font-black text-xl lg:text-2xl xl:text-3xl">
            {" "}
            {headerTwo}{" "}
          </h2>
          <h3 className="font-semibold text-lg lg:text-xl xl:text-2xl">
            {headerThree}
          </h3>
        </div>

        <button>
          <a href={buttonURL}>
            <span className="flex justify-between">
              <span className="text-red-500 font-bold text-sm md:text-base lg:text-lg xl:text-xl ">
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
