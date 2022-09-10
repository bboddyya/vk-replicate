import { CardContent, Typography } from "@mui/material";
import { FC } from "react";

interface IPostTitle {
  title: string;
}

const PostTitle: FC<IPostTitle> = ({ title }) => {
  return (
    <CardContent>
      <Typography variant="body1" color="black">
        {title}
      </Typography>
    </CardContent>
  );
};

export default PostTitle;
