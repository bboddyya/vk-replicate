import { CardActions, IconButton } from "@mui/material";
import { FC, memo } from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";

const PostFooter: FC = () => {
  return (
    <CardActions disableSpacing>
      <IconButton aria-label="like">
        <FavoriteBorderOutlinedIcon sx={{ fontSize: "30px" }} />
      </IconButton>
      <IconButton aria-label="comment">
        <ChatBubbleOutlineOutlinedIcon sx={{ fontSize: "30px" }} />
      </IconButton>
    </CardActions>
  );
};

export default memo(PostFooter);
