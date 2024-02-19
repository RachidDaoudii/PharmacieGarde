import { APP_AUTH } from "@/config/configFireBase";
import { router } from "expo-router";
import { signOut } from "firebase/auth";

const logout = async () => {
  const auth = APP_AUTH;
  console.log("logout");

  await signOut(auth).then(() => {
    return router.push("/auth/signIn");
  });
};

export default logout;
