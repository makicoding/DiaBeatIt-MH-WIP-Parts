import React, { Component } from "react";
import { Container, Row, Col } from "../components/Grid";
import HamburgerMenuCalorieEntryPage from "../components/HamburgerMenu";
import "../components/Buttons/buttons.css";
import "../components/MainContentContainer/mainContentContainer.css";
import "../components/Text/text.css";

// Run "npm start" to start React app.
// Run "npm i" or "npm i [specific component name]" in the command line if there are any dependencies missing in the node modules folder.

class CalorieEntry extends React.Component {
  

  // Gathering logged in user's name
  // localStorage.setItem("username", "Guest User");   // delete this line in production
  // var userName = localStorage.getItem("username");

  // Initialization section
  // var dateInput;                                                        
  // var mealCategory;
  // var mealNameCaloriesPerSingleQuantity;
  // var mealQuantity;
  // var drinkNameCaloriesPerGlass;
  // var drinkQuantity;
  // var ingredientNameCaloriesPerGram;
  // var ingredientGrams;
  // var manualEntryName;
  // var manualEntryCalories;
  // var notesInput;

  // Function to extract numeric-calorie-amount inside the parenthesis () from the name of the food
  parseCalorie = (foodName) => {
    var str1 = foodName;
    var leftP = str1.indexOf( "(" )+1;
    var rightP = str1.indexOf( ")" );
    var part1 = str1.substr(leftP, rightP-leftP);
    rightP = part1.indexOf( "c" )-1;
    var part2 = part1.substr(0, rightP)

    return part2
  }

