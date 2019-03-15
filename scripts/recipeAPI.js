let recipeInfoArray = [];
let cleanRecipeInfo = [];

// Change URL1 depending on type of meal and dietary chosen.
function getRelevantData(meal, vegetarian) {
    let API_URL = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=1&tags=${meal}${vegetarian}`;
    return API_URL;
}


//////// TESTING FETCH with file /////////
let fileRecipe = "/singleRecipe.json";
// Adds function that fetches data from api
function retrieveData(recipeURL) {
    fetch(recipeURL, {
        headers: {
            // SEIL API "X-Rapidapi-Key": "545361c132msh5ff49c601f2b8bdp196a27jsn49e509407619"
            "X-Rapidapi-Key": "f4c07c8954msh28a4e5cf34521fcp114488jsn4e18f0aabd53"
        }
    })
    .then(function (response) {
        return response.json();
    })
    .then(function(actualData){
        recipeInfoArray = Object.values(actualData)[0][0];
        cleanRecipeInfo = getIngredientsList(recipeInfoArray);
        return recipeInfoArray;
        
    });
} 


// Converts JSON data to Array
function getIngredientsList(fetchData){
    let ingredientsInfo = ''
    let listOfIngredients = ''
    const servingSize= fetchData['servings'] 
    const recipeInstructions = fetchData['instructions']
    const recipeName = fetchData['title'] 
    
    let recipeInfo= []
    
    fetchData['extendedIngredients'].forEach(function(ingredient){
        ingredientsInfo+=` ${ingredient['amount']} ${ingredient['unit']} ${ingredient['name']},`
    });
    fetchData['extendedIngredients'].forEach(function(ingredient){
        listOfIngredients+=`${ingredient['name']} ,`
    });
    recipeInfo.push(listOfIngredients)
    recipeInfo.push(ingredientsInfo)
    recipeInfo.push(servingSize)
    recipeInfo.push(recipeInstructions)
    recipeInfo.push(recipeName)
    console.log(recipeInfo)
    return(recipeInfo); 
}

//// returns an array of the ingredients to be presented to the USER
function getIngredientsInArray(fetchData) {
    let ingredientsArray = []
    fetchData["extendedIngredients"].forEach(function(ingredient) {
        ingredientsInfo.push(
        `${ingredient["amount"]} ${ingredient["unit"]} ${
        ingredient["name"]}`);
    });
    return ingredientsArray;
  }

// let fileRecipe = "/singleRecipe.json";
// fetch(fileRecipe)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data);
//         console.log(data.recipes[0]);
//         console.log(data.recipes[0].extendedIngredients);
//         console.log(data.recipes[0].extendedIngredients[0]);
        
//     });