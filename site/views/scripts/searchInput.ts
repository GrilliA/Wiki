export const searchInput = () => {
  const searchInputsWrapper = document.querySelectorAll(".input-search");

  searchInputsWrapper.forEach((wrapper) => {
    const searchInput = wrapper.querySelector<HTMLInputElement>(
      ".input-search__field",
    );
    const clearIcon = wrapper.querySelector(".input-search__clear");
    clearIcon!.addEventListener("click", () => {
      searchInput!.value = "";
    });
  });
};
