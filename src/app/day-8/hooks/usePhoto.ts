import { useState } from "react";
import { IMAGES } from "../photoConfig";

export const usePhoto = () => {
  const [index, setIndex] = useState<number>(0);
  const handClickA = () => {
    setIndex((prev) => (prev + 1) % IMAGES.length);
  };
  const handClickB = () => {
    setIndex((prev) => (prev - 1 + IMAGES.length) % IMAGES.length);
  };
  return [index, handClickA, handClickB] as const;
};
