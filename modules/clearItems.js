export function clearItems() {
  document.querySelectorAll(".items-list").forEach((item) => {
    item.remove();
  });
};