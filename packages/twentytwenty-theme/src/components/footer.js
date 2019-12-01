import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";

const Footer = ({ state }) => (
  <FooterSection>
    <FooterWidgets>
      <FooterWidgetsContainer>
        <FooterWidgetRow>
          <FooterWidgetColumns>
            <FooterWidgetColumnInner>
              <FooterSearchWidget method="get" action="#">
                <FooterSearchWidgetInput type="search" name="s" placeholder="Search …" />
                <FooterSearchWidgetButton type="submit" placeholder="Search" />
              </FooterSearchWidget>

              <FooterWidgetTitle>Recent Posts</FooterWidgetTitle>

              <FooterLinksWidget className="post-list">
                <FooterLinksWidgetLI><FooterLinksWidgetA link="#">Hello world!</FooterLinksWidgetA></FooterLinksWidgetLI>
                <FooterLinksWidgetLI><FooterLinksWidgetA link="#">Markup: HTML Tags and Formatting</FooterLinksWidgetA></FooterLinksWidgetLI>
                <FooterLinksWidgetLI><FooterLinksWidgetA link="#">Markup: Image Alignment</FooterLinksWidgetA></FooterLinksWidgetLI>
                <FooterLinksWidgetLI><FooterLinksWidgetA link="#">Markup: Text Alignment</FooterLinksWidgetA></FooterLinksWidgetLI>
                <FooterLinksWidgetLI><FooterLinksWidgetA link="#">Markup: Title With Special Characters</FooterLinksWidgetA></FooterLinksWidgetLI>
              </FooterLinksWidget>

              <FooterWidgetTitle>Recent Comments</FooterWidgetTitle>

              <FooterLinksWidget className="post-list">
                <FooterLinksWidgetLI><FooterLinksWidgetA link="#">A WordPress Commenter</FooterLinksWidgetA> <FooterLinksWidgetSpan>on</FooterLinksWidgetSpan> <FooterLinksWidgetA link="#">Hello world!</FooterLinksWidgetA></FooterLinksWidgetLI>
                <FooterLinksWidgetLI><FooterLinksWidgetA link="#">John Doe</FooterLinksWidgetA> <FooterLinksWidgetSpan>on</FooterLinksWidgetSpan> <FooterLinksWidgetA link="#">Edge Case: No Content</FooterLinksWidgetA></FooterLinksWidgetLI>
                <FooterLinksWidgetLI><FooterLinksWidgetA link="#">Jane Doe</FooterLinksWidgetA> <FooterLinksWidgetSpan>on</FooterLinksWidgetSpan> <FooterLinksWidgetA link="#">Protected: Template: Password Protected (the password is “enter”)</FooterLinksWidgetA></FooterLinksWidgetLI>
                <FooterLinksWidgetLI><FooterLinksWidgetA link="#">Jane Doe</FooterLinksWidgetA> <FooterLinksWidgetSpan>on</FooterLinksWidgetSpan> <FooterLinksWidgetA link="#">Template: Comments</FooterLinksWidgetA></FooterLinksWidgetLI>
                <FooterLinksWidgetLI><FooterLinksWidgetA link="#">John Doe</FooterLinksWidgetA> <FooterLinksWidgetSpan>on</FooterLinksWidgetSpan> <FooterLinksWidgetA link="#">Template: Comments</FooterLinksWidgetA></FooterLinksWidgetLI>
              </FooterLinksWidget>
            </FooterWidgetColumnInner>
          </FooterWidgetColumns>

          <FooterWidgetColumns>
            <FooterWidgetColumnInner>
              <FooterWidgetTitle>Archives</FooterWidgetTitle>

              <FooterLinksWidget>
                <FooterLinksWidgetLI><FooterLinksWidgetA link="#">January 2019</FooterLinksWidgetA></FooterLinksWidgetLI>
                <FooterLinksWidgetLI><FooterLinksWidgetA link="#">February 2019</FooterLinksWidgetA></FooterLinksWidgetLI>
                <FooterLinksWidgetLI><FooterLinksWidgetA link="#">March 2019</FooterLinksWidgetA></FooterLinksWidgetLI>
                <FooterLinksWidgetLI><FooterLinksWidgetA link="#">April 2019</FooterLinksWidgetA></FooterLinksWidgetLI>
                <FooterLinksWidgetLI><FooterLinksWidgetA link="#">May 2019</FooterLinksWidgetA></FooterLinksWidgetLI>
                <FooterLinksWidgetLI><FooterLinksWidgetA link="#">June 2019</FooterLinksWidgetA></FooterLinksWidgetLI>
                <FooterLinksWidgetLI><FooterLinksWidgetA link="#">July 2019</FooterLinksWidgetA></FooterLinksWidgetLI>
                <FooterLinksWidgetLI><FooterLinksWidgetA link="#">August 2019</FooterLinksWidgetA></FooterLinksWidgetLI>
                <FooterLinksWidgetLI><FooterLinksWidgetA link="#">September 2019</FooterLinksWidgetA></FooterLinksWidgetLI>
                <FooterLinksWidgetLI><FooterLinksWidgetA link="#">October 2019</FooterLinksWidgetA></FooterLinksWidgetLI>
                <FooterLinksWidgetLI><FooterLinksWidgetA link="#">November 2019</FooterLinksWidgetA></FooterLinksWidgetLI>
                <FooterLinksWidgetLI><FooterLinksWidgetA link="#">December 2019</FooterLinksWidgetA></FooterLinksWidgetLI>
              </FooterLinksWidget>

              <FooterWidgetTitle>Categories</FooterWidgetTitle>

              <FooterLinksWidget>
                <FooterLinksWidgetLI><FooterLinksWidgetA link="#">aciform</FooterLinksWidgetA></FooterLinksWidgetLI>
                <FooterLinksWidgetLI><FooterLinksWidgetA link="#">broder</FooterLinksWidgetA></FooterLinksWidgetLI>
                <FooterLinksWidgetLI><FooterLinksWidgetA link="#">Child 1</FooterLinksWidgetA></FooterLinksWidgetLI>
                <FooterLinksWidgetLI><FooterLinksWidgetA link="#">dispatch</FooterLinksWidgetA></FooterLinksWidgetLI>
                <FooterLinksWidgetLI><FooterLinksWidgetA link="#">Edge Case</FooterLinksWidgetA></FooterLinksWidgetLI>
                <FooterLinksWidgetLI><FooterLinksWidgetA link="#">Foo A</FooterLinksWidgetA></FooterLinksWidgetLI>
              </FooterLinksWidget>

              <FooterWidgetTitle>Meta</FooterWidgetTitle>

              <FooterLinksWidget>
                <FooterLinksWidgetLI><FooterLinksWidgetA link="#">Log in</FooterLinksWidgetA></FooterLinksWidgetLI>
                <FooterLinksWidgetLI><FooterLinksWidgetA link="#">Entries feed</FooterLinksWidgetA></FooterLinksWidgetLI>
                <FooterLinksWidgetLI><FooterLinksWidgetA link="#">Comments feed</FooterLinksWidgetA></FooterLinksWidgetLI>
                <FooterLinksWidgetLI><FooterLinksWidgetA link="#">WordPress.org</FooterLinksWidgetA></FooterLinksWidgetLI>
              </FooterLinksWidget>
            </FooterWidgetColumnInner>
          </FooterWidgetColumns>
        </FooterWidgetRow>
      </FooterWidgetsContainer>
    </FooterWidgets>

    <FooterBottom>
      <FooterBottomContainer>
        <FooterDivier></FooterDivier>

        <FooterCopyright><FooterCopyrightStrong>&copy; 2019 <StyledLink link="/">{state.frontity.title}</StyledLink></FooterCopyrightStrong> <FooterCopyrightDesktop>Powered by <StyledLink link="https://wordpress.org" target="_blank">WordPress</StyledLink> & <StyledLink link="https://reactjs.org" target="_blank">React</StyledLink></FooterCopyrightDesktop></FooterCopyright>

        <BackToTop link="#top"><BackToTopDesktop>To the top</BackToTopDesktop><BackToTopMobile>Up</BackToTopMobile><BackToTopIcon></BackToTopIcon>↑</BackToTop>
      </FooterBottomContainer>
    </FooterBottom>
  </FooterSection>
);

