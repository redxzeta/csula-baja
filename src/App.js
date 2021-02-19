import { Fragment } from "react";
import NavigationBar from "./layout/nav/NavigationBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./pages/landing/LandingPage";
import Team from "./pages/team/Team";
function App() {
  return (
    <Fragment>
      <Router>
        <NavigationBar />
        <Switch>
          <Route path="/team">
            <Team />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
