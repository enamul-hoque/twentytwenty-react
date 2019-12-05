import React from "react";
import { connect, styled } from "frontity";

const SiteBranding = ({ state }) => {
  return (
    <SiteBrandEl>
      <h1><a href="/">{ state.frontity.title }</a></h1>
      <p>{ state.frontity.description }</p>
    </SiteBrandEl>
  );
};

export default connect(SiteBranding);

const SiteBrandEl = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;

  > h1 {
    margin: 0 25px 0 0;
    font-size: 24px;
    font-weight: 700;

    > a {
      text-decoration-skip-ink: none;
    }
  }

  > p {
    color: #6d6d6d;
    font-size: 18px;
    font-weight: 500;
  }
`;
