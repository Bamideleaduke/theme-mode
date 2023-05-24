import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div
      style={{
        backgroundColor: "grey",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1rem 3rem",
      }}
    >
      <h3>Logo</h3>

      <ul
        style={{
          listStyleType: "none",
          flexBasis: "15%",
          display: "flex",
          justifyContent: "space-between",
          //   alignItems: "center",
        }}
      >
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/contact"}>Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
