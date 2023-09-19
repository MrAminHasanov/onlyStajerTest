const container = document.querySelector(".btnContainer");
const buttons = document.getElementsByClassName("button");

container.addEventListener("click", e => {
    const selectedElement = e.target;
    if (selectedElement.tagName === "BUTTON") {
        selectedElement.classList.toggle("activeBtn");
    }
    else {
        for (let button of buttons) {
            button.classList.remove("activeBtn")
        }
    }
})