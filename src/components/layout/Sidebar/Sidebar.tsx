import { FC } from "react";
import UserItems from "./UserItems";
import { Card } from "@mui/material";
import Menu from "./menu/Menu";
const Sidebar: FC = () => {
  return (
    <>
      <UserItems />
      <Card
        variant="outlined"
        sx={{
          padding: "10px ",
          backgroundColor: "#e5e6e7",
          borderRadius: "16px",
          position: "relative",
          border: "none",
        }}
      >
        <Menu />
      </Card>
    </>
  );
};

export default Sidebar;
