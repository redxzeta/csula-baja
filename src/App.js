import { Fragment } from "react";
import NavigationBar from "./layout/nav/NavigationBar";

function App() {
  return (
    <Fragment>
      <NavigationBar />
      <div className="container bg-red-700 mx-auto">
        <h1 className="transition-shadow hover:bg-yellow-200">TEST</h1>
        <button class="transition-all">test</button>
      </div>
    </Fragment>
  );
}

export default App;
