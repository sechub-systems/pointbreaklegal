import React from "react";
import Header from "../Header/Header";
// import Footer from "../Footer/Footer";
import Routing from "../Routing/Routing";
// import ScrollToTop from "react-scroll-to-top";
// import ScrollToTopComponent from "../ScrollToTop";

const Layout = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <Routing />
      {/* <ScrollToTop smooth />
      <div>
        <ScrollToTopComponent />
        <Routing />
      </div>
      <Footer /> */}
    </>
  );
};

export default Layout;
