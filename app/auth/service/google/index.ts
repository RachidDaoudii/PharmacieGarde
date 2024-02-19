// import {
//   GoogleSignin,
//   GoogleSigninButton,
//   statusCodes,
// } from "@react-native-google-signin/google-signin";
// import { useEffect, useState } from "react";
// const ServiceGoogle = () => {
//   const [userInfo, setUserInfo] = useState({});
//   const [error, setError] = useState({});

//   useEffect(() => {
//     GoogleSignin.configure({
//       webClientId:
//         "389979931733-okvfhrunvr8kj4hluphabfut5kpm003j.apps.googleusercontent.com",
//     });
//   }, []);

//   const signIn = async () => {
//     try {
//       await GoogleSignin.hasPlayServices();
//       const user = await GoogleSignin.signIn();
//       setUserInfo(user);
//     } catch (error) {
//       return { error: error };
//     }
//   };

//   const signOut = async () => {
//     try {
//       await GoogleSignin.revokeAccess();
//       await GoogleSignin.signOut();
//       setUserInfo({});
//     } catch (error) {
//       return { error: error };
//     }
//   };

//   return { signIn, signOut, userInfo, error };
// };

// export default ServiceGoogle;
