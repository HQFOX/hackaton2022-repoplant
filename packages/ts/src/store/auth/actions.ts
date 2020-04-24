import { action } from "typesafe-actions";
import { AuthActions } from "typings/auth";

// Use the `action` helper function provided by `typesafe-actions`.
// This library provides really useful helpers for writing Redux actions in a type-safe manner.
// For more info: https://github.com/piotrwitek/typesafe-actions
//
const setAuth = (isAuthed: boolean) => action(AuthActions.SET_AUTH, isAuthed);

export { setAuth };
