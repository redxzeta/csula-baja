import { Fragment } from "react";
import NavigationBar from "./layout/nav/NavigationBar";
import Carousel from "./layout/carousel/Carousel";
function App() {
  return (
    <Fragment>
      <NavigationBar />
      <div className="container mx-auto pt-9 pl-14 pr-14 pb-9">
        {/* <h1 className="transition-shadow hover:bg-yellow-200">TEST</h1>
        <button className="transition-all">test</button>
        <div className="w-auto h-4/6 ">YA YEET</div> */}

        <Carousel />
        {/* <LandingPage /> */}
      </div>
    </Fragment>
  );
}

export default App;
