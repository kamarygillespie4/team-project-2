const newRecipeHandler = async (event) => {
    event.preventDefault();

    const title = document.getElementById('exampleInputTitle').value;
    const ingredients = document.getElementById('exampleInputIngredients').value;
    const instructions = document.getElementById('exampleInputInstructions').value;
    const cookTime = document.getElementById('exampleInputCook').value;

    const ingredientsArr = ingredients.split(';');
    let strIngredient1 = ingredientsArr[0];
    if (!ingredientsArr[0]) {
        let strIngredient1 = '';
    };
    let strIngredient2 = ingredientsArr[1];
    if (!ingredientsArr[1]) {
        let strIngredient2 = '';
    };
    let strIngredient3 = ingredientsArr[2];
    if (!ingredientsArr[2]) {
        let strIngredient3 = '';
    };
    
    console.log(title);
    console.log(ingredientsArr);
    console.log(instructions);
    console.log(cookTime);

};

document
    .querySelector('.recipe-form')
    .addEventListener('submit', newRecipeHandler);