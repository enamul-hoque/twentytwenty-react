import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import FeaturedMedia from "../featured-media";

const Item = ({ state, item }) => {
  const author = state.source.author[item.author];
  const date = new Date(item.date);
  const catFirst = state.source.category[ item.categories[0] ];

  return (
    <PostItem>
      <p className="cat"><Link link={ catFirst.link }>{ catFirst.name }</Link></p>

      <h2 className="title"><Link link={ item.link }><span dangerouslySetInnerHTML={{ __html: item.title.rendered }}></span></Link></h2>

      <ul className="meta">
        {author && ( <li><i className="far fa-user"></i>By <Link link={ author.link }>{ author.name }</Link></li> )}
        <li><i className="far fa-calendar"></i><span>{ date.toDateString() }</span></li>
        { item.sticky && ( <li><i className="far fa-bookmark"></i><span>Sticky Post</span></li> ) }
      </ul>

      {state.theme.featured.showOnList && (
        <FeaturedMedia id={item.featured_media} />
      )}

      {item.excerpt && ( <div className="excerpt post-content" dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }}></div> )}

      {item.tags.length ? (
      <ul className="meta bottom">
        <li><i className="fa fa-tags"></i></li>
        {item.tags.map((val, indx) => {
          return <li key={indx}><Link link={ state.source.tag[ val ].link }>{ state.source.tag[ val ].name }</Link></li>;
        })}
      </ul>
      ) : ''}
    </PostItem>
  );
};

export default connect(Item);

const PostItem = styled.article`
  position: relative;
  margin-bottom: 80px;
  text-align: center;
  z-index: 0;

  &:before {
    content: " ";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -7px;
    width: 10px;
    height: 16px;
    margin: 0 auto;
    border-style: solid;
    border-width: 0 1px;
    border-color: #6d6d6d;
    transform: skewX(-20deg);
  }

  &:after {
    content: " ";
    display: block;
    margin: 82px 0 0;
    height: 1px;
    color: #6d6d6d;
    background: linear-gradient(to left, currentColor calc(50% - 16px), transparent calc(50% - 16px), transparent calc(50% + 16px), currentColor calc(50% + 16px));
  }

  > .cat {
    margin-bottom: 30px;
    color: #cd2653;
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 0.55px;
    text-transform: uppercase;

    > a {
      border-bottom: 2px solid;
      text-decoration: none;
      transition: border-color 0.15s linear;

      &:hover {
        border-bottom-color: transparent;
      }
    }
  }

  > .title {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 64px;
    font-weight: 800;
  }

  > .meta {
    display: inline-flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 32px 0 82px;
    list-style: none;
    color: #6d6d6d;
    font-size: 16px;
    font-weight: 500;

    > li:not(:last-child) {
      margin-right: 20px;
    }

    &.bottom {
      display: flex;
      max-width: 580px;
      margin: 0 auto;
      padding-top: 43px;
      padding-bottom: 0;

      > li {
        margin-right: 0;

        & + li + li:before {
          content: ", ";
        }
      }
    }

    i {
      margin-right: 10px;
    }
  }

  > .excerpt {
    max-width: 580px;
    margin: 0 auto;
  }
`;