  // Function to validate form data
  validateFormData = () => {
    var dateInput = document.getElementById("datepicker").value;                                                        
    var mealCategory = document.getElementById("calorieEntryPage-mealCategory").value;
    var mealNameCaloriesPerSingleQuantity = document.getElementById("calorieEntryPage-mealNameCaloriesPerSingleQuantity").value;
    var mealQuantity = parseFloat(document.getElementById("calorieEntryPage-mealQuantity").value.trim());
    var drinkNameCaloriesPerGlass = document.getElementById("calorieEntryPage-drinkNameCaloriesPerGlass").value.trim();
    var drinkQuantity = parseFloat(document.getElementById("calorieEntryPage-drinkQuantity").value.trim());
    var ingredientNameCaloriesPerGram = document.getElementById("calorieEntryPage-ingredientNameCaloriesPerGram").value;
    var ingredientGrams = parseFloat(document.getElementById("calorieEntryPage-ingredientGrams").value.trim());
    var manualEntryName = document.getElementById("calorieEntryPage-manualEntryName").value.trim();
    var manualEntryCalories = parseFloat(document.getElementById("calorieEntryPage-manualEntryCalories").value.trim());
    var notesInput = document.getElementById("calorieEntryPage-notes").value.trim();
    
    // Validation - Section 2
    if (mealCategory === "0") {
      document.getElementById("calorieEntryPage-errorMessage").innerText = "Please select meal category.";
      return;
    }
    // Validation - Section 3
    // Section 3 - checking to see that question 1 for Part A, B, C, D are not all empty
    else if ((mealNameCaloriesPerSingleQuantity === "0") && (drinkNameCaloriesPerGlass === "0") && (ingredientNameCaloriesPerGram === "0") && (manualEntryName === "")) {
      document.getElementById("calorieEntryPage-errorMessage").innerText = "Please fill out section 3.";
      return;
    }
    // Section 3 - checking to see if question 1 has been filled out for other parts besides Part A
    else if ((mealNameCaloriesPerSingleQuantity !== "0") && (drinkNameCaloriesPerGlass !== "0")) {
        document.getElementById("calorieEntryPage-errorMessage").innerText = "Please fill out only ONE part of section 3. Fill out either part A, B, C or D only.";
        return;
    }
    else if ((mealNameCaloriesPerSingleQuantity !== "0") && (ingredientNameCaloriesPerGram !== "0")) {
        document.getElementById("calorieEntryPage-errorMessage").innerText = "Please fill out only ONE part of section 3. Fill out either part A, B, C or D only.";
        return;
    }
    else if ((mealNameCaloriesPerSingleQuantity !== "0") && (manualEntryName !== "")) {
        document.getElementById("calorieEntryPage-errorMessage").innerText = "Please fill out only ONE part of section 3. Fill out either part A, B, C or D only.";
        return;
    }
    // Section 3 - checking to see if question 1 has been filled out for other parts besides Part B  
    else if ((drinkNameCaloriesPerGlass !== "0") && (ingredientNameCaloriesPerGram !== "0")) {
      document.getElementById("calorieEntryPage-errorMessage").innerText = "Please fill out only ONE part of section 3. Fill out either part A, B, C or D only.";
        return;
    }
    else if ((drinkNameCaloriesPerGlass !== "0") && (manualEntryName !== "")) {
      document.getElementById("calorieEntryPage-errorMessage").innerText = "Please fill out only ONE part of section 3. Fill out either part A, B, C or D only.";
        return;
    }
    // Section 3 - checking to see if question 1 has been filled out for other parts besides Part C
    else if ((ingredientNameCaloriesPerGram !== "0") && (manualEntryName !== "")) {
      document.getElementById("calorieEntryPage-errorMessage").innerText = "Please fill out only ONE part of section 3. Fill out either part A, B, C or D only.";
        return;
    }
    // Validation - Section 3  
    // Section 3 - checking to see if Part A question 2 is a number
    else if ( 
              (mealNameCaloriesPerSingleQuantity !== "0") && 
              (drinkNameCaloriesPerGlass === "0") && (ingredientNameCaloriesPerGram === "0") && (manualEntryName === "") &&
              (isNaN(mealQuantity))
            ) {
              document.getElementById("calorieEntryPage-errorMessage").innerText = "Please fill out quantity for section 3 part A. Check you have entered numbers.";
              return;
    }
    // Section 3 - checking to see if Part B question 2 is a number
    else if ( 
              (drinkNameCaloriesPerGlass !== "0") && 
              (mealNameCaloriesPerSingleQuantity === "0") && (ingredientNameCaloriesPerGram === "0") && (manualEntryName === "") &&
              (isNaN(drinkQuantity))
            ) {
              document.getElementById("calorieEntryPage-errorMessage").innerText = "Please fill out quantity for section 3 part B. Check you have entered numbers.";
              return;
    }
    // Section 3 - checking to see if Part C question 2 is a number
    else if ( 
              (ingredientNameCaloriesPerGram !== "0") && 
              (mealNameCaloriesPerSingleQuantity === "0") && (drinkNameCaloriesPerGlass === "0") && (manualEntryName === "") &&
              (isNaN(ingredientGrams))
            ) {
              document.getElementById("calorieEntryPage-errorMessage").innerText = "Please fill out number of grams for section 3 part C. Check you have entered numbers.";
              return;
    }
    // Section 3 - checking to see if Part D question 2 is a number
    else if ( 
              (manualEntryName !== "") && 
              (mealNameCaloriesPerSingleQuantity === "0") && (drinkNameCaloriesPerGlass === "0") && (ingredientNameCaloriesPerGram === "0") &&
              (isNaN(manualEntryCalories))
            ) {
              document.getElementById("calorieEntryPage-errorMessage").innerText = "Please fill out number of calories for section 3 part D. Check you have entered numbers.";
              return;
    }
    // The following else statement is creating a data object and empties the error-message field once it passes all validation
    else {
      //section #, mealname, qty, cal
      document.getElementById("calorieEntryPage-errorMessage").innerText = "";
      var strMealName;
      var strQty;
      var strCal;

      // Section A information
      if (mealNameCaloriesPerSingleQuantity.trim()!="" && mealNameCaloriesPerSingleQuantity.trim()!=0){
        var sectionNumber = "A";
        strMealName = mealNameCaloriesPerSingleQuantity;
        strQty = mealQuantity;
        strCal = this.parseCalorie(strMealName);
      // Section B information
      } else if (drinkNameCaloriesPerGlass.trim()!="" && drinkNameCaloriesPerGlass.trim()!=0){
        var sectionNumber = "B";
        strMealName = drinkNameCaloriesPerGlass;
        strQty = drinkQuantity;
        strCal = this.parseCalorie(strMealName);
      // Section C information
      } else if (ingredientNameCaloriesPerGram.trim()!="" && ingredientNameCaloriesPerGram.trim()!=0){
        var sectionNumber = "C";
        strMealName = ingredientNameCaloriesPerGram;
        strQty = ingredientGrams;
        strCal = this.parseCalorie(strMealName);
      // Section D information
      } else if (manualEntryName.trim()!=""){
        var sectionNumber = "D";
        strMealName = manualEntryName;
        strQty = 1;
        strCal = manualEntryCalories;
      }

      var data = {      
        // username: userName,
        date: dateInput,
        mealtype: mealCategory,
        sectionno: sectionNumber,
        mealname: strMealName,
        qty:parseFloat(strQty),
        unitcal: parseFloat(strCal),
        comments: notesInput
      };
      console.log(data);

      return data

    }
  }

