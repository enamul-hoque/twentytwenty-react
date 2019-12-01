import React from "react";
import { connect } from "frontity";

const Link = ({ actions, link, className, children, target }) => {
  const onClick = event => {
    // Do nothing if it's an external link
    if (link.startsWith("http") || link.startsWith("#")) return;

    event.preventDefault();
    // Set the router to the new url.
    actions.router.set(link);
    window.scrollTo(0, 0);
  };

  return (
    <a href={link} onClick={onClick} className={className} target={target}>
      {children}
    </a>
  );
};

export default connect(Link);
