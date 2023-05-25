import { getChildren, getCelebrities } from "./database.js"

// array of children objects to a constant variable named kids
// array of celebrities objects to a constant variable named celebrities
const kids = getChildren()
const celebrities = getCelebrities()

/*
loops through the celebrity array to find a celebrity object 
whose id matches the celebrityId property of the child object.
If it finds a match, it returns the celebrity object.
키즈오브젝트는 하나고, 셀레브리티어레이는 어레이묶음인데
페어링function에서 한명의 키즈를 가지고 위에 findCelebrityMatch function에 가져가서
for loop으로 키즈 오브젝에있는데 셀레브리티아이디랑 셀레브레이티스! 아이디랑 비교에서 같으면
그 페어링된스타는 kidsStar 이고
아래에있는 페어링으로가서 html list에 추가됨 이렇게 추가된 라인은 다시 let html = ""에 저장
*/
const findCelebrityMatch = (kidObject, celebrityArray) => { // kidObject 여기에다가 아래에서 고른 아이가 들어가있음 // parameter
    let kidsStar = "" // empty string

    for (const celebrity of celebrityArray) { // iterate
        if (celebrity.id === kidObject.celebrityId) { // 여기에있는 아이디랑 매칭하다가 맞으면
            kidsStar = celebrity // 키즈스타로 들어가있음
        }
    }

    return kidsStar
}

//The pairings list should should contain the pairing in the following format.
//{child name} will be making memories with {celebrity name}, a {celebrity sport} star, by {child wish}
// pairing list

export const Pairings = () => {
    let html = ""
    html = "<ul>"

    for (const kid of kids) { // 여기에서 키즈가 골라지는게 시작됨
        const kidsStar = findCelebrityMatch(kid, celebrities) // 그리고 나선 여기에서 findCelebrityMatch 위로 올라가서
        html += `
            <li>
                ${kid.name} will be making memories with ${kidsStar.name}, a ${kidsStar.sport} star, by ${kid.wish}
            </li>
        `
    }

    html += "</ul>"

    return html
}