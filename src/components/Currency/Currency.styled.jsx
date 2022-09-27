import styled from "styled-components";

const RowTab = styled.section`
  background-color: #121318;
  padding: 2rem;
  text-align:center;
  border-radius: 0.3rem;
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  justify-content: center;
  align-items: center;
  margin: 2rem 5rem;
`;



const Card = styled.section`
  background-color: #080808;
  margin: 1rem;
  padding: 2.5rem;
  font-size: 15px;
  color:#fff;
  height:40vh;
  width:150px;
  border-radius: 0.3rem;
  font-weight: 500;

`;

const CardName = styled.p`
font-weight: 500;
font-size: 17px;
outline:none;
text-decoration:none;
`;

const CardPrice = styled.p`
font-weight: 500;
font-size: 17px;
outline:none;
text-decoration:none;
`;

const CardM = styled.p`
font-weight: 500;
font-size: 17px;
outline:none;
text-decoration:none;
`;

const CardChange = styled.p`
font-weight: 500;
font-size: 17px;
outline:none;
text-decoration:none;

`;




export { RowTab, Card, CardName, CardPrice, CardM, CardChange };
