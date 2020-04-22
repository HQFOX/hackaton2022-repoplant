import jwt from "jsonwebtoken";

const authenticate = async credentials => {
  return new Promise(resolve => {
    const token = jwt.sign(credentials, "someSecret");
    setTimeout(() => resolve(token), 500);
  });
};

export { authenticate };
