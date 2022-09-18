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

  console.log(userData);
  return (
    <>
      {isSignIn ? (
        <SignIn
          setUserData={setUserData}
          setIsSignIn={setIsSignIn}
          isSignIn={isSignIn}
          userData={userData}
        />
      ) : (
        <Registration
          setUserData={setUserData}
          setIsSignIn={setIsSignIn}
          isSignIn={isSignIn}
          userData={userData}
        />
      )}
    </>
  );
};

export default Auth;
