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