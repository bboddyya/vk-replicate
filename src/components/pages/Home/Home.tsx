import React, { FC } from "react";
import AddPost from "./AddPost/AddPost";
import { Box } from "@mui/material";
import { useState } from "react";
import { IPost } from "../../../types/types";
import Posts from "./Posts/Posts";
import { initialPosts } from "./Posts/initialPosts/postsData";

const Home: FC = () => {
  const [posts, setPosts] = useState<IPost[]>(initialPosts);
  return (
    <Box>
      <AddPost setPosts={setPosts} />
      <Posts posts={posts} />
    </Box>
  );
};

export default Home;
