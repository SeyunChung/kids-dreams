import { getCelebrities } from "./database.js"

// array of celebrities objects to a constant variable named celebrities
const celebrities = getCelebrities()

// Celebrity List
export const Celebrities = () => {
    let html = "<ol>"

    for (const celebrity of celebrities) {
        html += `<li 
                    data-id="${celebrity.id}" 
                    data-type="celebrity"
                    data-sport="${celebrity.sport}"
                    id="star--${celebrity.id}"
                    data-name="${celebrity.name}">
                    ${celebrity.name}
                </li>`
    }

    html += "</ol>"
    return html
}

//When the celebrity name is clicked, it should display their sport.
document.addEventListener(
    "click",
    (clickEvent) => {
    // create variable to capture the element that was clicked on
    const celebTarget = clickEvent.target
    if (celebTarget.dataset.type === "celebrity") {
    window.alert(`${celebTarget.dataset.name} is a ${celebTarget.dataset.sport} star.`)
    }
    }
)