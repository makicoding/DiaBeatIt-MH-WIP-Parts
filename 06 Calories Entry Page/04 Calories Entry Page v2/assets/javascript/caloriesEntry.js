console.log("Firebase JavaScript connected!");

// ----------------------------------------
// PUSH USER INPUT DATA TO MONGO DB

// Function occurs when #calorieEntryPageSubmitButton is clicked
$("#calorieEntryPageSubmitButton").on("click", function(event) {

  event.preventDefault();


  // GRAB USER INPUT
  
  // .val() sets the value of #name that jQuery has gotten ($ is get)   
  // .trim() trims any white spaces before and after the string, but not in-between the string

  // parseFloat() converts a string into a decimal number.  Only the first If the string are letters and not numerals, parseFloat will return NaN
  // parseFloat() determines if the first character in the specified string is a numeral. 
  // If it is, it parses the string until it reaches the end of the numerals, and returns the numerals as a number.
  // Note: Only the first set of numerals in the string are returned!
  // Note: If the first character cannot be converted to a number, parseFloat() returns NaN.

  var date = $("#datepicker").val();                                                        
  var mealCategory = $("#calorieEntryPage-mealCategory").val();
  var mealNameCaloriesPerSingleQuantity = $("#calorieEntryPage-mealNameCaloriesPerSingleQuantity").val();
  var mealQuantity = parseFloat($("#calorieEntryPage-mealQuantity").val().trim());
  // var mealQuantity = $("#calorieEntryPage-mealQuantity").val().trim();
  var drinkNameCaloriesPerGlass = $("#calorieEntryPage-drinkNameCaloriesPerGlass").val();
  // var drinkNumberOfGlasses = parseFloat($("#calorieEntryPage-drinkNumberOfGlasses").val().trim());
  var drinkQuantity = $("#calorieEntryPage-drinkQuantity").val().trim();
  var ingredientNameCaloriesPerGram = $("#calorieEntryPage-ingredientNameCaloriesPerGram").val();
  // var ingredientGrams = parseFloat($("#calorieEntryPage-ingredientGrams").val().trim());
  var ingredientGrams = $("#calorieEntryPage-ingredientGrams").val().trim();
  var manualEntryName = $("#calorieEntryPage-manualEntryName").val().trim();
  // var manualEntryCalories = parseFloat($("#calorieEntryPage-manualEntryCalories").val().trim());
  var manualEntryCalories = $("#calorieEntryPage-manualEntryCalories").val().trim();
  var notes = $("#calorieEntryPage-notes").val().trim();

  console.log("Console log date:")
  console.log(date);
  console.log("Console log mealCategory:")
  console.log(mealCategory);
  console.log("Console log mealNameCaloriesPerSingleQuantity:")
  console.log(mealCaloriesPerSingleQuantity);
  console.log("Console log mealQuantity:")
  console.log(mealQuantity);
  console.log("Console log drinkNameCaloriesPerGlass:")
  console.log(drinkCaloriesPerGlass);
  console.log("Console log drinkNumberOfGlasses:")
  console.log(drinkQuantity);
  console.log("Console log ingredientNameCaloriesPerGram:")
  console.log(ingredientCaloriesPerGram);
  console.log("Console log ingredientGrams:")
  console.log(ingredientGrams);
  console.log("Console log manualEntryName:")
  console.log(manualEntryNameOfItem);
  console.log("Console log manualEntryCalories:")
  console.log(manualEntryCalories);
  console.log("Console log notes:")
  console.log(notes);


  // --------------------
  // FORM VALIDATION

  // typeof shows whether the value (.val()) is a string or a number  
  // Here we are trying to figure out if the value of meal is a string or a number
  console.log("Console log typeof mealNameCaloriesPerSingleQuantity:")
  console.log(typeof mealNameCaloriesPerSingleQuantity)
  // Here we are trying to figure out if the value of NaN (Not a Number) is a string or a number
  console.log("Console log typeof NaN:")
  console.log(typeof NaN)
  
  // If mealCategory is equal to a string "0" ...
  // display an alert message 
  if (mealCategory === "0") {
    console.log("Please select meal category!")
  
    $("#calorieEntryPage-errorMessage").text("Please select meal category!");
  }

  // isNaN() checks if a value is Not a Number
  // else if ( 
  //           (mealCaloriesPerSingleQuantity === "0") && (drinkCaloriesPerGlass === "0") && (ingredientCaloriesPerGram === "0") && (manualEntryNameOfItem === "")
  //         ) {
  //           console.log("Please fill out section 3!")
  //           $("#calorieEntryPage-errorMessage").text("Please fill out section 3!");
  // }

  else if ( 
            (mealNameCaloriesPerSingleQuantity !== "0") && 
            (drinkNameCaloriesPerGlass === "0") && (ingredientNameCaloriesPerGram === "0") && (manualEntryName === "") &&
            (isNaN(mealQuantity))
          ) {
            console.log("Please fill out quantity for section A!");
            $("#calorieEntryPage-errorMessage").text("Please fill out quantity for section A!");
  }

  else if ( 
            (drinkNameCaloriesPerGlass !== "0") && 
            (mealNameCaloriesPerSingleQuantity === "0") && (ingredientNameCaloriesPerGram === "0") && (manualEntryName === "") &&
            (isNaN(drinkQuantity))
          ) {
            console.log("Please fill out number of glasses for section B!");
            $("#calorieEntryPage-errorMessage").text("Please fill out number of glasses for section B!");
  }

  else if ( 
            (ingredientNameCaloriesPerGram !== "0") && 
            (mealNameCaloriesPerSingleQuantity === "0") && (drinkNameCaloriesPerGlass === "0") && (manualEntryName === "") &&
            (isNaN(ingredientGrams))
          ) {
            console.log("Please fill out number of grams for section C!");
            $("#calorieEntryPage-errorMessage").text("Please fill out number of grams for section C!");
  }

  else if ( 
            (manualEntryName !== "") && 
            (mealNameCaloriesPerSingleQuantity === "0") && (drinkNameCaloriesPerGlass === "0") && (ingredientNameCaloriesPerGram === "0") &&
            (isNaN(manualEntryCalories))
          ) {
            console.log("Please fill out number of calories for section D!");
            $("#calorieEntryPage-errorMessage").text("Please fill out number of calories for section D!");
  }

  else {
    $("#calorieEntryPage-errorMessage").text("Form is good to submit!");
  }




  // else if ( 
  //           (mealCaloriesPerSingleQuantity !== "0") && 
  //           (drinkCaloriesPerGlass === "0") && (ingredientCaloriesPerGram === "0") && (manualEntryNameOfItem === "") &&
  //           ((drinkNumberOfGlasses !== null) || (ingredientGrams !== null) || (manualEntryCalories !== null))
  //         ) {
  //           console.log("Please fill out quantity for section A!");
  //           $("#calorieEntryPage-errorMessage").text("Please fill out section A only!");
  //           // return;
  // }





  // // In the following, isNaN(mealQuantity) is saying if mealQuantity is Not a Number 
  // else if ( 
  //           // ((mealCaloriesPerSingleQuantity === "0") || (isNaN(mealQuantity))) 
  //           ((drinkCaloriesPerGlass === "0") && (isNaN(drinkNumberOfGlasses)))
  //           // ((ingredientCaloriesPerGram === "0") && (isNaN(ingredientGrams))) && 
  //           // ((manualEntryNameOfItem === "") && (isNaN(manualEntryCalories))) 
  //         ) {
  //   console.log("Please fill out both parts for section B!")

  //   $("#calorieEntryPage-errorMessage").text("Please fill out both parts for section B!");
  //   return;
  // }

  // else if ( 
  //           // ((mealCaloriesPerSingleQuantity === "0") || (isNaN(mealQuantity))) 
  //           // ((drinkCaloriesPerGlass === "0") && (isNaN(drinkNumberOfGlasses)))
  //           ((ingredientCaloriesPerGram === "0") && (isNaN(ingredientGrams)))
  //           // ((manualEntryNameOfItem === "") && (isNaN(manualEntryCalories))) 
  //         ) {
  //   console.log("Please fill out both parts for section C!")

  //   $("#calorieEntryPage-errorMessage").text("Please fill out both parts for section C!");
  //   return;
  //   }

  //   else if ( 
  //             // ((mealCaloriesPerSingleQuantity === "0") || (isNaN(mealQuantity))) 
  //             // ((drinkCaloriesPerGlass === "0") && (isNaN(drinkNumberOfGlasses)))
  //             // ((ingredientCaloriesPerGram === "0") && (isNaN(ingredientGrams)))
  //             ((manualEntryNameOfItem === "") && (isNaN(manualEntryCalories))) 
  //           ) {
  //     console.log("Please fill out both parts for section D!")

  //     $("#calorieEntryPage-errorMessage").text("Please fill out both parts for section D!");
  //     return;
  //     }

  
  
});