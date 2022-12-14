// import { Uploader } from "uploader";

// const uploader = new Uploader({
//     apiKey: "free"
// });

// const options = { 
//     styles: {
//         fontSizes: {
//             base: 16
//         }
//     },
//     editor: {
//         images: {
//             crop: true,
//         }
//     },
//     maxFileCount: 1,
//     maxFileSizeBytes: 5 * 1024 * 1024,
//     multi: true,
//     layout: "modal",
//     container: "#imageUploader"

//  }

// uploader.open(options).then(files => {
//     if (files.length === 0) {
//         console.log('No files selected.')
//     } else {
//         console.log('Files uploaded:');
//         console.log(files.map(f => f.fileUrl));
//     }
// }).catch(err => {
//     console.error(err);
// });

const newRecipeHandler = async (event) => {
    event.preventDefault();

    const title = document.getElementById('exampleInputTitle').value;
    const image = document.getElementById('exampleInputImage').value;
    const ingredients = document.getElementById('exampleInputIngredients').value;
    const instructions = document.getElementById('exampleInputInstructions').value;
    const cookTime = document.getElementById('exampleInputCook').value;
    // const image = 

    const ingredientsArr = ingredients.split(',');
    
    let strIngredient1 = ingredientsArr[0];
    if (!ingredientsArr[0]) {
        strIngredient1 = ''; 
    }
    let strIngredient2 = ingredientsArr[1];
    if (!ingredientsArr[1]) {
        strIngredient2 = '';
    };
    let strIngredient3 = ingredientsArr[2];
    if (!ingredientsArr[2]) {
        strIngredient3 = '';
    };
    let strIngredient4 = ingredientsArr[3];
    if (!ingredientsArr[3]) {
        strIngredient4 = '';
    };
    let strIngredient5 = ingredientsArr[4];
    if (!ingredientsArr[4]) {
        strIngredient5 = '';
    };
    let strIngredient6 = ingredientsArr[5];
    if (!ingredientsArr[5]) {
        strIngredient6 = '';
    };
    let strIngredient7 = ingredientsArr[6];
    if (!ingredientsArr[6]) {
        strIngredient7 = '';
    };
    let strIngredient8 = ingredientsArr[7];
    if (!ingredientsArr[7]) {
        strIngredient8 = '';
    };
    let strIngredient9 = ingredientsArr[8];
    if (!ingredientsArr[8]) {
        strIngredient9 = '';
    };
    let strIngredient10 = ingredientsArr[9];
    if (!ingredientsArr[9]) {
        strIngredient10 = '';
    };
    let strIngredient11 = ingredientsArr[10];
    if (!ingredientsArr[10]) {
        strIngredient11 = '';
    };
    let strIngredient12 = ingredientsArr[11];
    if (!ingredientsArr[11]) {
        strIngredient12 = '';
    };
    let strIngredient13 = ingredientsArr[12];
    if (!ingredientsArr[12]) {
        strIngredient13 = '';
    };
    let strIngredient14 = ingredientsArr[13];
    if (!ingredientsArr[13]) {
        strIngredient14 = '';
    };
    let strIngredient15 = ingredientsArr[14];
    if (!ingredientsArr[14]) {
        strIngredient15 = '';
    };
    let strIngredient16 = ingredientsArr[15];
    if (!ingredientsArr[15]) {
        strIngredient16 = '';
    };
    let strIngredient17 = ingredientsArr[16];
    if (!ingredientsArr[16]) {
        strIngredient17 = '';
    };
    let strIngredient18 = ingredientsArr[17];
    if (!ingredientsArr[17]) {
        strIngredient18 = '';
    };
    let strIngredient19 = ingredientsArr[18];
    if (!ingredientsArr[18]) {
        strIngredient19 = '';
    };
    let strIngredient20 = ingredientsArr[19];
    if (!ingredientsArr[19]) {
        strIngredient20 = '';
    };
    
    await fetch(`/post`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            image,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strIngredient6,
            strIngredient7,
            strIngredient8,
            strIngredient9,
            strIngredient10,
            strIngredient11,
            strIngredient12,
            strIngredient13,
            strIngredient14,
            strIngredient15,
            strIngredient16,
            strIngredient17,
            strIngredient18,
            strIngredient19,
            strIngredient20,
            instructions,
            cookTime, 
        }),
        headers: { 'Content-Type': 'application/json'},
    });

    // document.location.replace('/Recipes');
};

document
    .querySelector('.recipe-form')
    .addEventListener('submit', newRecipeHandler);