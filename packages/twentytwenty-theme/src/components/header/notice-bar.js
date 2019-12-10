import React from "react";
import { connect, styled } from "frontity";

const NoticeBar = () => {
  return (
    <NoticeBarEl>
      <ul>
        <li><a href="https://www.facebook.com/enamul.hoque.mohon" target="_blank" className="fab fa-facebook-f"></a></li>
        <li><a href="https://twitter.com/enamul_h_mohon" target="_blank" className="fab fa-twitter"></a></li>
        <li><a href="https://www.linkedin.com/in/enamul-hoque-mohon/" target="_blank" className="fab fa-linkedin-in"></a></li>
        <li><a href="https://github.com/enamul-hoque" target="_blank" className="fab fa-github"></a></li>
        <li><a href="https://www.youtube.com/channel/UCysI9ya1DdZMmfyrB2gSw1A/featured" target="_blank" className="fab fa-youtube"></a></li>
      </ul>

      <a href="https://wordpress.org/plugins/elementskit-lite/" target="_blank" className="sponsor">Sponsor <i className="far fa-heart"></i> ElementsKit Elementor Addon</a>

      <a href="https://github.com/enamul-hoque/twentytwenty-react/archive/master.zip" download><i className="fa fa-download"></i>Download TwentyTwenty (React)</a>
    </NoticeBarEl>
  );
};

export default connect(NoticeBar);

const NoticeBarEl = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 11px 15px 10px;
  color: #fff;
  background-color: #cd2653;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  z-index: 999;

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

  > a {
    font-size: 0;
    font-weight: 600;

    > i {
      font-size: 14px;
    }

    &.sponsor {
      margin-left: auto;
      margin-right: auto;
    }

    @media (min-width: 768px) {
      font-size: 14px;

      > i {
        margin-right: 8px;
      }

      &.sponsor {
        > i {
          margin-left: 3px;
          margin-right: 3px;
        }
      }
    }
  }
`;
