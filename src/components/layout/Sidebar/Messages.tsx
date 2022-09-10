import { FC } from "react";
import { Link } from "react-router-dom";
import { List, ListItem, ListItemButton } from "@mui/material";
import { ListItemIcon, ListItemText } from "@mui/material";
import ForumIcon from "@mui/icons-material/Forum";
import { useNavigate } from "react-router-dom";

const Messages: FC = () => {
  const navigate = useNavigate();
  return (
    // <Link
    //   to="/messages"
    //   style={{
    //     display: "flex",
    //     alignItems: "center",
    //     textDecoration: "none",
    //     color: "#111",
    //   }}
    // >
    <List>
      <ListItem disablePadding>
        <ListItemButton
          sx={{ width: "100%" }}
          // style={{ backgroundColor: "transparent" }}
          onClick={() => navigate("/messages")}
        >
          <ListItemIcon sx={{ color: "#4b77a8" }}>
            <ForumIcon />
          </ListItemIcon>
          <ListItemText primary="Мои Сообщения" />
        </ListItemButton>
      </ListItem>
    </List>
    // </Link>
  );
};

export default Messages;
