import { clearItems } from "./clearItems.js";
import { getPages } from "./getPages.js";

export function renderingPages() {
  let buttons = document.querySelectorAll("#button_item");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", async (e) => {
      e.preventDefault();

      clearItems();

      let getPagesFunc = await getPages(e.target.textContent);

      let mainSection = document.getElementById("main_section");
      let newUl = document.createElement("ul");
      let newLi = document.createElement("li");

      newLi.classList.add("items-list");

      for (let elem of getPagesFunc.data) {
        let newLink = document.createElement("a");

        newLink.textContent = elem.title;
        newLink.href = `page.html?id=${elem.id}`;
        newLi.append(newLink);

      }

      newUl.append(newLi);
      mainSection.append(newUl);
    });
  };
};