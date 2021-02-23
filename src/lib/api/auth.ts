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

export { authenticate };
