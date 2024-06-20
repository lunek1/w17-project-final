import styled from "styled-components";

const ContainerMeeting = styled.div`
  padding-top: 50px;
  padding-bottom: 16px;
  text-align: center;
  color: white;
  background-color: #44554b;

  @media (min-width: 1000px) {
    padding-top: 100px;
  }

  h6 {
    margin: 0 0 15px 0;
    letter-spacing: 0.15em;
    font-size: 18px;
    font-weight: 400;
  }
    
  h3 {
    margin: 0 0 15px 0;
    color: #d3af97;
    font-size: 40px;
    font-weight: 700;

    @media (min-width: 700px) and(max-width: 1200px) {
      font-size: 55px;
    }

    @media (min-width: 1000px) {
      font-size: 70px;
    }
  }
`;

const Paragraph = styled.p`
  font-size: 18px;
  line-height: 1.6;
  margin-top: 10px;
`;

const MeetinHeaderText = styled.div`
  width: 95%;
  max-width: 1000px;
  margin: 0 auto;
`;

export const MeetingSection = () => {
  return (
    <ContainerMeeting>
      <MeetinHeaderText>
        <h6>DISCOVER SUNSIDE</h6>
        <h3>MEETINGS & EVENTS</h3>
        <Paragraph>
          A business meeting can be highly productive. We offer a setting
          conducive to making crucial decisions, with ample space for when it's
          time to celebrate successes. The sequence of events is entirely your
          choice.
        </Paragraph>
      </MeetinHeaderText>
    </ContainerMeeting>
  );
};
