import React from "react";
import "./Sidebar.css";
import { IoIosApps, IoIosWallet } from "react-icons/io";
import { TbListDetails } from "react-icons/tb";
import { MdSpaceDashboard } from "react-icons/md";
import { HiOutlineArrowsUpDown } from "react-icons/hi2";
const Sidebar = ({ sidebar }) => {
  return (
    <section className="sidebar__container">
      <div className="sidebar__wrapper">
        <div className="dashboard">
          <ul className="menu__items">
            <li className="menu__links">
              <span>
                <MdSpaceDashboard className="icon mb__-8 " /> Dashboard
              </span>
            </li>
            <li className="menu__links">
              <span>
                <IoIosApps className="icon mb__-8 " />
                Apps
              </span>
            </li>
            <li className="menu__links">
              <span>
                <IoIosWallet className="icon mb__-8 " />
                wallet
              </span>
            </li>
            <li className="menu__links">
              <span>
                <HiOutlineArrowsUpDown className="icon mb__-8 " /> transactions
              </span>
            </li>
            <li className="menu__links">
              <span>
                <TbListDetails className="icon mb__-8 " /> coin details
              </span>
            </li>
            <li className="menu__links"></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
