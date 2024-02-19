import { useState } from "react";
import { stateSignUp } from "../entityUser";
import { APP_AUTH } from "@/config/configFireBase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ToastAndroid } from "react-native";

const serviceSignUp = () => {
  const [user, setUser] = useState({ ...stateSignUp });
  const auth = APP_AUTH;

  const onChange = (name: string, target: string) => {
    setUser({ ...user, [name]: target });
  };

  const onSubmit = async () => {
    if (user.email == "" && user.password == "") {
      return ToastAndroid.show(
        "Please enter your email and password",
        ToastAndroid.TOP
      );
    }
    await createUserWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        const user = userCredential.user;
        return user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        return {
          errorCode,
          errorMessage,
        };
      });
  };

  return { onChange, onSubmit };
};

export default serviceSignUp;
