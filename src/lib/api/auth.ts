import jwt from "jwt-simple";
import { AuthCredentials } from "typings/auth";

const authenticate = async (credentials: AuthCredentials): Promise<string> =>
  new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      const { username, password } = credentials;
      if (username !== "admin" || password !== "password") reject();

      const token = jwt.encode(credentials, "someSecret");
      resolve(token);
    }, 500);
  });

const recoverPassword = async (email: string): Promise<string> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!email.length) reject();
      resolve();
    }, 500);
  });

export { authenticate, recoverPassword };
