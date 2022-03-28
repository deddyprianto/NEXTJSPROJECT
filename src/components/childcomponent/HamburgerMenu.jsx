import React from "react";
import { pushRotate as Menu } from "react-burger-menu";
import { useSelector } from "react-redux";
import { createTrackedSelector } from "react-tracked";

const useTrackedSelector = createTrackedSelector(useSelector);

const HamburgerMenu = () => {
  const state = useTrackedSelector();
  const menu = state.appSlice.menu;

  const styles = {
    bmBurgerButton: {
      position: "fixed",
      width: "36px",
      height: "30px",
      left: "36px",
      top: "36px",
    },
    bmBurgerBars: {
      background: "gray",
    },
    bmBurgerBarsHover: {
      background: "#a90000",
    },
    bmCrossButton: {
      height: "24px",
      width: "24px",
    },
    bmCross: {
      background: "#bdc3c7",
    },
    bmMenuWrap: {
      position: "fixed",
      height: "100%",
    },
    bmMenu: {
      background: "#373a47",
      padding: "2.5em 1.5em 0",
      fontSize: "1.15em",
    },
    bmMorphShape: {
      fill: "#373a47",
    },
    bmItemList: {
      color: "#b8b7ad",
      padding: "0.8em",
    },
    bmItem: {
      display: "inline-block",
    },
    bmOverlay: {
      background: "rgba(0, 0, 0, 0.3)",
    },
  };
  return (
    <Menu
      pageWrapId={"page-wrap"}
      outerContainerId={"outer-container"}
      isOpen={menu}
      styles={styles}
    >
      <ul>
        <li id="home" className="menu-item">
          Home
        </li>
        <li id="about" className="menu-item">
          About
        </li>
        <li id="contact" className="menu-item">
          Contact
        </li>
      </ul>
    </Menu>
  );
};

export default HamburgerMenu;
