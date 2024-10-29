import noImage from "../assets/no-image-placeholder-6f3882e0.webp";

const getCroppedImageUrl = (url: string) =>
  url?.replace("/media/", "/media/crop/600/400/") || noImage;

export default getCroppedImageUrl;
