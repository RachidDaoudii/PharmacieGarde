import { useState } from "react";
import { stateSignIn } from "../entityUser";
import { ToastAndroid } from "react-native";
const serviceSignUp = () => {
  const [user, setUser] = useState({ ...stateSignIn });

  function showToast() {
    ToastAndroid.show("Request sent successfully!", ToastAndroid.TOP);
  }
  const onChange = (name: string, target: string) => {
    setUser({ ...user, [name]: target });
  };

  const onSubmit = () => {
    console.log(user);
    showToast();
  };

  return { onChange, onSubmit };
};

export default serviceSignUp;
