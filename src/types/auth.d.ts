interface AuthCredentials {
  username: string;
  password: string;
}

interface AuthContextValue {
  isAuthed: boolean;
  authStatus: string;
  login: (value: AuthCredentials) => void;
  logout: () => void;
}

interface RecoverContextValue {
  recoverStatus: string;
  activeForm: string;
  setActiveForm: (value: string) => void;
  recover: (value: string) => void;
}
