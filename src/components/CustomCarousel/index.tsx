import React from "react";
import { Button } from "@material-tailwind/react";

interface CustomCarouselProps {
  images: string[];
}

const CustomCarousel: React.FC<CustomCarouselProps> = ({ images }) => {
  return (
    <Button>Button</Button>
  );
};

export default CustomCarousel;
