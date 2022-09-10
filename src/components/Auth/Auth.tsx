// import Registration from "../Registration/Registration";
import SignIn from "./SignIn";
import { useState } from "react";
import { IUserData } from "./types";
import Registration from "./Registration/Registration";
import { TypeSetState } from "../../types/types";

export interface IAuth {
  isSignIn: boolean;
  setIsSignIn: TypeSetState<boolean>;
}
const Auth: React.FunctionComponent<IAuth> = ({ isSignIn, setIsSignIn }) => {
  const [userData, setUserData] = useState<IUserData>({
    email: "",
    password: "",
  } as IUserData);
  return (
    <>
      {isSignIn ? (
        <SignIn
          setUserData={setUserData}
          setIsSignIn={setIsSignIn}
          isSignIn={isSignIn}
        />
      ) : (
        <Registration setIsSignIn={setIsSignIn} isSignIn={isSignIn} />
      )}
    </>
  );
};

export default Auth;
