import { ImageList, ImageListItem } from "@mui/material";
import { FC } from "react";
import { deflate } from "zlib";

interface IPostImages {
  images: string[];
  userId: string;
}

const PostImages: FC<IPostImages> = ({ images, userId }) => {
  return (
    <ImageList
      variant="standard"
      cols={3}
      gap={8}
      sx={{ alignContent: "center " }}
    >
      {images.map((item) => (
        <ImageListItem key={item}>
          <img src={item} alt={userId} loading="lazy" />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default PostImages;
