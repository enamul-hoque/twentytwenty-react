import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";

const Nav = ({ state }) => {
  return (
    <NavEl>
      <ul>
        {state.theme.menu.map(([name, link]) => (
          <li key={name}>
            <Link link={link}>{name}</Link>
          </li>
        ))}
      </ul>
    </NavEl>
  );
};

export default connect(Nav);

const NavEl = styled.nav`
  display: none;
  margin-left: auto;

  > ul {
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    list-style: none;
    color: #cd2653;
    font-size: 18px;
    font-weight: 500;

    > li {
      &:not(:last-child) {
        margin-right: 25px;
      }
    }
  }

  @media (min-width: 992px) {
    display: block;
    
    > ul {
      flex-wrap: nowrap;
      white-space: nowrap;
    }
  }
`;
