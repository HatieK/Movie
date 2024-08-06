import React from "react";
import useRoutesElements from "../../routes/useRoutesElements";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
