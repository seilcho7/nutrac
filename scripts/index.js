const URL1 = ""

// Adds function that fetch data from api
function retrieveData() {
    fetch(URL1)
        .then(function (response) {
            return response.json();
        })
        .then(function (actualData) {
            console.log(actualData);
        })
}

// Change URL1 depending on type of meal and dietary chosen.
function getRelevantData(meal, dietary) {
    let URL1 = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=1&tags=${meal}%2C+${dietary}`;

    return URL1;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////
/////// Returns array with list of ingredients, recipeApi search ingredients, and serving size////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////
function getIngredientsList(fetchData){
    ingredientsInfo = ''
    listOfIngredients = ''
    servingSize= fetchData['servings'] 
    recipeInfo= []
    fetchData['extendedIngredients'].forEach(function(ingredient){
        ingredientsInfo+=` ${ingredient['amount']} ${ingredient['unit']} ${ingredient['name']},`
    });
    fetchData['extendedIngredients'].forEach(function(ingredient){
      listOfIngredients+=`${ingredient['name']} ,`
  });
    recipeInfo.push(listOfIngredients)
    recipeInfo.push(ingredientsInfo)
    recipeInfo.push(servingSize)
    console.log(recipeInfo)
    return(recipeInfo); 
}