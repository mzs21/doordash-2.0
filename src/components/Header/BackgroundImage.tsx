import React from "react";
import RestaurantFood from "../assets/RestaurantFood.jpg";

interface IProps {
  children?: React.ReactNode;
}

const BackgroundImage = ({ children }: IProps) => {
  return <img src={RestaurantFood} alt="" />;
};
export default BackgroundImage;
