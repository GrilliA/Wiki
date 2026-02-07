export const searchInput = () => {
  const searchInputsWrapper = document.querySelectorAll(".input-search");

  searchInputsWrapper.forEach((wrapper) => {
    const searchInput = wrapper.querySelector<HTMLInputElement>(
      ".hero-search__input-field",
    );
    const clearIcon = wrapper.querySelector(".hero-search__input-clear");
    clearIcon!.addEventListener("click", () => {
      searchInput!.value = "";
    });
  });
};
