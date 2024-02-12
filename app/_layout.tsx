import { Stack } from "expo-router";

export default function layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: "Home", headerShown: false }}
      />
      <Stack.Screen
        name="auth/signUp"
        options={{ title: "SignUp", headerShown: false }}
      />
      <Stack.Screen
        name="auth/signIn"
        options={{ title: "SignIn", headerShown: false }}
      />
      <Stack.Screen
        name="auth/forgetPassword"
        options={{ title: "forgetPassword", headerShown: false }}
      />

      <Stack.Screen
        name="auth/verifyEmail"
        options={{ title: "verifyEmail", headerShown: false }}
      />

      <Stack.Screen
        name="auth/restPassword"
        options={{ title: "restPassword", headerShown: false }}
      />

      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="[missing]" options={{ title: "404" }} />
    </Stack>
  );
}
