const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsItems = ingredients.map(ingredient => { 
const ingredientsEl = document.createElement(`li`);
ingredientsEl.textContent = ingredient;

ingredientsEl.classList.add('item');

return ingredientsEl;
} );

const ingredientsList = document.querySelector('#ingredients');
ingredientsList.append(...ingredientsItems);