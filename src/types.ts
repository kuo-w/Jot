import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "@store/index";
import type { Timestamp } from "@firebase/firestore-types";
import { ReactNode } from "react";
import { LoginResult } from "@api/googleApi";

export type FirebaseUser = {
  uid: string;
  displayName: string | null;
  email: string | null;
  createdAt: string | undefined;
  lastSignInTime: string | undefined;
  isAnonymous: boolean;
};

export type Jot = {
  text: string;
  createdAt: string;
  guid: string;
  userid?: string;
};

export type JotGetAll = {
  items: Jot[];
  remoteFetch: boolean;
};

export type CreatedAtTimestamp = {
  createdAt: Timestamp;
};

export type ShouldFetchRemote = boolean;

export type ThunkResult<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export type AppNavigatorParamList = {
  Jot: undefined;
  History: undefined;
  Settings: undefined;
  SignIn: undefined;
};

export type RootStackParamList = {
  AuthLoading: undefined;
  SignInOptions: undefined;
  App: undefined;
};

export type RemoteApi = {
  getall: () => Promise<Jot[] | undefined>;
  set: (jot: Jot) => Promise<void>;
};

export type ScrollView = {
  props: {
    [scrollToFocusedInput: string]: (reactNode: ReactNode) => void;
  };
};

export type LoginOAuthResult = LoginResult | null;

export type AuthOption = "Google" | "Anonymous";
