import { action } from "typesafe-actions";
import { AuthActions } from "typings/auth";

// Use the `action` helper function provided by `typesafe-actions`.
// This library provides really useful helpers for writing Redux actions in a type-safe manner.
// For more info: https://github.com/piotrwitek/typesafe-actions
//
const setActiveForm = (activeForm: string) =>
  action(AuthActions.SET_ACTIVE_FORM, activeForm);
const setIsAuthed = (isAuthed: boolean) =>
  action(AuthActions.SET_IS_AUTHED, isAuthed);
const setAuthStatus = (authStatus: string) =>
  action(AuthActions.SET_AUTH_STATUS, authStatus);
const setRecoverStatus = (recoverStatus: string) =>
  action(AuthActions.SET_RECOVER_STATUS, recoverStatus);

export { setActiveForm, setIsAuthed, setAuthStatus, setRecoverStatus };
