import { FC } from "react";
import { List, ListItem, ListItemButton } from "@mui/material";
import { ListItemIcon, ListItemText } from "@mui/material";
import { dataMenu } from "./dataMenu";
import { useNavigate } from "react-router-dom";
import { IMenu } from "../../../../types/types";

const Menu: FC = () => {
  const navigate = useNavigate();

  return (
    <List sx={{ color: "black" }}>
      {dataMenu.map((element: IMenu) => {
        return (
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate(element.path)}>
              <ListItemIcon sx={{ color: "#4b77a8" }}>
                {<element.icon />}{" "}
              </ListItemIcon>
              <ListItemText primary={element.title} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};

export default Menu;
