// скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку 
// на button.change - color і виводить значення кольору в span.color.


const reft = {
  btn : document.querySelector(".change-color"),
 colorEl : document.querySelector(".color"),
 colorBody: document.querySelector("body"),
}

reft.btn.addEventListener("click", () => {
  reft.colorEl.textContent = getRandomHexColor();
  reft.colorBody.style.backgroundColor = reft.colorEl.textContent;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}