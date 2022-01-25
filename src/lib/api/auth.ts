import jwt from "jwt-encode";

const authenticate = async (credentials: AuthCredentials): Promise<string> =>
  new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      const { username, password } = credentials;
      if (username !== "admin" || password !== "password") reject();

      const token = jwt(credentials, "someSecret");
      resolve(token);
    }, 500);
  });

export { authenticate };
