# Nu.Trac Project

![Image description](https://i.imgur.com/2YHcvd5.png)

## Antonio Garcia, Seil Cho, Ashish Garg

### Technologies Used: HTML5, CSS3, Javascript, 3 APIs (Spoonacular, NutritionIX, Zomato), Amazon Web Services (AWS)

#### User is given an option to choose a meal and diet. When selected, the User will then click `Trac` button and it will call the Spoonacular API which will randomly generate a recipe that fulfills the meal and diet selected. 

### The recipe name, image, ingredients, as well as instructions are displayed to the user. The User then has the buttons `Nut`, `Restaurant`, `Not`. 
#### When the user selects `Nut`, it displays the nutritional value of the recipe by calling the NutritionIX API. 
#### When the user selects `Not`, it calls the Spoonacular API and generates a new recipe with the same meal/diet choices. 
#### When the user selects `Restaurant`, it asks the user for their location, uses the coordinates for the Zomato API and displays the 10 nearest restauratnts with names, address, rating, as well as two icons that link to the photos and menu items. (Note: The same button is next to `Trac` as well).
