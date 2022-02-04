import Head from "next/head";
import Image from "next/image";
import "semantic-ui-css/semantic.css";
import NavigationBar from "../Components/NavigationBar";
import "../styles/globals.css";

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
        <Component {...pageProps} />;
      </div>
    </>
  );
}

export default MyApp;
