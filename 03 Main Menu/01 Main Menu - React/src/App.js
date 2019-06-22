import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainMenu from "./pages/MainMenu";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={MainMenu} />
          {/* <Route exact path="/anotherpage" component={AnotherPage /> */}
          {/* <Route exact path="/anotherpage/:id" component={AnotherPage} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;