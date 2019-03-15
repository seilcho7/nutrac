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


//////////////////////// SUBMIT BUTTON ////////////////////////
// Submit Button DOM
const submitButton = document.querySelector("[data-submitButton]");


// After User selects meal and diet, when clicking submit, it takes in the values and calls Recipe API
function submitButtonRetrieve() {
    // retrieveData(getRelevantData(mealFinal, vegetarianFinal));
    console.log(`Test. ${mealFinal} Test. ${vegetarianFinal}`)
    // setRecipeImage();
}

// submitButton Event Listener
submitButton.addEventListener("click", submitButtonRetrieve);

//////////////////////// RECIPE IMAGE ////////////////////////
// recipeImage = recipe image DOM
const recipeImage = document.querySelector("[data-recipeIMG]");

// setRecipeImage function sets the src of the recipeImage DOM to the image of the recipe
function setRecipeImage(){

    recipeImage.src = cleanRecipeInfo[5]; // NOTE CHANGE 0 TO ELEMENT WITH IMAGE SOURCE
}


///////////////////////////////////////////////////////////////////////////////////
//////////////////////////Nutrition button function //////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/// Nutrition button should retrieve nutritional info from array and pass it on to
/// fetch nutrition. Nutrition button on click Should run this function. 
function passNutInfo() {
    fetchNutrition(cleanRecipeInfo[1])
    const NutInfo = document.querySelector('[nut-info]');

    NutInfo.textContent = `Calories: ${totalCalories} Trans Fats: ${totalTFat} Saturated Fat: ${totalSFat} Cholesterol: ${totalCholesterol} Sodium: ${totalSodium} Carbohydrates: ${totalCarbohydrates} Fiber: ${totalDFiber} Sugar: ${totalSugar} Protein: ${totalProtein} Potassium: ${totalPotassium}`

    NutInfo.textContent = `Calories: ${totalCalories} Trans Fats: ${totalTFat} Saturated Fat: ${totalSFat} Cholesterol: ${totalCholesterol} Sodium: ${totalSodium} Carbohydrates: ${totalCarbohydrates} Fiber: ${totalDFiber} Sugar: ${totalSugar} Protein: ${totalProtein} Potassium: ${totalPotassium}`

}

///Function sets text content of nut info to blank and adds event listener to Nut Button. Upon clicking
///Nut button, fetch nutrition function will run and make api call and will add variables
function drawNutInfo() {
    const NutButton = document.querySelector('[nut-button')

    NutButton.addEventListener('click', passNutInfo())

}