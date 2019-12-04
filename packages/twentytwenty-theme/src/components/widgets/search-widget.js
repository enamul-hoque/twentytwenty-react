import React from "react";
import { connect, styled } from "frontity";

const SearchWidget = ({ className, placeholder, submitBtnText }) => {
  return (
    <SearchWidgetForm method="get" action="#">
      <input type="search" name="s" placeholder={placeholder} />
      <input type="submit" value={submitBtnText} />
    </SearchWidgetForm>
  );
};

export default connect(SearchWidget);

const SearchWidgetForm = styled.form`
  display: flex;

  & > input[type="search"] {
    display: block;
    flex-grow: 1;
    width: 100%;
    margin-right: 8px;
    padding: 18px 20px;
    border: 1px solid #dedfdf;
    font-family: inherit;
    font-size: 16px;
    outline: 0;
  }

  & > input[type="submit"] {
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
  }
`;
