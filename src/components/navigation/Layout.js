import React from "react";
import NavBar from "./NavBar";

export default function Layout(props) {
  return (
    <>
      <NavBar />
      <main style={{ marginTop: "20rem" }}>{props.children}</main>
    </>
  );
}