  validateThenPost = () => {
    // Execute function to validate form data
    this.validateFormData();


  
  }

  // When user clicks the submit button...
  // document.getElementById("calorieEntryPageSubmitButton").onclick = (event) => {
  //   event.preventDefault();

  //   // Execute function to validate form data
  //   var data = validateFormData();

    
  //   // Push user input data to Mongo DB
  //   // $.post("/api/calorie", data,
  //   //   function(res){      
  //   //     // Clear the form when submitting
  //   //     $("#calorieEntryPage-mealCategory").val("");
  //   //     $("#calorieEntryPage-mealNameCaloriesPerSingleQuantity").val("");
  //   //     $("#calorieEntryPage-mealQuantity").val("");
  //   //     $("#calorieEntryPage-drinkNameCaloriesPerGlass").val("");
  //   //     $("#calorieEntryPage-drinkQuantity").val("");
  //   //     $("#calorieEntryPage-ingredientNameCaloriesPerGram").val("");
  //   //     $("#calorieEntryPage-ingredientGrams").val("");
  //   //     $("#calorieEntryPage-manualEntryName").val("");
  //   //     $("#calorieEntryPage-manualEntryCalories").val("");
  //   //     $("#calorieEntryPage-notes").val("");      
        
  //   //     $("#calorieEntryPage-errorMessage").text("Save Successful!");
  //   //   }
  //   // )
  // };


