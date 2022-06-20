import React from "react";

import {
  NavbarMain,
  NavLogo,
  NavSearch,
  NavMenu,
  NavItem,
  NavLink,
  NSearchInput,
} from "./Navbar.styled";

import {
  SearchOutlined,
  HomeOutlined,
  FundProjectionScreenOutlined,
  PayCircleOutlined,
} from "@ant-design/icons";

const Navbar = () => {
  const onSearch = (value) => console.log(value);

  return (
    <>
      <NavbarMain>
        <NavLogo>Crytpo API</NavLogo>

        <NavMenu>
          <NavItem>
            <HomeOutlined />
            <NavLink to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <PayCircleOutlined />
            <NavLink to="/currency">Cryptocurrencies</NavLink>
          </NavItem>
          <NavItem>
            <FundProjectionScreenOutlined />
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
