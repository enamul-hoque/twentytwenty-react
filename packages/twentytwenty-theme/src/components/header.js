import React from "react";
import { connect, styled } from "frontity";
import NoticeBar from "./header/notice-bar";
import SiteBranding from "./header/site-branding";
import Nav from "./header/nav";

const Header = ({ state }) => (
  <HeaderSection>
    <NoticeBar />

    <NavBar>
      <div className="container-fluid d-flex flex-center">
        <SiteBranding />
        <Nav />
      </div>
    </NavBar>
  </HeaderSection>
);

export default connect(Header);

const HeaderSection = styled.header`
  padding-top: 40px;
`;

const NavBar = styled.div`
  padding: 36px 0;
`;
