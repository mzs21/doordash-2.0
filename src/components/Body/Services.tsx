import Service from "./Service";

// Scoot
const ScootSVG =
  "https://cdn.doordash.com/media/consumer/home/landing/new/ScootScoot.svg";
const ScootSVGTitle = "Become a Dasher";
const ScootSVGDescription =
  "As a delivery driver, you'll make reliable money—working anytime, anywhere.";
const ScootSVGButtonHeadline = "Start earning";
const ScootButtonURL =
  "https://dasher.doordash.com/en-us?utm_source=dx_signup_midtile_cx_home&internal-referrer=legacy-signup";

// StoreFront
const StoreFrontSVG =
  "https://cdn.doordash.com/media/consumer/home/landing/new/Storefront.svg";
const StoreFrontSVGTitle = "Become a Partner";
const StoreFrontSVGDescription =
  "Grow your business and reach new customers by partnering with us.";
const StoreFrontSVGButtonHeadline = "Sign up your store";
const StoreFrontButtonURL = "https://get.doordash.com/en-us";

// Phone
const PhoneSVG =
  "https://cdn.doordash.com/media/consumer/home/landing/new/iphone.svg";
const PhoneSVGTitle = "Try the App";
const PhoneSVGDescription =
  "Experience the best your neighborhood has to offer, all in one app.";
const PhoneSVGButtonHeadline = "Get the app";
const PhoneButtonURL =
  "https://apps.apple.com/app/id719972451?mt=8&pt=9654801&ct=Mobile+Splash+Page+%28New+-+08%2F3%2F17%29";

const ArrowIcon = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M12.2929 15.2929C11.9024 15.6834 11.9024 16.3166 12.2929 16.7071C12.6834 17.0976 13.3166 17.0976 13.7071 16.7071L17.7071 12.7071C18.0976 12.3166 18.0976 11.6834 17.7071 11.2929L13.7071 7.29289C13.3166 6.90237 12.6834 6.90237 12.2929 7.29289C11.9024 7.68342 11.9024 8.31658 12.2929 8.70711L14.5858 11L7 11C6.44772 11 6 11.4477 6 12C6 12.5523 6.44772 13 7 13L14.5858 13L12.2929 15.2929Z"
      fill="#EB1700"
    ></path>
  </svg>
);

const Services = () => {
  return (
    <div className="services-container">
      <Service
        imageURL={ScootSVG}
        alt={ScootSVGTitle}
        headerTwo={ScootSVGTitle}
        headerThree={ScootSVGDescription}
        buttonHeadline={ScootSVGButtonHeadline}
        buttonURL={ScootButtonURL}
        SVGElement={ArrowIcon}
        scaleClass="scale-75 "
      />

      <Service
        imageURL={StoreFrontSVG}
        alt={StoreFrontSVGTitle}
        headerTwo={StoreFrontSVGTitle}
        headerThree={StoreFrontSVGDescription}
        buttonHeadline={StoreFrontSVGButtonHeadline}
        buttonURL={StoreFrontButtonURL}
        SVGElement={ArrowIcon}
        scaleClass="scale-75 "
      />

      <Service
        imageURL={PhoneSVG}
        alt={PhoneSVGTitle}
        headerTwo={PhoneSVGTitle}
        headerThree={PhoneSVGDescription}
        buttonHeadline={PhoneSVGButtonHeadline}
        buttonURL={PhoneButtonURL}
        SVGElement={ArrowIcon}
        scaleClass="scale-125 md:scale-150"
      />
    </div>
  );
};

export default Services;
