import { AWS_REGION, BUCKET_NAME } from "./constants";

const getImageUrlFromFile = (image: any) => {
  if (!image) return null;
  return `https://${BUCKET_NAME}.s3.${AWS_REGION}.amazonaws.com/${image.key}`;
};

export default getImageUrlFromFile;
