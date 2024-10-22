const getCroppedImageUrl = (url: string) =>
  url.replace("/media/", "/media/crop/600/400/");

export default getCroppedImageUrl;
