const container = document.querySelector(".btnContainer");

//#region main Algoritme with multi button
let activeElements = [];

const toggleActiveElement = (element) => {
    if (activeElements.includes(element)) {
        activeElements.filter(actElement => actElement !== element)
    } else activeElements.push(element)
}

container.addEventListener("click", e => {
    const selectedElement = e.target;
    if (selectedElement.tagName === "BUTTON") {
        selectedElement.classList.toggle("activeBtn");
        toggleActiveElement(selectedElement);
    } else if (selectedElement.classList[0] === "structureName") {
        selectedElement.parentNode.classList.remove("activeBtn");
        toggleActiveElement(selectedElement);
    }
    else {
        activeElements = []
        for (let element of activeElements) {
            element.classList.remove("activeBtn")
        }
    }
})
