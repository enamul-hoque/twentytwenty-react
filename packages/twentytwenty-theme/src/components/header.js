import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";
import NoticeBar from "./header/notice-bar";

const Header = ({ state }) => (
  <HeaderSection>
    <NoticeBar />

    <Container>
      <StyledLink link="/">
        <Title>{state.frontity.title}<Small>Theme</Small></Title>
      </StyledLink>
      <Description>{state.frontity.description}</Description>
    </Container>
    <Nav />
  </HeaderSection>
);

export default connect(Header);

const HeaderSection = styled.header`
  background-color: #1f38c5;
`;

const Container = styled.div`
  width: 848px;
  max-width: 100%;
  box-sizing: border-box;
  padding: 24px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 16px;
`;

const Small = styled.small``;

const Description = styled.h4`
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
`;

const StyledLink = styled(Link)``;
