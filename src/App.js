import { Fragment } from "react";
import NavigationBar from "./layout/nav/NavigationBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./pages/landing/LandingPage";
import Team from "./pages/team/Team";
import Footer from "./layout/footer/Footer";
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
        <Footer />
      </Router>
    </Fragment>
  );
}

export default App;
