import { FC } from "react";
import { Badge, Box } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Icon56LogoVk } from "@vkontakte/icons";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Link } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "22px",
  backgroundColor: alpha("#25416A", 0.8),

  // marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),

    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "35ch",
      "&:focus": {
        width: "50ch",
      },
    },
  },
}));

const Header: FC = () => {
  return (
    <Box
      sx={{
        background: "#4b77a8",
        width: "100%",
        color: "#E5E6E7",
      }}
    >
      <Toolbar>
        <Typography
          variant="h5"
          noWrap
          component="div"
          sx={{
            flexGrow: 1,
            display: { xs: "none", sm: "block" },
            paddingLeft: "40px",
          }}
        >
          <Link to={"/"}>
            <Icon56LogoVk color="white" width={45} height={45} />
          </Link>
        </Typography>

        <Search sx={{ display: { xs: "none", sm: "block" } }}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Поиск"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>

        <Typography
          variant="body2"
          // noWrap
          component="div"
          sx={{
            flexGrow: 1,

            justifyContent: "center  ",
            display: "flex",
          }}
        >
          <Badge badgeContent={15} color="warning" sx={{ marginRight: "16px" }}>
            <NotificationsIcon color="inherit" />
          </Badge>
          Уведомления
        </Typography>
      </Toolbar>
    </Box>
  );
};

export default Header;
