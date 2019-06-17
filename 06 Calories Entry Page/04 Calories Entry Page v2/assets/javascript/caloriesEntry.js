console.log("Firebase JavaScript connected!");

// ------------------------------------------------------------
// PUSH USER INPUT DATA TO MONGO DB

// Function occurs when #calorieEntryPageSubmitButton is clicked
$("#calorieEntryPageSubmitButton").on("click", function(event) {

  event.preventDefault();


  // ----------------------------------------
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
  var drinkNameCaloriesPerGlass = $("#calorieEntryPage-drinkNameCaloriesPerGlass").val();
  var drinkQuantity = parseFloat($("#calorieEntryPage-drinkQuantity").val().trim());
  var ingredientNameCaloriesPerGram = $("#calorieEntryPage-ingredientNameCaloriesPerGram").val();
  var ingredientGrams = parseFloat($("#calorieEntryPage-ingredientGrams").val().trim());
  var manualEntryName = $("#calorieEntryPage-manualEntryName").val().trim();
  var manualEntryCalories = parseFloat($("#calorieEntryPage-manualEntryCalories").val().trim());
  var notes = $("#calorieEntryPage-notes").val().trim();

  console.log("Console log date:")
  console.log(date);
  console.log("Console log mealCategory:")
  console.log(mealCategory);
  console.log("Console log mealNameCaloriesPerSingleQuantity:")
  console.log(mealNameCaloriesPerSingleQuantity);
  console.log("Console log mealQuantity:")
  console.log(mealQuantity);
  console.log("Console log drinkNameCaloriesPerGlass:")
  console.log(drinkNameCaloriesPerGlass);
  console.log("Console log drinkQuantity:")
  console.log(drinkQuantity);
  console.log("Console log ingredientNameCaloriesPerGram:")
  console.log(ingredientNameCaloriesPerGram);
  console.log("Console log ingredientGrams:")
  console.log(ingredientGrams);
  console.log("Console log manualEntryName:")
  console.log(manualEntryName);
  console.log("Console log manualEntryCalories:")
  console.log(manualEntryCalories);
  console.log("Console log notes:")
  console.log(notes);


  // ----------------------------------------
  // FORM VALIDATION

  // typeof shows whether the value (.val()) is a string or a number  
  // Here we are trying to figure out if the value of meal is a string or a number
  console.log("Console log typeof mealNameCaloriesPerSingleQuantity:")
  console.log(typeof mealNameCaloriesPerSingleQuantity)
  // Here we are trying to figure out if the value of NaN (Not a Number) is a string or a number
  console.log("Console log typeof NaN:")
  console.log(typeof NaN)
  
  // ----------
  // Validation - Section 2

  // If mealCategory is equal to a string "0" ...
  // display an alert message 
  if (mealCategory === "0") {
    $("#calorieEntryPage-errorMessage").text("Please select meal category!");
  }


  // --------------------
  // --------------------
  // Validation - Section 3
  
  // Section 3 - checking to see that question 1 for Part A, B, C, D are not all empty

  else if ((mealNameCaloriesPerSingleQuantity === "0") && (drinkNameCaloriesPerGlass === "0") && (ingredientNameCaloriesPerGram === "0") && (manualEntryName === "")) {
    $("#calorieEntryPage-errorMessage").text("Please fill out section 3!");
  }

  // ----------
  // Section 3 - checking to see if question 1 has been filled out for other parts besides Part A

  else if ((mealNameCaloriesPerSingleQuantity !== "0") && (drinkNameCaloriesPerGlass !== "0")) {
      $("#calorieEntryPage-errorMessage").text("Please fill out only ONE part of section 3. Fill out either part A, B, C or D only.");
  }

  else if ((mealNameCaloriesPerSingleQuantity !== "0") && (ingredientNameCaloriesPerGram !== "0")) {
      $("#calorieEntryPage-errorMessage").text("Please fill out only ONE part of section 3. Fill out either part A, B, C or D only.");
  }

  else if ((mealNameCaloriesPerSingleQuantity !== "0") && (manualEntryName !== "")) {
      $("#calorieEntryPage-errorMessage").text("Please fill out only ONE part of section 3. Fill out either part A, B, C or D only.");
  }

  // ----------
  // Section 3 - checking to see if question 1 has been filled out for other parts besides Part B
  
  else if ((drinkNameCaloriesPerGlass !== "0") && (ingredientNameCaloriesPerGram !== "0")) {
      $("#calorieEntryPage-errorMessage").text("Please fill out only ONE part of section 3. Fill out either part A, B, C or D only.");
  }

  else if ((drinkNameCaloriesPerGlass !== "0") && (manualEntryName !== "")) {
      $("#calorieEntryPage-errorMessage").text("Please fill out only ONE part of section 3. Fill out either part A, B, C or D only.");
  }

  // ----------
  // Section 3 - checking to see if question 1 has been filled out for other parts besides Part C
  
  else if ((ingredientNameCaloriesPerGram !== "0") && (manualEntryName !== "")) {
      $("#calorieEntryPage-errorMessage").text("Please fill out only ONE part of section 3. Fill out either part A, B, C or D only.");
  }


  // --------------------
  // --------------------
  // Validation - Section 3
  
  // Section 3 - checking to see if Part A question 2 is a number
  else if ( 
            (mealNameCaloriesPerSingleQuantity !== "0") && 
            (drinkNameCaloriesPerGlass === "0") && (ingredientNameCaloriesPerGram === "0") && (manualEntryName === "") &&
            (isNaN(mealQuantity))
          ) {
            $("#calorieEntryPage-errorMessage").text("Please fill out quantity for section 3 part A. Check you have entered numbers.");
  }


  // THIS SCENARIO STILL NEEDS TO BE SOLVED OUT:
  // FOR EXAMPLE:
  // A USER FILLS OUT PART A QUESTION 1 AND QUESTION 2, AND ALSO HAS FILLED OUT QUESTION 2 IN PART B (WITHOUT FILLING OUT QUESTION 1 TO PART B)
  // AN ERROR MESSAGE NEEDS TO POPULATE

  // Section 3 - checking to see if question 2 is filled out in Part B in addition to Part A
  //   else if ( 
  //             (mealNameCaloriesPerSingleQuantity !== "0") && 
  //             (!isNaN(mealQuantity)) &&
  //             ((isNaN(drinkQuantity)) || (drinkQuantity !== 0))
  //           ) {
  //             $("#calorieEntryPage-errorMessage").text("Please fill out only ONE part of section 3. Fill out either part A, B, C or D only.");
  // }

  // ----------
  // Section 3 - checking to see if Part B question 2 is a number
  else if ( 
            (drinkNameCaloriesPerGlass !== "0") && 
            (mealNameCaloriesPerSingleQuantity === "0") && (ingredientNameCaloriesPerGram === "0") && (manualEntryName === "") &&
            (isNaN(drinkQuantity))
          ) {
            $("#calorieEntryPage-errorMessage").text("Please fill out quantity for section 3 part B. Check you have entered numbers.");
  }

  // ----------
  // Section 3 - checking to see if Part C question 2 is a number
  else if ( 
            (ingredientNameCaloriesPerGram !== "0") && 
            (mealNameCaloriesPerSingleQuantity === "0") && (drinkNameCaloriesPerGlass === "0") && (manualEntryName === "") &&
            (isNaN(ingredientGrams))
          ) {
            $("#calorieEntryPage-errorMessage").text("Please fill out number of grams for section 3 part C. Check you have entered numbers.");
  }

  // ----------
  // Section 3 - checking to see if Part D question 2 is a number
  else if ( 
            (manualEntryName !== "") && 
            (mealNameCaloriesPerSingleQuantity === "0") && (drinkNameCaloriesPerGlass === "0") && (ingredientNameCaloriesPerGram === "0") &&
            (isNaN(manualEntryCalories))
          ) {
            $("#calorieEntryPage-errorMessage").text("Please fill out number of calories for section 3 part D. Check you have entered numbers.");
  }


  // // --------------------
  // // --------------------
  // // Validation - Section 3, checking to see if question 2 has been filled out for other parts besides Part A

  // else if (
  //           ((mealNameCaloriesPerSingleQuantity !== "0") && (mealQuantity !== 0)) && 
  //           (drinkQuantity !== 0)
  //         ) {
  //           $("#calorieEntryPage-errorMessage").text("Please fill out only ONE part of section 3. Fill out either part A, B, C or D only.");
  // }

  // else if (
  //           (mealNameCaloriesPerSingleQuantity !== "0") &&  
  //           ((mealQuantity !== 0) && (ingredientGrams !== 0))
  //         ) {
  //           $("#calorieEntryPage-errorMessage").text("Please fill out only ONE part of section 3. Fill out either part A, B, C or D only.");
  // }

  // else if (
  //           (mealNameCaloriesPerSingleQuantity !== "0") &&  
  //           ((mealQuantity !== 0) && (manualEntryCalories !== ""))
  //         ) {
  //           $("#calorieEntryPage-errorMessage").text("Please fill out only ONE part of section 3. Fill out either part A, B, C or D only.");
  // }

  // // ----------
  // // Validation - Section 3, checking to see if question 2 has been filled out for other parts besides Part B

  // else if (
  //           (drinkNameCaloriesPerGlass !== "0") && 
  //           ((drinkQuantity !== 0) && (ingredientGrams !== 0))
  //         ) {
  //           $("#calorieEntryPage-errorMessage").text("Please fill out only ONE part of section 3. Fill out either part A, B, C or D only.");
  // }

  // else if (
  //           (drinkNameCaloriesPerGlass !== "0") && 
  //           ((drinkQuantity !== 0) && (manualEntryCalories !== ""))
  //         ) {
  //           $("#calorieEntryPage-errorMessage").text("Please fill out only ONE part of section 3. Fill out either part A, B, C or D only.");
  // }

  // // ----------
  // // Validation - Section 3, checking to see if question 2 has been filled out for other parts besides Part C

  // else if (
  //           (ingredientNameCaloriesPerGram !== "0") && 
  //           ((ingredientGrams !== 0) && (manualEntryCalories !== ""))
  //         ) {
  //           $("#calorieEntryPage-errorMessage").text("Please fill out only ONE part of section 3. Fill out either part A, B, C or D only.");
  // }  
  

  // --------------------
  // --------------------
  // Validation - Section 3, checking to see if question 2 has been filled out for other parts besides Part A

  //   else if (
  //           ((mealNameCaloriesPerSingleQuantity !== "0") && (drinkNameCaloriesPerGlass === "0")) &&
  //           ( (mealQuantity !== 0) && ( (isNaN(drinkQuantity)) || (drinkQuantity !== 0) ) )
  //         ) {
  //           $("#calorieEntryPage-errorMessage").text("Please fill out only ONE part of section 3. Fill out either part A, B, C or D only.");
  // }


  // else if (
  //           (mealNameCaloriesPerSingleQuantity !== "0") &&  
  //           ((mealQuantity !== 0) && (ingredientGrams !== 0))
  //         ) {
  //           $("#calorieEntryPage-errorMessage").text("Please fill out only ONE part of section 3. Fill out either part A, B, C or D only.");
  // }

  // else if (
  //           (mealNameCaloriesPerSingleQuantity !== "0") &&  
  //           ((mealQuantity !== 0) && (manualEntryCalories !== ""))
  //         ) {
  //           $("#calorieEntryPage-errorMessage").text("Please fill out only ONE part of section 3. Fill out either part A, B, C or D only.");
  // }

  // // ----------
  // // Validation - Section 3, checking to see if question 2 has been filled out for other parts besides Part B

  // else if (
  //           (drinkNameCaloriesPerGlass !== "0") && 
  //           ((drinkQuantity !== 0) && (ingredientGrams !== 0))
  //         ) {
  //           $("#calorieEntryPage-errorMessage").text("Please fill out only ONE part of section 3. Fill out either part A, B, C or D only.");
  // }

  // else if (
  //           (drinkNameCaloriesPerGlass !== "0") && 
  //           ((drinkQuantity !== 0) && (manualEntryCalories !== ""))
  //         ) {
  //           $("#calorieEntryPage-errorMessage").text("Please fill out only ONE part of section 3. Fill out either part A, B, C or D only.");
  // }

  // // ----------
  // // Validation - Section 3, checking to see if question 2 has been filled out for other parts besides Part C

  // else if (
  //           (ingredientNameCaloriesPerGram !== "0") && 
  //           ((ingredientGrams !== 0) && (manualEntryCalories !== ""))
  //         ) {
  //           $("#calorieEntryPage-errorMessage").text("Please fill out only ONE part of section 3. Fill out either part A, B, C or D only.");
  // }  

  // --------------------
  // --------------------
  // This last else statement is for testing purposes only. Comment out when deploying app.
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