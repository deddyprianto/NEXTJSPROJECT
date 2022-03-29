import React from "react";
import Image from "next/image";
import { MenuAlt2Icon } from "@heroicons/react/outline";
import { useDispatch, useSelector } from "react-redux";
import { actionsMenu } from "features/rootapp/appSlice";
import { createTrackedSelector } from "react-tracked";
import { actionsMenuModal } from "features/rootapp/appModal";
const useTrackedSelector = createTrackedSelector(useSelector);

const Navbar = () => {
  const dispatch = useDispatch();
  const state = useTrackedSelector();
  const modal = state.modal.modal;
  const menu = state.app.menu;
  console.log(menu);
  console.log(modal);
  return (
    <div className="w-full h-full grid grid-cols-2">
      <button
        className="mt-10 bg-blue-200 w-20 h-20"
        onClick={() => dispatch(actionsMenu(true))}
      >
        Press To persist
      </button>
      <button
        className="mt-10 bg-blue-200 w-20 h-20"
        onClick={() => dispatch(actionsMenuModal(true))}
      >
        Press noT persist
      </button>
      <div className="w-full flex items-center lg:justify-center justify-end ">
        <div className="w-1/2 flex items-center text-gray-100">
          <Image
            src="/logo.png"
            width={60}
            height={60}
            className="rounded-full bg-white"
            alt="Logo"
          />
          <h1 className="ml-2 text-xl">Bola App</h1>
        </div>
      </div>
      <div className="w-full justify-center items-center hidden lg:flex">
        <ul className="w-1/2 flex justify-evenly items-center text-gray-100">
          <li>Home</li>
          <li>Mision</li>
          <li>Statistic</li>
          <li>Data</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
