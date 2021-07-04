  const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listContainer = document.querySelector('#ingredients');

const ListItems = items => {
  const elem = document.createElement(`li`);
  elem.textContent = items;


  return elem;
};

const allElements = ingredients.map(items => ListItems(items));
listContainer.append(...allElements);