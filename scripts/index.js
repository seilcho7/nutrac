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

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////// Nutrition INFORMATION //////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////

// Initialized Variables for total nutrition information
let totalCalories = 0;
let totalTFat = 0;
let totalSFat = 0;
let totalCholesterol = 0;
let totalSodium = 0;
let totalCarbohydrates = 0;
let totalDFiber = 0;
let totalSugar = 0;
let totalProtein = 0;
let totalPotassium = 0;


// Goes through array of each food item and accumlates data on nutritional values
function getNutrionalValue(data) {
    console.log(data.foods[0].food_name);
    data.foods.forEach(function (ingredient){
        totalCalories += ingredient.nf_calories;
        totalTFat += ingredient.nf_total_fat;
        totalSFat += ingredient.nf_saturated_fat;
        totalCholesterol += ingredient.nf_cholesterol;
        totalSodium += ingredient.nf_sodium;
        totalCarbohydrates += ingredient.nf_total_carbohydrate;
        totalDFiber += ingredient.nf_dietary_fiber;
        totalSugar += ingredient.nf_sugars;
        totalProtein += ingredient.nf_protein;
        totalPotassium += ingredient.nf_potassium;
    })
}

nutritionURL = "https://trackapi.nutritionix.com/v2/natural/nutrients";

// fetch(nutritionURL, {
//     // "credentials":"include",
//     "headers":{
//         "accept":"application/json",
//         "accept-language":"en-US,en;q=0.9",
//         "content-type":"application/json",
//         "x-app-id":"7d3ecb4e",
//         "x-app-key":"f219f153fef321315ddf906f69ff2f52",
//         "x-remote-user-id":"0"
//     },
//     "referrer":"https://trackapi.nutritionix.com/docs/",
//     "referrerPolicy":"no-referrer-when-downgrade",
//     "body":"{\n  \"query\": \"0.25 cups almonds, 1 bag coleslaw mix, 1 package cream of chicken soup, 5 green onions, 2 tablespoons olive oil, 0.5 teaspoon pepper, 0.5 teaspoon salt, 3 tablespoons sesame seeds, 3 tablespoons sugar, 3 tablespoons vinegar\"\n}","method":"POST","mode":"cors"
//     })
//     .then(function (response){
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data);
//     });


let fileName = "/testNutrionix.json";
let fileName2 = "/newNutrition.json";

fetch(fileName2)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        getNutrionalValue(data);
    });