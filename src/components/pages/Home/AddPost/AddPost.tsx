import { ChangeEvent, FC, KeyboardEvent } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { IconButton } from "@mui/material";
import MusicNoteOutlinedIcon from "@mui/icons-material/MusicNoteOutlined";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useState } from "react";
import { IPost, TypeSetState } from "../../../../types/types";
import { users } from "../../../../utils/users/users";

interface IAddPost {
  setPosts: TypeSetState<IPost[]>;
}

const AddPost: FC<IAddPost> = ({ setPosts }) => {
  const [input, setInput] = useState<string>("");

  const handlechange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const addPostHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setPosts((prev): IPost[] => [
        {
          date: "5 минут назад",
          title: input,
          user: users[0],
          images: [
            "https://sun3-11.userapi.com/impg/auiI3qpav9bcJ-6PTXQPbhYjekoWTpsFuDaV7A/kzKoEe4GoEU.jpg?size=1440x1800&quality=95&sign=560f4a5df902c94b796dbf61c0cd2aec&type=album",
          ],
        },
        ...prev,
      ]);
      setInput("");
    }
  };
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      sx={{
        border: "2px solid #cccccc6b",
        borderRadius: "12px",
        marginBottom: "12px",
      }}
      rowGap={4}
    >
      <Grid item xs={10.5}>
        <Box
          sx={{
            padding: 1.5,
          }}
        >
          <TextField
            InputProps={{
              sx: {
                bgcolor: "#f2f4f5",
                borderRadius: "15px",
                border: "none",
              },
            }}
            sx={{ width: "100%" }}
            label="Что у вас нового? "
            multiline
            maxRows={1}
            size="small"
            value={input}
            onChange={handlechange}
            onKeyDown={addPostHandler}
          />
        </Box>
      </Grid>
      <Grid item xs={1.5}>
        <IconButton>
          <CameraAltOutlinedIcon />
        </IconButton>
        <IconButton>
          <MusicNoteOutlinedIcon />
        </IconButton>
        <IconButton>
          <MenuOutlinedIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default AddPost;
