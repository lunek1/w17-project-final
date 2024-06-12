import LinkedInLogo from "/src/assets/logo-linkedin.svg";
import GithubLogo from "/src/assets/logo-github.svg";
import styled from "styled-components";

export const AboutUs = () => {
  const contactInfo = [
    {
      name: "Arnau Vidal",
      linkedin: "https://www.linkedin.com/in/arnau-vidal-4266a940/",
      github: "https://github.com/vidalhuix",
      portfolio: "https://arnaus-react-portafolio.netlify.app/",
      imgSrc:
        "https://arnaus-react-portafolio.netlify.app/assets/profile_pic-DhLhf60m.jpg",
    },
    {
      name: "Cornelia Dahlin",
      linkedin: "https://www.linkedin.com/in/cornelia-dahlin-940684295/",
      github: "https://github.com/lunek1",
      portfolio: "https://wondrous-sorbet-b71db8.netlify.app/",
      imgSrc:
        "https://media.licdn.com/dms/image/D4D03AQEHAtt3SlUKOQ/profile-displayphoto-shrink_800_800/0/1697014709384?e=1718236800&v=beta&t=Ikjt59Bq8qp6FoKDNJzLA2St8PS4ECaZKGMNb60D4OI",
    },
    {
      name: "Jing Huang",
      linkedin: "https://www.linkedin.com/in/jinghuangjh/",
      github: "https://github.com/jingh999",
      portfolio: "https://jinghuang.netlify.app/",
      imgSrc: "https://jinghuang.netlify.app/assets/portrait.jpg",
    },
  ];

  return (
    <Container>
      <ContactContainer>
        <h1>TECHNIGOS BOOTCAMP FINAL PROJECT</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti,
          consequuntur a? Voluptas voluptatibus quia pariatur eum unde minima
          soluta odit, sed et tempora dolore, vel distinctio! Consequatur nemo
          illo, hic officiis laudantium dicta impedit quos, recusandae
          temporibus illum sed ipsum! Deserunt temporibus sit repudiandae ullam
          ipsum cum saepe pariatur dolorem fugiat reprehenderit nostrum
          dignissimos voluptas necessitatibus mollitia a, reiciendis sint ex eum
          impedit aperiam, velit in! Velit, asperiores? Earum, necessitatibus!
        </p>
        <h1>TEAM</h1>
        <CardsContainer>
          {contactInfo.map((contact, index) => (
            <Card key={index}>
              <Front>
                <img src={contact.imgSrc} alt={`${contact.name} image`} />
              </Front>
              <Back>
                <h3>{contact.name}</h3>
                <div>
                  <a href={contact.github}>
                    <img src={GithubLogo} alt="logo Github" />
                  </a>
                  <a href={contact.linkedin}>
                    <img src={LinkedInLogo} alt="logo LinkedIn" />
                  </a>
                </div>
              </Back>
            </Card>
          ))}
        </CardsContainer>
      </ContactContainer>
    </Container>
  );
};

const Container = styled.div`
  background-color: var(--color-darkgreen);
  height: 100%;
  color: white;
  min-height: 100vh;
`;
const ContactContainer = styled.div`
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 150px 10px;
  text-align: center;
  @keyframes slideDown {
    0% {
      transform: translateY(-300%);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
  @media all and (min-width: 744px) {

  }
`;
const CardsContainer = styled.div`
  max-width: 1000px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  @media (min-width: 1000px) {
    flex-direction: row;
  }
`;
const Card = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 50px;
  transform-style: preserve-3d;
  transition: all 0.5s ease;

  &:hover {
    transform: rotateY(180deg);
  }
`;

const Front = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;

  > img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 50%;
    transition: 500 linear;
    box-shadow: 17px 32px 13px 0px rgba(0, 0, 0, 0.12);
  }
`;
const Back = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  background-color: white;
  color: var(--color-darkgreen);
  border-radius: 50%;
  box-shadow: 17px 32px 13px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    height: 50px;
    width: 50px;
    margin: 5px;
    filter: invert(27%) sepia(2%) saturate(3272%) hue-rotate(92deg)
      brightness(102%) contrast(81%);
    transition: transform 250ms ease-in;

    &:hover {
      filter: invert(81%) sepia(17%) saturate(543%) hue-rotate(339deg)
        brightness(90%) contrast(83%); /* Change color on hover */
      transform: scale(1.1);
    }
  }
`;