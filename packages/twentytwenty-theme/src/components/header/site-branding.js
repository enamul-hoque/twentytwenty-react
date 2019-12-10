import React from "react";
import { connect, styled } from "frontity";

const SiteBranding = ({ actions, state }) => {
  const onClick = event => {
    event.preventDefault();
    // Set the router to the new url.
    actions.router.set('/');
    window.scrollTo(0, 0);
  };

  return (
    <SiteBrandEl>
      <h1><a href="/" onClick={onClick}>{ state.frontity.title }</a></h1>
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
    display: none;
    color: #6d6d6d;
    font-size: 18px;
    font-weight: 500;
  }

  @media (min-width: 992px) {
    > p {
      display: inline;
    }
  }
`;
