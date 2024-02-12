import {
  SignInUser,
  SignUpUser,
  SendEmail,
  VerfiryCode,
  ResetPassword,
} from "../interface/auth";

const stateSignUp: SignUpUser = {
  fullname: "",
  email: "",
  mobile: "",
  password: "",
};
const stateSignIn: SignInUser = {
  email: "",
  password: "",
};

const stateSendEmail: SendEmail = {
  email: "",
};

const stateVerfiryCode: VerfiryCode = {
  code: "",
};

const stateResetPassword: ResetPassword = {
  password: "",
  confirmPassword: "",
};

export {
  stateSignUp,
  stateSignIn,
  stateSendEmail,
  stateVerfiryCode,
  stateResetPassword,
};
