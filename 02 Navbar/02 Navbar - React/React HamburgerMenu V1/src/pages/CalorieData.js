import React, { Component } from "react";
import { Container, Row, Col } from "../components/Grid";
import HamburgerMenuCalorieEntryPage from "../components/HamburgerMenu";
import "../components/Buttons/buttons.css";
import "../components/MainContentContainer/mainContentContainer.css";
import "../components/Text/text.css";

// Run "npm start" to start React app.
// Run "npm i" or "npm i [specific component name]" in the command line if there are any dependencies missing in the node modules folder.

class CalorieData extends React.Component {
  


  render() {
    return(
      <div>

        {/* ---------------------------------------- */}
        {/* MAIN CONTENT OF PAGE */}

        {/* Page header */}
        <div className="pageHeader">Calorie Data
        
            {/* Main content container */}
            <div className="mainContentContainer">

                {/* BOOTSTRAP GRID */}
                {/* Max width 960px container */}
                {/* Put any bootstrap elements into class="container" to set max width to 960px and have it centered on page */}
                <Container>         
                    
                    {/* Calorie data retrieval */}
                    <Row>

                        <Col size="col-md-6 offset-md-3">           

                            {/* Subrow */}
                            <Row>
                                <Col size="col-md-12">
                                    <p className="sectionTitle">Retrieve data:</p>
                                </Col>
                            </Row> 

                            {/* ------------------------------ */}
                            {/* Subrow */}
                            <Row>
                                <Col size="col-md-12">                               
                                    {/* Datepicker */}
                                    <div className='form-group mainContentTextBlack'>
                                        <label htmlFor="body"></label>
                                        <label htmlFor="category">Filter by date:</label>
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
                            {/* Subrow (Retrieved data populates here) */}
                            <Row>
                                <Col size="col-md-12">
                                    <p id="retrievedData"></p>
                                </Col>
                            </Row> 

                            <br></br>

                            {/* ------------------------------ */}
                            {/* Subrow (Calories grand total goes here) */}
                            <Row>
                                <Col size="col-md-12">
                                    <p>Total:</p>
                                    <p><span id="calorieGrandTotal"></span> Calories</p>
                                </Col>
                            </Row> 

                            <br></br>

                            {/* ------------------------------ */}
                            {/* Subrow */}
                            <Row>
                                <Col size="col-md-12">
                                    <p className="sectionTitle">Recommended daily calorie intake:</p>
                                </Col>
                            </Row>
                            
                            <br></br>

                            {/* Subrow */}
                            <Row>
                                <Col size="col-md-12">
                                    <p className="mainContentTextBlack">Female:</p>
                                    <p className="mainContentTextBlack">female statistics here</p>
                                </Col>
                            </Row>

                            {/* Subrow */}
                            <Row>
                                <Col size="col-md-12">
                                    <p className="mainContentTextBlack">Male:</p>
                                    <p className="mainContentTextBlack">male statistics here</p>
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

export default CalorieData;