import React from "react";
import NavBar from "./NavBar";
import { ThemeProvider } from "@mui/material";
import theme from "../../assets/theme";

export default function Layout(props) {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <main style={{ marginTop: "20rem" }}>{props.children}</main>
    </ThemeProvider>
  );
}
