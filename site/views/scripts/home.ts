import { LOGIN_URL } from "../../src/helpers/constant";

const loginButton = document.querySelector(".js-home-login");

loginButton?.addEventListener("click", () => {
  location.href = LOGIN_URL;
});
