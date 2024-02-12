import { useState } from "react";
import { stateSignUp } from "../entityUser";

const serviceSignUp = () => {
  const [user, setUser] = useState({ ...stateSignUp });

  const onChange = (name: string, target: string) => {
    setUser({ ...user, [name]: target });
  };

  const onSubmit = () => {
    console.log(user);
  };

  return { onChange, onSubmit };
};

export default serviceSignUp;
