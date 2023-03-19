// скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, 
// оновлюючи властивість font - size.В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.
const reft = {
    textSize : document.querySelector("#font-size-control"),
    textElem : document.querySelector("#text"),
}

  reft.textSize.addEventListener ("input", (slider) => {
  reft.textElem.style.fontSize = ` ${slider.currentTarget.value}px `;
});