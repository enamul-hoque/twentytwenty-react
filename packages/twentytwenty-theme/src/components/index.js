import React from "react";
import { Global, css, connect, styled, Head } from "frontity";
import fontInterVerUpright from "./fonts/Inter-upright-var.woff2";
import fontInterVerItalic from "./fonts/Inter-italic-var.woff2";
import Header from "./header";
import List from "./list";
import Post from "./post";
import Page404 from "./page404.js";
import Loading from "./loading";
import Title from "./title";
import Footer from "./footer";

// Theme is the root React component of our theme. The one we will export
// in roots.
const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);

  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" />
      </Head>

      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={globalStyles} />

      {/* Add the header of the site. */}
      <Header />

      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
      <Main>
        {(data.isFetching && <Loading />) ||
          (data.isArchive && <List />) ||
          (data.isPostType && <Post />) ||
          (data.is404 && <Page404 />)}
      </Main>

      {/* Add the Footer of the site. */}
      <Footer />
    </>
  );
};

export default connect(Theme);

const globalStyles = css`
  * { box-sizing: border-box; }

  @font-face {
    font-family: "Inter var";
    font-weight: 100 900;
    font-style: normal;
    font-display: swap;
    src: url(${fontInterVerUpright}) format("woff2");
  }

  @font-face {
    font-family: "Inter var";
    font-weight: 100 900;
    font-style: italic;
    font-display: swap;
    src: url(${fontInterVerItalic}) format("woff2");
  }

  body {
    margin: 0;
    font-family: "Inter var", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, sans-serif;
    line-height: 1.2;
  }

  a {
    text-decoration: none;
  }

  a,
  a:visited {
    color: inherit;
  }

  a:hover {
    text-decoration: underline;
  }

  p, ul { margin: 0 0 10px; }
  p:last-child, ul:last-child { margin-bottom: 0; }

  .container {
    width: 100%;
    max-width: 1170px;
    margin: 0 auto;
    padding: 0 15px;
  }

  .container-fluid {
    width: 100%;
    padding: 0 15px;
  }

  .d-flex {
    display: flex;
  }

  .flex-center {
    align-items: center;
  }
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  background-image: linear-gradient(
    180deg,
    rgba(66, 174, 228, 0.1),
    rgba(66, 174, 228, 0)
  );
`;
