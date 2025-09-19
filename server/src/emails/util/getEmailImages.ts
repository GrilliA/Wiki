import { SERVER_URL } from "../../helper/constants";
const getEmailImage = async (src: string) => {
  const res = await fetch(`${SERVER_URL}/${src}`);
  const blob = await res.blob();
  const arrayBuffer = await blob.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  return "data:" + blob.type + ";base64," + buffer.toString("base64");
};

export default getEmailImage;
