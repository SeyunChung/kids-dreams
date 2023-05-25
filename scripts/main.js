import { Pairings } from "./Pairings.js"
import { Celebrities } from "./CelebrityList.js"
import { Kids } from "./Kids.js"

/*
defines a constant variable named mainContainer which uses the querySelector() method 
to select the HTML element with the ID container from the DOM (Document Object Model) of the webpage.
*/
const mainContainer = document.querySelector("#container")

/*
applicationHTML contains a string of HTML code.
class attribute
*/
const applicationHTML = `
    <h1>Make a Memory for Kids</h1>
    <article class="details">
        <section class="detail--column list details__kids">
            <h2>Kids</h2>
            ${Kids()}
        </section>
        <section class="detail--column details__celebrities">
            <h2>Celebrities</h2>
            ${Celebrities()}
        </section>
    </article>

    <article class="assignments">
        <h2>Pairings</h2>
        ${Pairings()}
    </article>
`

/*
innerHTML property of the mainContainer element to the value of the applicationHTML variable, 
which effectively replaces the contents of the mainContainer element with the HTML code defined in applicationHTML.
*/
mainContainer.innerHTML = applicationHTML