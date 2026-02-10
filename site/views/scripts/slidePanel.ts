const slidePanelTarget = document.querySelector(
  ".dropdown__target",
) as HTMLElement;
const slidePanelContent = document.querySelector(
  ".dropdown__content",
) as HTMLElement;
const slidePanelCloseButton = document.querySelector(
  ".dropdown-header__close",
) as HTMLElement;
console.log(slidePanelTarget, slidePanelContent);
slidePanelTarget?.addEventListener("click", () => {
  slidePanelContent.classList.add("active");
});
slidePanelCloseButton?.addEventListener("click", () => {
  slidePanelContent.classList.remove("active");
});
