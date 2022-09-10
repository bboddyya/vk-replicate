import { Avatar, CardHeader, IconButton } from "@mui/material";
import { FC } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IUser } from "../../../../../types/types";

interface IHeaderPostProps {
  user: IUser;
  date: string;
}

const PostHeader: FC<IHeaderPostProps> = ({ user, date }) => {
  return (
    <CardHeader
      avatar={<Avatar src={user.avatar} aria-label="recipe" />}
      action={
        <IconButton aria-label="settings">
          <MoreVertIcon />
        </IconButton>
      }
      title={user.name}
      subheader={date}
    />
  );
};

export default PostHeader;
