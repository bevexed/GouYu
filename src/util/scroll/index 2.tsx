export const preventScroll = (dom: string) => {
  document
    .querySelector(dom)
    ?.addEventListener("touchmove", e => {
      e.stopPropagation()
      e.preventDefault()
      console.log(1);
    }, { passive: false });
};
