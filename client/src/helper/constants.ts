export const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://agrogemma.com/api"
    : "http://localhost:1337/api";
export const appName = "Dance Diction";
export enum AppModals {
  Login,
  Signup,
  Contact,
  ChangePassword,
}
export const API_TOKEN =
  "455787457f2eba254a2892847a96090c3694793d6bae109527ddf1c3c46366ef16b28d827f64520d579678b2ad7d02c1b923f3b73ea87d0567d3064444cda02be96e456eb5038d206bfdc56c50312f173e20fdbe046a0c83cc294e9e20bb626a4df8c6a7072203dfedf16a5a75016cfe6152fb23e5c93e50e9c6b309a96e6010";
