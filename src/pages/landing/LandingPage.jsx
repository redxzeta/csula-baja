import MemberCard from "../../layout/cards/MemberCard";
import Carousel from "../../layout/carousel/Carousel";
import MidContainer from "../../layout/container/MidContainer";
import GridThree from "../../layout/grid/GridThree";

const LandingPage = () => {
  return (
    <MidContainer>
      <Carousel />
      <GridThree>
        <MemberCard /> <MemberCard /> <MemberCard />
      </GridThree>
    </MidContainer>
  );
};

export default LandingPage;
