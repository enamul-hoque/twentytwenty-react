import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";

const Nav = () => {
  return (
    <SearchFormEl>
      <button><i className="fa fa-search"></i>Search</button>
    </SearchFormEl>
  );
};

export default connect(Nav);

const SearchFormEl = styled.div`
  display: none;

  > button {
    position: relative;
    margin-left: 40px;
    padding: 0 0 0 34px;
    color: #6d6d6d;
    background-color: transparent;
    border-width: 0;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    outline: 0;
    z-index: 0;

    &:before {
      content: " ";
      position: absolute;
      top: 50%;
      left: 0;
      width: 1px;
      height: 26px;
      margin-top: -13px;
      background-color: #dcd7ca;
    }

    > i {
      display: block;
      padding-bottom: 5px;
      color: #000;
      font-size: 25px;
    }
  }

  @media (min-width: 992px) {
    display: block;
  }
`;
