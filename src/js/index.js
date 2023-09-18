const container = document.querySelector(".btnContainer");

//#region main Algoritme with multi button
let activeElements = [];

const toggleActiveElement = (element) => {
    if (activeElements.includes(element)) {
        activeElements=activeElements.filter(actElement => actElement !== element)
    } else activeElements.push(element)
}

container.addEventListener("click", e => {
    const selectedElement = e.target;
    if (selectedElement.tagName === "BUTTON") {
        selectedElement.classList.toggle("activeBtn");
        toggleActiveElement(selectedElement);
    } 
    else {
        activeElements = []
        for (let element of activeElements) {
            element.classList.remove("activeBtn")
        }
    }
})
