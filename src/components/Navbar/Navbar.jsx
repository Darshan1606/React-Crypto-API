import React from "react";

import {
  NavbarMain,
  NavLogo,
  NavSearch,
  NavMenu,
  NavItem,
  NavLink,
  NSearchInput
} from "./Navbar.styled";

import {
    SearchOutlined
  } from '@ant-design/icons';


const Navbar = () => {
  const onSearch = (value) => console.log(value);

  return (
    <>
      <NavbarMain>
        <NavLogo>Crytpo API</NavLogo>

        <NavMenu>
          <NavItem>
            <NavLink to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/currency">Cryptocurrencies</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/news">News</NavLink>
          </NavItem>
        </NavMenu>

        <NavSearch>
          <SearchOutlined />
          <NSearchInput
            placeholder="Search Here"
            enterButton="Search"
            size="large"
            type="text"
            onSearch={onSearch}
          />
        </NavSearch>
      </NavbarMain>
    </>
  );
};

export default Navbar;
