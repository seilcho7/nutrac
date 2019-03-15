let mealFinal = "";
let vegetarianFinal = "";

// Track which button user clicks and return the result.
function getUserInput() {
    document.getElementById('breakfast').addEventListener('click', function () {
        mealFinal = "breakfast";
        console.log(mealFinal);
    });
    document.getElementById('lunch').addEventListener('click', function () {
        mealFinal = "lunch";
        console.log(mealFinal);
    });
    document.getElementById('dinner').addEventListener('click', function () {
        mealFinal = "dinner";
        console.log(mealFinal);
    });
    document.getElementById('dessert').addEventListener('click', function () {
        mealFinal = "dessert";
        console.log(mealFinal);
    });
    document.getElementById('is-vegetarian').addEventListener('click', function () {
        vegetarianFinal = "%2Cvegetarian";
        console.log(vegetarianFinal);
    });
    document.getElementById('not-vegetarian').addEventListener('click', function () {
        vegetarianFinal = "";
        console.log(vegetarianFinal);
    });
}

getUserInput();

////////////////////////////////////////////////////////////////
//////////////////////// SUBMIT BUTTON ////////////////////////
////////////////////////////////////////////////////////////////

// Submit Button DOM
const submitButton = document.querySelector("[data-submitButton]");
const nav = document.querySelector('[data-nav]');
const recipeContainer = document.querySelector('[data-recipeContainer]');
// After User selects meal and diet, when clicking submit, it takes in the values and calls Recipe API
function submitButtonRetrieve() {
    retrieveData(getRelevantData(mealFinal, vegetarianFinal));
    console.log(`Test. ${mealFinal} Test. ${vegetarianFinal}`)
    // setRecipeImage(); MOVED TO SECOND THEN STATEMENT IN RETRIEVE DATA ------ DELETE THIS LINE
    nav.classList.toggle('hide');
    recipeContainer.classList.toggle('show');
}

// submitButton Event Listener
submitButton.addEventListener("click", submitButtonRetrieve);

// Adds toggle class to hid nav

////////////////////////////////////////////////////////////////
///////////////////////////  RECIPE  ///////////////////////////
////////////////////////////////////////////////////////////////

// recipeImage = recipe image DOM
const recipeImage = document.querySelector("[data-recipeIMG]");

// setRecipeImage function sets the src of the recipeImage DOM to the image of the recipe
function setRecipeImage(){
    recipeImage.src = cleanRecipeInfo[5]; // NOTE CHANGE 0 TO ELEMENT WITH IMAGE SOURCE
}

// recipeDOMS
function displayRecipeInformation(){
    const recipeName = document.querySelector("[data-rName]");
    const recipeIngredients = document.querySelector("[data-rIngredients]");
    const recipeInstructions = document.querySelector("[data-rInstructions]");

    const nameElement = document.createElement('p');
    nameElement.textContent = cleanRecipeInfo[4];
    recipeName.appendChild(nameElement);
    
    cleanRecipeInfo[0].forEach(function (ingredient){
        const ingredientElement = document.createElement('p');
        ingredientElement.textContent = ingredient;
        recipeIngredients.appendChild(ingredientElement);
    });
    
    const instructionElement = document.createElement('p');
    instructionElement.textContent = cleanRecipeInfo[3];
    recipeInstructions.appendChild(instructionElement);
}


//////////////////////////////////////////////////////////////////////////////////
////////////////////////// Nutrition button function ////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/// Nutrition button should retrieve nutritional info from array and pass it on to
/// fetch nutrition. Nutrition button on click Should run this function. 
function passNutInfo() {
    fetchNutrition(cleanRecipeInfo[1]);
    nutritionContainer.classList.toggle('show');
    // NutInfo.textContent = `Calories: ${totalCalories} Trans Fats: ${totalTFat} Saturated Fat: ${totalSFat} Cholesterol: ${totalCholesterol} Sodium: ${totalSodium} Carbohydrates: ${totalCarbohydrates} Fiber: ${totalDFiber} Sugar: ${totalSugar} Protein: ${totalProtein} Potassium: ${totalPotassium}`;
}

///Function sets text content of nut info to blank and adds event listener to Nut Button. Upon clicking
///Nut button, fetch nutrition function will run and make api call and will add variables

const NutInfo = document.querySelector('[nut-info]');
const NutButton = document.querySelector('[nut-button]');
NutButton.addEventListener('click', passNutInfo);
const nutritionContainer = document.querySelector('[data-nutritionContainer]');

// Adds nutritional info paragraph divs 
function drawNutritionLabel(){
  const NutAmount=  document.querySelector('[nut-amount]');
  let nutritionLabelArray = [ totalCalories.toFixed(2), 
    totalTFat.toFixed(2), 
    totalSFat.toFixed(2),
    totalCholesterol.toFixed(2),
    totalSodium.toFixed(2),
    totalCarbohydrates.toFixed(2),
    totalDFiber.toFixed(2),
    totalSugar.toFixed(2),
    totalProtein.toFixed(2),
    totalPotassium.toFixed(2)
];
// for each item in nutritional info array create child paragraph
  nutritionLabelArray.forEach(function(nutrient){
      const anchorElement = document.createElement('div')
      anchorElement.textContent = nutrient;
      NutAmount.appendChild(anchorElement);

  });
}