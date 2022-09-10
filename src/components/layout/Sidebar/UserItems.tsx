import { FC } from "react";
import { Box, Card } from "@mui/material";
import { Link } from "react-router-dom";
import { avatar } from "../../../utils/photoSrc";
import { Avatar } from "@mui/material";
import { List, ListItem, ListItemButton } from "@mui/material";
import { ListItemIcon, ListItemText } from "@mui/material";

const UserItems: FC = () => {
  return (
    <Card
      sx={{
        padding: "5px ",
        backgroundColor: "#e5e6e7",
        borderRadius: "16px",
        position: "relative",
        border: "none",
        marginBottom: "20px",
      }}
      variant="outlined"
    >
      <List sx={{ color: "black" }}>
        <ListItem disablePadding>
          <Link to="*">
            <ListItemButton onClick={() => console.log(1)}>
              <ListItemIcon sx={{ color: "#4b77a8" }}>
                <Avatar
                  src={avatar}
                  sx={{
                    width: "46px ",
                    height: "46px ",
                    borderRadius: "50%",
                  }}
                />{" "}
                <Box
                  sx={{
                    position: "absolute",
                    backgroundColor: "#4FB14F",
                    width: "12px",
                    height: "12px",
                    bottom: 7,
                    left: "50px",
                    borderRadius: "50% ",
                    border: "1px solid #e5e6e7",
                  }}
                />
              </ListItemIcon>
              <ListItemText primary={"Арина Cеменова"} />
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
    </Card>
  );
};

export default UserItems;
