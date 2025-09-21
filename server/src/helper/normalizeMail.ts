import { renderToStaticMarkup } from "@usewaypoint/email-builder";
import { normalizeString } from "./normalizeString";

export const normalizeMail = async (config: object, format?: object) => {
  const textToFormat = JSON.stringify(config);
  const text = await normalizeString(textToFormat, format);
  const result = JSON.parse(text);
  const mailContent = renderToStaticMarkup(result, { rootBlockId: "root" });
  return mailContent;
};
