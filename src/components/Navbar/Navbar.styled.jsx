import styled from "styled-components";
import { Link } from "react-router-dom";

const NavbarMain = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #080808;
  border-bottom: 1px solid #6A67CE;
  width: 100%;
  height: 12vh;
`;

const NavLogo = styled.section`
  color: white;
  font-size: 23px;
  font-weight: 700;
  margin: 5rem;
`;

const NavMenu = styled.nav`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
`;

const NavItem = styled.a`
  margin: 1rem;
  text-decoration: none;
  font-size:18px;
  font-weight: semibold;
  :hover {
    color: #7900FF;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  margin: 0 0.5rem;
  :hover {
    color: #6A67CE;
  }
`;

const NavSearch = styled.section`
  margin: 5rem;
  display:flex;
  justify-content: center;
  align-items: center;
  font-size:20px;
  color:#fff;
`;

const NSearchInput = styled.input`
  margin:0 0.5rem;
  font-family: "Sora", sans-serif;
  font-family: "Source Sans Pro", sans-serif;
  width:100%;
  height:3vh;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
  outline: none;
  font-size: 15px;
  border: none;
  padding:0.3rem;
 
`;

export {
  NavbarMain,
  NavLogo,
  NavSearch,
  NavMenu,
  NavItem,
  NavLink,
  NSearchInput,
};
