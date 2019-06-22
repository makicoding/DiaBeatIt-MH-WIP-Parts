import React, { Component } from "react";
import "../components/MainMenu/mainMenu.css";

class MainMenu extends React.Component {

  render() {
    return(
      <div>

        {/* MAIN MENU */}
        <div className="backgroundColor">
          <a href="index.html">Calorie Entry</a>
          <a href="index.html">Calorie Data</a>
          <a href="index.html">Store Finder</a>
          <a href="index.html">Recipes Finder</a>
          <a href="index.html">Health Timeline</a>
          <a href="index.html">Digital Health Card</a>
          <a href="index.html">Resources</a>
          <a href="index.html">Contact</a>
          <a href="index.html">Sign Out</a>
        </div>

      </div>
    );
  }
}

export default MainMenu;