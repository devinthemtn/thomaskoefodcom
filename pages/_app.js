import Head from "next/head";
import Image from "next/image";
import { MDXProvider } from "@mdx-js/react";
import "semantic-ui-css/semantic.css";
import NavigationBar from "../Components/NavigationBar";
import "../styles/globals.css";
import React from "react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>ThomasKoefod.com</title>
        <meta name="Some random personal stuff" content="My personal Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="main-Wrapper">
        <h1 className="main-header-container">
          <img className="main-header-image" src="oldLogo3.jpeg" />
        </h1>
        <p className="main-header-tagline">tagline goes here</p>
        <NavigationBar />
        <MDXProvider components={components}>
          <div className="page-main-content">
            <Component {...pageProps} />
          </div>
        </MDXProvider>
      </div>
    </>
  );
}

const components = {
  wrapper: ({ components, ...rest }) => <main {...rest} />,
  wrappedr: (props) => {
    console.log(" this is the wrapper running.", props);
    return (
      <div className="markdownDoc">
        <h2 style={{ color: "white" }}> this is a markdown document</h2>
        <main {...props} />
      </div>
    );
  },
};

export default MyApp;
