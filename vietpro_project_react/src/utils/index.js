import { BASE_URL } from "../constants/App";

export const getImageProduct = (imgName) =>
  `${BASE_URL}/assets/uploads/products/${imgName}`;
