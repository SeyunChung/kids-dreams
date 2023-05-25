import { getChildren } from "./database.js"

// assigns the resulting array of children objects to a constant variable named children.
const children = getChildren()

export const Kids = () => {
    let html = "<ol>"

    for (const child of children) {
        html += `<li data-id="${child.id}" 
        data-name="${child.name}" 
        data-type="child" 
        data-wish="${child.wish}">
        ${child.name}</li>`
    }

    html += "</ol>"
    return html
}

// When the kid name is clicked, it should display their wish with their name.
document.addEventListener(
    "click",
    (clickEvent) => {
    // create variable to capture the element that was clicked on
    const kidTarget = clickEvent.target
    // kids list item clicked, add data attribute
    if (kidTarget.dataset.type === "child") {
    window.alert(`${kidTarget.dataset.name} 's wish is ${kidTarget.dataset.wish}.`)
    }
    }
)