import Carousel from "../../layout/carousel/Carousel";
import MidContainer from "../../layout/container/MidContainer";
import "./landing.css";
import Quote from "./Quote";
const LandingPage = () => {
  return (
    <>
      <div className="landing--background flex justify-center items-end md:p-24 p-8">
        <div className="bg-secondary bg-opacity-80 w-auto h-auto p-5 rounded-full">
          <h1 className="uppercase text-white text-lg lg:text-6xl font-bold">
            Cal state la baja sae
          </h1>
        </div>
      </div>
      <MidContainer>
        <Carousel />
        <Quote />
      </MidContainer>
    </>
  );
};

export default LandingPage;
