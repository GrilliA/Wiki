export const getLocale = () => {
  return "en";
  const supportedLocale = ["en", "it"];
  const defaultLocale = supportedLocale[0];
  const locale = navigator.language ?? defaultLocale;
  const normalizeLocale = locale.split("-")[0];
  if (supportedLocale.includes(normalizeLocale)) {
    return normalizeLocale;
  }

  return defaultLocale;
};
