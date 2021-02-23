export interface AuthCredentials {
  username: string;
  password: string;
}

export interface AuthContextType {
  isAuthed: boolean;
  authStatus: string;
  login: (value: AuthCredentials) => void;
  logout: () => void;
}

export interface RecoverContextType {
  recoverStatus: string;
  activeForm: string;
  setActiveForm: (value: string) => void;
  recover: (value: string) => void;
}
