import React, { FC } from "react";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Grid from "@mui/material/Grid";

interface ChildrenProps {
  children: React.ReactNode;
}

const Layout: FC<ChildrenProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Grid container spacing={3} marginTop={2} marginX={6}>
        <Grid item xs={1.7}>
          <Sidebar />
        </Grid>

        <Grid item xs={7}>
          {children}
        </Grid>

        <Grid item xs={1.7}>
          <Sidebar />
        </Grid>
      </Grid>
    </>
  );
};

export default Layout;
