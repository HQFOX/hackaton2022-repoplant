import jwt from "jsonwebtoken";
import { AuthCredentials } from "typings/auth";

const authenticate = async (credentials: AuthCredentials): Promise<string> => {
  return new Promise<string>(resolve => {
    const token = jwt.sign(credentials, "someSecret");
    setTimeout(() => resolve(token), 500);
  });
};

export { authenticate };
