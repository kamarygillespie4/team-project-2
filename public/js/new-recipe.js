const newRecipeHandler = async (event) => {
    event.preventDefault();

    const title = document.getElementById('exampleInputTitle').value;
    const ingredients = document.getElementById('exampleInputIngredients').value;
    const instructions = document.getElementById('exampleInputInstructions').value;
    const cookTime = document.getElementById('exampleInputCook').value;

    const ingredientsArr = ingredients.split(';');

    console.log(title);
    console.log(ingredientsArr);
    console.log(instructions);
    console.log(cookTime);

};

document
    .querySelector('.recipe-form')
    .addEventListener('submit', newRecipeHandler);