import styled from "styled-components";
import { Link } from "react-router-dom";

const NavbarMain = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #6a67ce;
  width: 100%;
  height: 8vh;
`;

const NavLogo = styled.section`
  color: white;
  font-size: 30px;
  font-weight: 100;
  margin: 5rem;
`;

const NavMenu = styled.nav`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavItem = styled.a`
  margin: 1rem;
  text-decoration: none;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #fff;

  :hover {
    color: #cddeff;
    opacity: 1;
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
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
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
