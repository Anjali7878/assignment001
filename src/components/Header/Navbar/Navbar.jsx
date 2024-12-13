import React from "react";
import Dropdown from "./Dropdown/Dropdown";

const Navbar = () => {
  const NavList = ["Savings", "International", "About Us", "Contact Us"];
  const navData = [
    {
      title: "Savings Accounts",
      lists: [
        [
          "Investment",
          "Regular Savings Accounts",
          "Deluxe Savings Accounts",
          "Super Savings Accounts",
          "Family Savings Accounts",
        ],
        ["Fixed Deposite", "Savings Accounts", "Deposits"],
        [
          "Main Accounts",
          "Savings Accounts",
          "Deposits",
          "Current Accounts",
          "Current Accounts",
        ],
        ["Main Accounts", "Savings Accounts", "Deposits", "Current Accounts"],
      ],
    },
    {
      title: "Deposites",
      lists: [
        [
          "Investment",
          "Millionaire Investment Plan",
          "Another Plan",
          "Cool Plan",
        ],
        ["Savings Accounts", "Deposits", "Fixed"],
        [
          "Main Accounts",
          "Savings Accounts",
          "Deposits",
          "Current Accounts",
          "New Accounts",
        ],
      ],
    },
    { title: "Current Account" },
    { title: "Cards" },
    { title: "Loans" },
  ];
  return (
    <nav className="flex justify-between items-center w-full relative">
      <ul className="flex relative gap-10">
        {NavList.map((item, idx) => (
          <li key={idx} className="hover:text-[#1D4ED8]">
            {item}
          </li>
        ))}
      </ul>
      {/* <Dropdown listData={navData} /> */}
      <img
        src="/images/profileimage.jpeg"
        alt="profile"
        className="border border-black rounded-full w-8 h-8"
      />
    </nav>
  );
};

export default Navbar;
