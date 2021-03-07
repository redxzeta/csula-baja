import MemberCard from "../../layout/cards/MemberCard";
import Carousel from "../../layout/carousel/Carousel";
import MidContainer from "../../layout/container/MidContainer";
import GridThree from "../../layout/grid/GridThree";
import "./landing.css";
const LandingPage = () => {
  return (
    <>
      <div className="landing--background ">TEST</div>
      <MidContainer>
        <Carousel />
        <GridThree>
          <MemberCard /> <MemberCard /> <MemberCard />
        </GridThree>
      </MidContainer>
    </>
  );
};

export default LandingPage;
