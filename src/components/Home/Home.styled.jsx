import styled from "styled-components";

const HeaderBox = styled.section`
  background-color: #121318;
  margin: 2rem 5rem;
  padding: 1.5rem;
  text-align:center;
  border-radius: 0.3rem;
`;

const TitleBox = styled.section`
  font-size: 20px;
`;

const ContentBox = styled.section`
  font-size: 15px;
`;

const CardBoxes = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;

`;

const StatCard = styled.section`
background-color: #080808;
padding: 1rem;
width: 28vh;
height: 8vh;
border-radius: 0.3rem;
`;

const CrytoHead = styled.section`
display:flex;
justify-content: space-around;
align-items: center;
margin: 5rem 0 0 0;

`;

export {
    TitleBox,
    HeaderBox,
    ContentBox,
    CardBoxes,
    StatCard,
    CrytoHead
};


/*
background : #080808;
main color : #121318;
blue : #005FD2; 
*/