// gathering logged in user's name
localStorage.setItem("username", "Guest User");   // delete this line in production
var userName = localStorage.getItem("username");

// initialization section
var dateInput;                                                        
var mealCategory;
var mealNameCaloriesPerSingleQuantity;
var mealQuantity;
var drinkNameCaloriesPerGlass;
var drinkQuantity;
var ingredientNameCaloriesPerGram;
var ingredientGrams;
var manualEntryName;
var manualEntryCalories;
var notesInput;

// function to extract calorie from the name of the food
function parseCalorie(foodName){
  var str1 = foodName;
  var leftP = str1.indexOf( "(" )+1;
  var rightP = str1.indexOf( ")" );
  var part1 = str1.substr(leftP, rightP-leftP);
  rightP = part1.indexOf( "c" )-1;
  var part2 = part1.substr(0, rightP)

  return part2
}

// validate form data
function validateFormData() {
  dateInput = $("#datepicker").val();                                                        
  mealCategory = $("#calorieEntryPage-mealCategory").val();
  mealNameCaloriesPerSingleQuantity = $("#calorieEntryPage-mealNameCaloriesPerSingleQuantity").val();
  mealQuantity = parseFloat($("#calorieEntryPage-mealQuantity").val().trim());
  drinkNameCaloriesPerGlass = $("#calorieEntryPage-drinkNameCaloriesPerGlass").val();
  drinkQuantity = parseFloat($("#calorieEntryPage-drinkQuantity").val().trim());
  ingredientNameCaloriesPerGram = $("#calorieEntryPage-ingredientNameCaloriesPerGram").val();
  ingredientGrams = parseFloat($("#calorieEntryPage-ingredientGrams").val().trim());
  manualEntryName = $("#calorieEntryPage-manualEntryName").val().trim();
  manualEntryCalories = parseFloat($("#calorieEntryPage-manualEntryCalories").val().trim());
  notesInput = $("#calorieEntryPage-notes").val().trim();
  
  // Validation - Section 2
  if (mealCategory === "0") {
    $("#calorieEntryPage-errorMessage").text("Please select meal category.");
    return;
  }
  // Validation - Section 3
  // Section 3 - checking to see that question 1 for Part A, B, C, D are not all empty
  else if ((mealNameCaloriesPerSingleQuantity === "0") && (drinkNameCaloriesPerGlass === "0") && (ingredientNameCaloriesPerGram === "0") && (manualEntryName === "")) {
    $("#calorieEntryPage-errorMessage").text("Please fill out section 3.");
    return;
  }
  // Section 3 - checking to see if question 1 has been filled out for other parts besides Part A
  else if ((mealNameCaloriesPerSingleQuantity !== "0") && (drinkNameCaloriesPerGlass !== "0")) {
      $("#calorieEntryPage-errorMessage").text("Please fill out only ONE part of section 3. Fill out either part A, B, C or D only.");
      return;
  }
  else if ((mealNameCaloriesPerSingleQuantity !== "0") && (ingredientNameCaloriesPerGram !== "0")) {
      $("#calorieEntryPage-errorMessage").text("Please fill out only ONE part of section 3. Fill out either part A, B, C or D only.");
      return;
  }
  else if ((mealNameCaloriesPerSingleQuantity !== "0") && (manualEntryName !== "")) {
      $("#calorieEntryPage-errorMessage").text("Please fill out only ONE part of section 3. Fill out either part A, B, C or D only.");
      return;
  }
  // Section 3 - checking to see if question 1 has been filled out for other parts besides Part B  
  else if ((drinkNameCaloriesPerGlass !== "0") && (ingredientNameCaloriesPerGram !== "0")) {
      $("#calorieEntryPage-errorMessage").text("Please fill out only ONE part of section 3. Fill out either part A, B, C or D only.");
      return;
  }
  else if ((drinkNameCaloriesPerGlass !== "0") && (manualEntryName !== "")) {
      $("#calorieEntryPage-errorMessage").text("Please fill out only ONE part of section 3. Fill out either part A, B, C or D only.");
      return;
  }
  // Section 3 - checking to see if question 1 has been filled out for other parts besides Part C
  else if ((ingredientNameCaloriesPerGram !== "0") && (manualEntryName !== "")) {
      $("#calorieEntryPage-errorMessage").text("Please fill out only ONE part of section 3. Fill out either part A, B, C or D only.");
      return;
  }
  // Validation - Section 3  
  // Section 3 - checking to see if Part A question 2 is a number
  else if ( 
            (mealNameCaloriesPerSingleQuantity !== "0") && 
            (drinkNameCaloriesPerGlass === "0") && (ingredientNameCaloriesPerGram === "0") && (manualEntryName === "") &&
            (isNaN(mealQuantity))
          ) {
            $("#calorieEntryPage-errorMessage").text("Please fill out quantity for section 3 part A. Check you have entered numbers.");
            return;
  }
  // Section 3 - checking to see if Part B question 2 is a number
  else if ( 
            (drinkNameCaloriesPerGlass !== "0") && 
            (mealNameCaloriesPerSingleQuantity === "0") && (ingredientNameCaloriesPerGram === "0") && (manualEntryName === "") &&
            (isNaN(drinkQuantity))
          ) {
            $("#calorieEntryPage-errorMessage").text("Please fill out quantity for section 3 part B. Check you have entered numbers.");
            return;
  }
  // Section 3 - checking to see if Part C question 2 is a number
  else if ( 
            (ingredientNameCaloriesPerGram !== "0") && 
            (mealNameCaloriesPerSingleQuantity === "0") && (drinkNameCaloriesPerGlass === "0") && (manualEntryName === "") &&
            (isNaN(ingredientGrams))
          ) {
            $("#calorieEntryPage-errorMessage").text("Please fill out number of grams for section 3 part C. Check you have entered numbers.");
            return;
  }
  // Section 3 - checking to see if Part D question 2 is a number
  else if ( 
            (manualEntryName !== "") && 
            (mealNameCaloriesPerSingleQuantity === "0") && (drinkNameCaloriesPerGlass === "0") && (ingredientNameCaloriesPerGram === "0") &&
            (isNaN(manualEntryCalories))
          ) {
            $("#calorieEntryPage-errorMessage").text("Please fill out number of calories for section 3 part D. Check you have entered numbers.");
            return;
  }
  // the following else statement is create data object and to initialize the error-message field once it passes all validation
  else {
    //section #, mealname, qty, cal
    $("#calorieEntryPage-errorMessage").text("");
    var strMealName;
    var strQty;
    var strCal;

    // section A information
    if (mealNameCaloriesPerSingleQuantity.trim()!="" && mealNameCaloriesPerSingleQuantity.trim()!=0){
      sectionNumber = "A";
      strMealName = mealNameCaloriesPerSingleQuantity;
      strQty = mealQuantity;
      strCal = parseCalorie(strMealName);
    } else if (drinkNameCaloriesPerGlass.trim()!="" && drinkNameCaloriesPerGlass.trim()!=0){
      sectionNumber = "B";
      strMealName = drinkNameCaloriesPerGlass;
      strQty = drinkQuantity;
      strCal = parseCalorie(strMealName);
    } else if (ingredientNameCaloriesPerGram.trim()!="" && ingredientNameCaloriesPerGram.trim()!=0){
      sectionNumber = "C";
      strMealName = ingredientNameCaloriesPerGram;
      strQty = ingredientGrams;
      strCal = parseCalorie(strMealName);
    } else if (manualEntryName.trim()!=""){
      sectionNumber = "D";
      strMealName = manualEntryName;
      strQty = 1;
      strCal = manualEntryCalories;
    }

    var data = {      
      username: userName,
      date: dateInput,
      mealtype: mealCategory,
      sectionno: sectionNumber,
      mealname: strMealName,
      qty:parseFloat(strQty),
      unitcal: parseFloat(strCal),
      comments: notesInput
    };
    return data
  }
}
$("#calorieEntryPageSubmitButton").on("click", function(event) {
  event.preventDefault();
  //FORM VALIDATION 
  var data = validateFormData();

  // PUSH USER INPUT DATA TO MONGO DB
  $.post("/api/calorie", data,
    function(res){      
      // Clear the form when submitting
      $("#calorieEntryPage-mealCategory").val("");
      $("#calorieEntryPage-mealNameCaloriesPerSingleQuantity").val("");
      $("#calorieEntryPage-mealQuantity").val("");
      $("#calorieEntryPage-drinkNameCaloriesPerGlass").val("");
      $("#calorieEntryPage-drinkQuantity").val("");
      $("#calorieEntryPage-ingredientNameCaloriesPerGram").val("");
      $("#calorieEntryPage-ingredientGrams").val("");
      $("#calorieEntryPage-manualEntryName").val("");
      $("#calorieEntryPage-manualEntryCalories").val("");
      $("#calorieEntryPage-notes").val("");      
      
      $("#calorieEntryPage-errorMessage").text("Save Successful!");
    }
  )
});