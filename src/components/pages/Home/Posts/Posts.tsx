import { Box } from "@mui/material";
import { FC } from "react";
import Card from "@mui/material/Card";
import { IPost } from "../../../../types/types";
import PostHeader from "./PostsHeader/PostsHeader";
import PostTitle from "./PostsContent/PostTitle/PostTitle";
import PostImages from "./PostsContent/PostImages/PostImages";
import PostFooter from "./PostFooter/PostFooter";

export interface IPosts {
  posts: IPost[];
}

const Posts: FC<IPosts> = ({ posts }) => {
  const [imagesExists] = posts;

  return (
    <>
      {posts.map((el) => {
        return (
          <Box
            sx={{
              border: "3px solid #cccccc6b",
              borderRadius: "12px",
              padding: 1.5,
              marginBottom: 1,
            }}
            key={el.title}
          >
            <Card sx={{ width: "100%", border: "none" }} variant="outlined">
              <PostHeader user={el.user} date={el.date} />
              <PostTitle title={el.title} />

              {imagesExists && (
                <Box
                  sx={{
                    width: "100%",
                    // height: "100%",
                    padding: 1.5,
                    borderRadius: "12px",
                  }}
                >
                  <PostImages images={el.images} userId={el.user.id} />
                </Box>
              )}
              <PostFooter />
            </Card>
          </Box>
        );
      })}
    </>
  );
};

export default Posts;
