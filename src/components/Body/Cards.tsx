import Card from "./Card";

// FoodsOne
const FoodsOne =
  "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1600,format=auto,quality=50/https://cdn.doordash.com/media/consumer/home/landing/new/all_in_one.jpg";

const FoodsOneTitle = "It’s all here. All in one app.";

const FoodsOneDescription =
  " Discover local, on-demand delivery or Pickup from restaurants, nearby grocery and convenience stores, and more.";
const FoodsOneButtonText = "Get the App";

const FoodsOneButtonURL = "https://apps.apple.com/app/id719972451";

// FoodsTwo

const FoodsTwo =
  "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1600,format=auto,quality=50/https://cdn.doordash.com/media/consumer/home/landing/new/ev_fla_wel_alt.jpg";

const FoodsTwoTitle = "Every Flavor Welcome";

const FoodsTwoDescription =
  "From your neighborhood sushi spot to the burger and fries you crave, choose from over 300,000 local and national favorites across the U.S., Canada and Australia.";

const FoodsTwoButtonText = "Find restaurants";

const FoodsTwoButtonURL = "https://www.doordash.com/restaurants-near-me/";

const Cards = () => {
  return (
    <div className="cards-container bg-gradient-to-r from-red-500 via-rose-300 to-pink-400">
      <Card
        imageURL={FoodsOne}
        buttonURL={FoodsOneButtonURL}
        description={FoodsOneDescription}
        buttonText={FoodsOneButtonText}
        title={FoodsOneTitle}
      />
      <Card
        imageURL={FoodsTwo}
        buttonURL={FoodsTwoButtonURL}
        description={FoodsTwoDescription}
        buttonText={FoodsTwoButtonText}
        title={FoodsTwoTitle}
      />
    </div>
  );
};

export default Cards;
