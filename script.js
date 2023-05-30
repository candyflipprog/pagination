async function getPages(id) {
    let response = await fetch(`https://gorest.co.in/public-api/posts?page=${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    let data = await response.json();
    return data;
};

function renderingPages() {
    let buttons = document.querySelectorAll("#button_item");
    
    for(let i = 0; i < buttons.length; i++) { 
        buttons[i].addEventListener("click", async (e) => { 
            e.preventDefault();
        
            clearItems();

            let getPagesFunc = await getPages(e.target.textContent);

            let mainSection = document.getElementById("main_section");
            let newUl = document.createElement("ul");
            let newLi = document.createElement("li");
        
            newLi.classList.add("items-list");
    
            for(let elem of getPagesFunc.data) {
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

function clearItems() {
    document.querySelectorAll(".items-list").forEach(item => {
        item.remove();
    });
};

export async function renderingText() {
    let pages = await getPages();
};

document.addEventListener("DOMContentLoaded", () => {
    renderingPages();
});
