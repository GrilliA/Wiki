const getFormattedText = (str: string) => {
  if (!str) return "";
  return str.replaceAll("\n", "<br/>");
};

export default getFormattedText;
