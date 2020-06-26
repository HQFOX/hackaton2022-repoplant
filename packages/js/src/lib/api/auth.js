import jwt from "jwt-simple";
import Promise from 'promise-polyfill';

const authenticate = async credentials => {
  return new Promise(resolve => {
    const token = jwt.encode(credentials, "someSecret");
    setTimeout(() =>  resolve(token), 500);
  });
};

export { authenticate };
