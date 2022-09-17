const newRecipeHandler = async (event) => {
    event.preventDefault();

    const title = document.getElementById('exampleInputTitle').value;
    const ingredients = document.getElementById('exampleInputIngredients').value;
    const measurements = document.getElementById('exampleInputMeasurements').value;
    const instructions = document.getElementById('exampleInputInstructions').value;
    const cookTime = document.getElementById('exampleInputCook').value;

};

document
    .querySelector('.recipe-form')
    .addEventListener('submit', newRecipeHandler);