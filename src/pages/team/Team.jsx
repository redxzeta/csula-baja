import MemberCard from "../../layout/cards/MemberCard";
import MidContainer from "../../layout/container/MidContainer";
import GridThree from "../../layout/grid/GridThree";

const Team = () => {
  return (
    <MidContainer>
      <GridThree>
        {[1, 2, 3, 4].map((x) => (
          <MemberCard key={x} />
        ))}
      </GridThree>
    </MidContainer>
  );
};
export default Team;
