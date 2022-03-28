import React from "react";
import Navbar from "./childcomponent/Navbar";
import HamburgerMenu from "./childcomponent/HamburgerMenu";

const Parent = ({ children }) => {
  return (
    <div id="outer-container">
      {/* <HamburgerMenu /> */}
      <main
        id="page-wrap"
        className="grid grid-rows-16 w-full h-screen bg-gray-900 font-nunito"
      >
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default Parent;
