export const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://agrogemma.com/api"
    : "http://localhost/api";
export enum AppModals {
  Login,
}
