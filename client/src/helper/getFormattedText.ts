const getFormattedText = (str: string) => {
  const isString = typeof str === "string";
  if (!isString || !str) return "";
  return str.replaceAll("\n", "<br/>");
};

export default getFormattedText;
