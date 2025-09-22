const getImage = (key: string) => {
  if (!key) return undefined;
  if (!key.startsWith("http")) {
    return `https://wikidance.s3.amazonaws.com/${key}`;
  }
  return key;
};
export default getImage;
