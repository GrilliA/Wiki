export enum EAppMode {
  Development = "development",
  Production = "production",
}

export const baseUrl = "http://localhost:1337/api"; //"https://api.dancediction.com/api";
//"https://incredible-purpose-39ec375761.strapiapp.com/api";
export const appName = "Wiki dance";
export const enum EStoreSlice {
  Modal = "Modal",
  ApiError = "ApiError",
}
export enum AppModals {
  Login,
  Signup,
  Contact,
  ChangePassword,
}

export const API_TOKEN =
  "455787457f2eba254a2892847a96090c3694793d6bae109527ddf1c3c46366ef16b28d827f64520d579678b2ad7d02c1b923f3b73ea87d0567d3064444cda02be96e456eb5038d206bfdc56c50312f173e20fdbe046a0c83cc294e9e20bb626a4df8c6a7072203dfedf16a5a75016cfe6152fb23e5c93e50e9c6b309a96e6010";
export const defaultAppMode = EAppMode.Production;
export const appModeKey = "AppMode";
export const tokenKey = "appToken";
export enum HttpType {
  File = "File",
  Json = "Json",
}

export const imageCompressionOptions = {
  maxSizeMB: 5,
  maxWidthOrHeight: 1920,
  useWebWorker: true,
};
