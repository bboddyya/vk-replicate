import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Icon56LogoVk } from "@vkontakte/icons";
import { Link as RouterLink } from "react-router-dom";
import { TypeSetState } from "../../types/types";
import { IUserData } from "./types";
import { IAuth } from "./Auth";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      <Link color="inherit" href="https://github.com/bboddyya">
        ВКонтакте by Богдан Безуглый©
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export interface ISignIn extends IAuth {
  setUserData: TypeSetState<IUserData>;
  userData: IUserData;
}

const SignIn: React.FunctionComponent<ISignIn> = ({
  setUserData,
  setIsSignIn,
  isSignIn,
  userData,
}) => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const auth = getAuth();
    try {
      await signInWithEmailAndPassword(auth, userData.email, userData.password);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://sun3-8.userapi.com/impg/Y4Q0OVq0R2t8q4_XsGqEepgMOzKefrXX47XUow/E-dFnwJx6mU.jpg?size=960x1280&quality=96&sign=d617384f25c991f7c536e35a5f703f08&type=album)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Icon56LogoVk width={50} height={50} fill="#0077FF" />
            <Typography component="h1" variant="h5">
              Вход
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Телефон или почта"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Пароль"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) =>
                  setUserData({ ...userData, password: e.target.value })
                }
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Запомнить меня"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Войти
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Забыли пароль?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    <RouterLink to={"/"} onClick={() => setIsSignIn(!isSignIn)}>
                      {"Зарегестрироваться"}
                    </RouterLink>
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default SignIn;
