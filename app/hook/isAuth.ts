import { APP_AUTH } from "@/config/configFireBase";
import { useEffect } from "react";
import { router } from "expo-router";

export const isAuth = () => {
  const auth = APP_AUTH;

  useEffect(() => {
    const signup = auth.onAuthStateChanged((user) => {
      if (user) {
        return router.push("/one");
      } 
      // else {
      //   return router.push("/auth/signIn");
      // }
    });

    return () => {
      signup();
    };
  }, [
    auth,
    router,
    auth.onAuthStateChanged,
    auth.currentUser,
    auth.currentUser?.email,
  ]);
};
