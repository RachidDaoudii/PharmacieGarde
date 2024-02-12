interface SignUpUser {
  fullname: string;
  email: string;
  mobile: string;
  password: string;
}

interface SignInUser {
  email: string;
  password: string;
}

interface SendEmail {
  email: string;
}

interface VerfiryCode {
  code: string;
}

interface ResetPassword {
  password: string;
  confirmPassword: string;
}

export { SignUpUser, SignInUser, SendEmail, VerfiryCode, ResetPassword };
