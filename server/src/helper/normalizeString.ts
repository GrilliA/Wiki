export const normalizeString = async (text: string, format?: object) => {
  return text.replace(/\$\{\{(\w+)\}\}/g, (accumulator, key) => {
    if (key in format) {
      return format[key];
    }
    return accumulator;
  });
};
