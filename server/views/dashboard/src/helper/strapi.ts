import { strapi } from "@strapi/client";
import { baseUrl } from "./constants";

export const strapiClient = strapi({ baseURL: baseUrl });