  render() {
    return(
      <div>

        {/* ---------------------------------------- */}
        {/* MAIN CONTENT OF PAGE */}

        {/* Page header */}
        <div className="pageHeader">Calorie Entry
        
            {/* Main content container */}
            <div className="mainContentContainer">

                {/* BOOTSTRAP GRID */}
                {/* Max width 960px container */}
                {/* Put any bootstrap elements into class="container" to set max width to 960px and have it centered on page */}
                <Container>         
                    
                    {/* Calorie entry form */}
                    <Row>

                        <Col size="col-md-6 offset-md-3">           

                            {/* Subrow */}
                            <Row>
                                <Col size="col-md-12">
                                    <p className="sectionTitle">Enter data:</p>
                                </Col>
                            </Row> 

                            {/* ------------------------------ */}
                            {/* Subrow (FORM SECTION 1) */}
                            <Row>
                                <Col size="col-md-1">
                                    <p className="sectionTitle">1.</p>
                                </Col>

                                <Col size="col-md-10">                               
                                    {/* Datepicker */}
                                    <div className='form-group mainContentTextBlack'>
                                        <label htmlFor="body"></label>
                                        <label htmlFor="category">Please select date:</label>
                                        <br></br>
                                        <input type="text" className="form-control" id="datepicker" autoComplete="off"></input> 
                                        {/* autocomplete="off" is used to turn off the autocomplete of input field */}
                                    </div>
                                </Col>
                            </Row> 

                            <br></br>
                            {/* <hr class="horizontalRuleGray"></hr> */}
                            <hr className="horizontalRuleBlue"></hr>
                            {/* <hr class="horizontalRuleYellow"></hr> */}
                            
                            {/* ------------------------------ */}
                            {/* Subrow (FORM SECTION 2) */}
                            <Row>
                                <Col size="col-md-1">
                                    <p className="sectionTitle">2.</p>
                                </Col>

                                <Col size="col-md-10">
                                    <p className="mainContentTextBlack">Please select meal category:</p>
                                    <select className="chosen-select dropDownMenu1" id="calorieEntryPage-mealCategory">
                                        <option value="0"></option>
                                        <option value="Breakfast">Breakfast</option>
                                        <option value="Morning snack">Morning snack</option>
                                        <option value="Lunch">Lunch</option>
                                        <option value="Afternoon snack">Afternoon snack</option>
                                        <option value="Dinner">Dinner</option>
                                        <option value="Other snack">Other snack</option>
                                    </select>
                                </Col>
                            </Row> 

                            <br></br>
                            {/* <hr class="horizontalRuleGray"></hr> */}
                            <hr className="horizontalRuleBlue"></hr>
                            {/* <hr class="horizontalRuleYellow"></hr> */}

                            {/* ------------------------------ */}
                            {/* Subrow (FORM SECTION 3) */}
                            <Row>
                                <Col size="col-md-1">
                                    <p className="sectionTitle">3.</p>
                                </Col>

                                <Col size="col-md-10">
                                    <p className="mainContentTextBlack">Please enter <span className="mainContentTextRed">ONE</span> of the following parts:</p>
                                    <p className="mainContentTextRed">(fill out either part A, B, C or D only)</p>
                                </Col>
                            </Row> 

                            {/* Subrow */}
                            <Row>
                                <Col size="col-md-1">
                                    <p className="sectionTitle">A.</p>
                                </Col>

                                <Col size="col-md-10">
                                    <p className="mainContentTextBlack">Select from meal list:</p>
                                    <select className="chosen-select dropDownMenu1" id="calorieEntryPage-mealNameCaloriesPerSingleQuantity">
                                        {/* IN ALPHABETICAL ORDER */}
                                        {/* 
                                        For the value attribute, REMEMBER TO ONLY ENTER NUMERALS FOR THE CALORIE PART and not any other part. 
                                        For example a Chobani simply 100 yogurt should be entered as 
                                        "Chobani simply one hundred yogurt (100 cal)" and NOT: "Chobani simply 100 yogurt (100 cal)" 
                                        */}
                                        <option value="0"></option>
                                        <option value="Hamburger (540 cal)">Hamburger (540 cal)</option>
                                        <option value="Salad - plain (20 cal)">Salad - plain (20 cal)</option>
                                        <option value="Salad - with dressing (148 cal)">Salad - w/ dressing (148 cal)</option>
                                        <option value="Steak - beef (614 cal)">Steak - beef (614 cal)</option>
                                        <option value="Steak - tuna (184 cal)">Steak - tuna (184 cal)</option>
                                    </select>
                                    <br></br>
                                    <input type="text" className="form-control" id="calorieEntryPage-mealQuantity" placeholder="Quantity" autoComplete="off"></input>  
                                    {/* autocomplete="off" is used to turn off the autocomplete of input field */}
                                </Col>
                            </Row>
                            
                            <br></br>

                            {/* Subrow */}
                            <Row>
                                <Col size="col-md-1">
                                    <p className="sectionTitle">B.</p>
                                </Col>

                                <Col size="col-md-10">
                                    <p className="mainContentTextBlack">Select from drink list:</p>
                                    <select className="chosen-select dropDownMenu1" id="calorieEntryPage-drinkNameCaloriesPerGlass">
                                        {/* IN ALPHABETICAL ORDER */}
                                        {/*                                         
                                        For the value attribute, REMEMBER TO ONLY ENTER NUMERALS FOR THE CALORIE PART and not any other part. 
                                        For example a Chobani simply 100 yogurt should be entered as 
                                        "Chobani simply one hundred yogurt (100 cal)" and NOT: "Chobani simply 100 yogurt (100 cal)"
                                         */}
                                        <option value="0"></option>
                                        <option value="Beer - can (153 cal)">Beer - can (153 cal)</option>
                                        <option value="Wine - red, glass (125 cal)">Wine - red, glass (125 cal)</option>
                                        <option value="Wine - white, glass (121 cal)">Wine - white, glass (121 cal)</option>
                                        <option value="Soda - Cola, can (140 cal)">Soda - Cola, can (140 cal)</option>
                                    </select>
                                    <br></br>
                                    <input type="text" className="form-control" id="calorieEntryPage-drinkQuantity" placeholder="Quantity" autoComplete="off"></input>   
                                    {/* autocomplete="off" is used to turn off the autocomplete of input field */}
                                </Col>
                            </Row> 

                            <br></br>

                            {/* Subrow */}
                            <Row>
                                <Col size="col-md-1">
                                    <p className="sectionTitle">C.</p>
                                </Col>

                                <Col size="col-md-10">
                                    <p className="mainContentTextBlack">Select from ingredient list:</p>
                                    <select className="chosen-select dropDownMenu1" id="calorieEntryPage-ingredientNameCaloriesPerGram">
                                        {/* IN ALPHABETICAL ORDER */}
                                        {/*                                          
                                        For the value attribute, REMEMBER TO ONLY ENTER NUMERALS FOR THE CALORIE PART and not any other part. 
                                        For example a Chobani simply 100 yogurt should be entered as 
                                        "Chobani simply one hundred yogurt (100 cal)" and NOT: "Chobani simply 100 yogurt (100 cal)"
                                        */}
                                        <option value="0"></option>
                                        <option value="Carrot (0.3 cal/g)">Carrot (0.3 cal/g)</option>
                                        <option value="Onion (0.4 cal/g)">Onion (0.4 cal/g)</option>
                                        <option value="Spinach (0.2 cal/g)">Spinach (0.2 cal/g)</option>
                                    </select>
                                    <br></br>
                                    <input type="text" className="form-control" id="calorieEntryPage-ingredientGrams" placeholder="Grams" autoComplete="off"></input>    
                                    {/* autocomplete="off" is used to turn off the autocomplete of input field */}
                                </Col>
                            </Row> 

                            <br></br>

                            {/* Subrow */}
                            <Row>
                                <Col size="col-md-1">
                                    <p className="sectionTitle">D.</p>
                                </Col>

                                <Col size="col-md-10">
                                    <p className="mainContentTextBlack">Manual entry of meal / drink / ingredient:</p>
                                    <a className="anchor1" href="https://www.nutritionix.com/uk/database/common-foods" target="_blank">Click here to look up calories</a>
                                    <br></br>
                                    <input type="text" className="form-control" id="calorieEntryPage-manualEntryName" placeholder="Name of meal / drink / ingredient" autcomplete="off"></input>   
                                    {/* autocomplete="off" is used to turn off the autocomplete of input field */}
                                    <br></br>
                                    <input type="text" className="form-control" id="calorieEntryPage-manualEntryCalories" placeholder="Calories" autoComplete="off"></input>     
                                    {/* autocomplete="off" is used to turn off the autocomplete of input field */}
                                </Col>
                            </Row> 

                            <br></br>
                            {/* <hr class="horizontalRuleGray"></hr> */}
                            <hr className="horizontalRuleBlue"></hr>
                            {/* <hr class="horizontalRuleYellow"></hr> */}

                            {/* ------------------------------ */}
                            {/* Subrow (FORM SECTION 4) */}
                            <Row>
                                <Col size="col-md-1">
                                    <p className="sectionTitle">4.</p>
                                </Col>

                                <Col size="col-md-10">
                                    <p className="mainContentTextBlack">Please enter any additional notes (optional):</p>
                                    <textarea className="form-control" id="calorieEntryPage-notes" placeholder="" rows="4" autoComplete="off"></textarea>       
                                    {/* autocomplete="off" is used to turn off the autocomplete of text area field */}
                                </Col>
                            </Row> 
                            
                            <br></br>
                            {/* <hr class="horizontalRuleGray"></hr> */}
                            <hr className="horizontalRuleBlue"></hr>
                            {/* <hr class="horizontalRuleYellow"></hr> */}
                            <br></br>

                            {/* ------------------------------ */}
                            {/* Subrow (FORM SECTION 4) */}
                            <Row>
                                <Col size="col-md-1"></Col>

                                <Col size="col-md-10">
                                    <button className="button1" id="calorieEntryPageSubmitButton" onClick={this.validateThenPost}>Submit</button>
                                    <br></br>
                                    <div className="mainContentTextRed" id="calorieEntryPage-errorMessage"></div>
                                </Col>
                            </Row> 

                        </Col>

                    </Row>

                </Container>

            </div>

        </div>

        <br></br>
        <br></br>


        {/* ---------------------------------------- */}
        {/* HAMBURGER MENU */}

        <HamburgerMenuCalorieEntryPage />

      </div>
    )
  }
}

export default CalorieEntry;