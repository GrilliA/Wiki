export const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://agrogemma.com/api"
    : "http://localhost/api";
export const appName = "Dance Diction";
export enum AppModals {
  Login,
  Signup,
  Contact,
}
