import { useState } from "react";
import { stateSignIn } from "../entityUser";
import { ToastAndroid } from "react-native";
import { APP_AUTH } from "@/config/configFireBase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { isAuth } from "@/app/hook/isAuth";

const serviceSignUp = () => {
  const auth = APP_AUTH;

  const [user, setUser] = useState({ ...stateSignIn });

  const onChange = (name: string, target: string) => {
    setUser({ ...user, [name]: target });
  };

  isAuth();

  const onSubmit = async () => {
    if (user.email == "" && user.password == "") {
      return ToastAndroid.show(
        "Please enter your email and password",
        ToastAndroid.TOP
      );
    }

    const userlogin = await signInWithEmailAndPassword(
      auth,
      user.email,
      user.password
    );
  };

  return { onChange, onSubmit };
};

export default serviceSignUp;
