    // Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
    // Додасть назву інгредієнта як його текстовий вміст.
    // Додасть елементу клас item.
    // Після чого, вставить усі <li> за одну операцію у список ul#ingredients.



const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listEl = document.querySelector("#ingredients");


 for(const ingredient of ingredients){
  const liEl = document.createElement('li');
   liEl.textContent = ingredient;
   liEl.classList.add("item");
  listEl.appendChild(liEl);
  
} 
document.body.appendChild(listEl);
  

