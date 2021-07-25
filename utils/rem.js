import { fonts } from "../config";

export default function rem(px = 16) {
  return `${px / fonts.sizeDefault}rem`;
}