export default connect(Footer);

const FooterSection = styled.footer`
  display: block;
`;

const FooterWidgets = styled.div`
  padding-top: 80px;
`;

const FooterWidgetsContainer = styled.div`
  max-width: 1170px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
`;

const FooterWidgetRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;
`;

const FooterWidgetColumns = styled.div`
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
  width: 100%;
  padding-bottom: 50px;

  @media (min-width: 768px) {
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
  }
`;

const FooterWidgetColumnInner = styled.div`
  padding-left: 15px;
  padding-right: 15px;
`;

const FooterWidgetTitle = styled.h4`
  margin: 0;
  font-size: 40px;

  &:not(:first-child) {
    margin-top: 50px;
  }
`;

const FooterSearchWidget = styled.form`
  display: flex;
`;

const FooterSearchWidgetInput = styled.input`
  display: block;
  flex-grow: 1;
  margin-right: 8px;
  padding: 18px 20px;
  border: 1px solid #dedfdf;
  font-family: inherit;
  font-size: 16px;
  outline: 0;
`;

const FooterSearchWidgetButton = styled.input`
  display: block;
  padding: 19px 25px;
  color: #fff;
  background-color: #cd2653;
  border-width: 0;
  font-family: inherit;
  font-size: 17px;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  outline: 0;
`;

const FooterLinksWidget = styled.ul`
  margin: 36px 0 5px;
  padding: 0;
  list-style: none;
  color: #cd2653;
  font-size: 21px;
  font-weight: 700;

  &.post-list > li:not(:first-of-type) {
    margin-top: 26px;
  }
`;

const FooterLinksWidgetLI = styled.li`
  &:not(:first-of-type) {
    margin-top: 10px;
  }
`;

const FooterLinksWidgetA = styled(Link)``;

const FooterLinksWidgetSpan = styled.span`
  color: #000;
`;

const FooterBottom = styled.div`
  padding-bottom: 31px;
  color: #6d6d6d;
  font-size: 16px;

  @media (min-width: 768px) {
    padding-bottom: 46px;
    font-size: 18px;
  }
`;

const FooterBottomContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1170px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
`;

const FooterDivier = styled.hr`
  width: 100%;
  margin-top: 0;
  margin-bottom: 31px;
  border-width: 0 0 1px;
  border-color: #dcd7ca;

  @media (min-width: 768px) {
    margin-bottom: 46px;
  }
`;

const FooterCopyright = styled.p`
  margin-bottom: 0;
`;

const FooterCopyrightStrong = styled.strong`
  margin-right: 25px;
  color: #000;
  font-weight: 700;
`;

const FooterCopyrightDesktop = styled.span`
  display: none;

  @media (min-width: 768px) {
    display: inline;
  }
`;

const StyledLink = styled(Link)``;

const BackToTop = styled(Link)``;
const BackToTopDesktop = styled.span`
  display: none;

  @media (min-width: 768px) {
    display: inline;
  }
`;
const BackToTopMobile = styled.span`
  @media (min-width: 768px) {
    display: none;
  }
`;
const BackToTopIcon = styled.span`
  padding-left: 4px;
`;
