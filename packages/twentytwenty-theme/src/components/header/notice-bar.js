import React from "react";
import { connect, styled } from "frontity";

const NoticeBar = ({ state }) => {
  return (
    <NoticeBarEl>
      <ul>
        <li><a href="https://www.facebook.com/enamul.hoque.mohon" target="_blank" className="fab fa-facebook-f"></a></li>
        <li><a href="https://twitter.com/enamul_h_mohon" target="_blank" className="fab fa-twitter"></a></li>
        <li><a href="https://www.linkedin.com/in/enamul-hoque-mohon/" target="_blank" className="fab fa-linkedin-in"></a></li>
        <li><a href="https://github.com/enamul-hoque" target="_blank" className="fab fa-github"></a></li>
        <li><a href="https://www.youtube.com/channel/UCysI9ya1DdZMmfyrB2gSw1A/featured" target="_blank" className="fab fa-youtube"></a></li>
      </ul>
    </NoticeBarEl>
  );
};

export default connect(NoticeBar);

const NoticeBarEl = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 11px 15px 10px;
  color: #fff;
  background-color: #cd2653;

  > ul {
    display: inline-flex;
    flex-wrap: wrap;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style: none;
    font-size: 16px;

    > li {
      &:not(:last-child) {
        margin-right: 15px;
      }

      > a {
        text-decoration: none;
      }
    }
  }
`;
