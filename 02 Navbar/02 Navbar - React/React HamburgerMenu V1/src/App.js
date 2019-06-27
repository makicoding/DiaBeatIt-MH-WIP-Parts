import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CalorieEntry from "./pages/CalorieEntry";
import CalorieData from "./pages/CalorieData";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={CalorieEntry} />
          <Route exact path="/CalorieEntry" component={CalorieEntry} />
          <Route exact path="/CalorieData" component={CalorieData} />
          {/* <Route exact path="/anotherpage" component={AnotherPage /> */}
          {/* <Route exact path="/anotherpage/:id" component={AnotherPage} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;