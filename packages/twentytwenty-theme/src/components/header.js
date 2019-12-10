import React from "react";
import { connect, styled } from "frontity";
import NoticeBar from "./header/notice-bar";
import SiteBranding from "./header/site-branding";
import Nav from "./header/nav";
import SearchForm from "./header/search-form";

const Header = ({ state }) => (
  <HeaderSection>
    <NoticeBar />

    <NavBar>
      <div className="container">
        <SiteBranding />
        <Nav />
        <SearchForm />
      </div>
    </NavBar>
  </HeaderSection>
);

export default connect(Header);

const HeaderSection = styled.header`
  padding-top: 40px;

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 100%;
  }

  @media (min-width: 992px) {
    justify-content: space-between;
  }
`;

const NavBar = styled.div`
  padding: 36px 0;
`;
