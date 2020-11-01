import { GoogleUser } from "expo-google-app-auth";
import { FirebaseUser, Jot, RemoteApi } from "types";
import jotApi from "./jotApi";
import { jot1, jot2 } from "./__mocks__/mockData";

let data: Jot[] | null = null;

const getAll = async () => {
  console.log("APP::REMOTEGET RETURN RESULT");
  if (data == null) {
    console.log("REMOTE API STUB::GETTING LOCAL DATA");
    let result = await jotApi.getall(false);
    result.items = [...result.items, jot1, jot2];
    console.log("REMOTE API STUB::STUBBING WITH LOCAL DATA");
    console.log(result.items);
    data = result.items;
  }
  return data;
};

const set = async () => {
  console.log("APP::REMOTESET");
};

const setUser = async (user: GoogleUser | FirebaseUser) => {
  console.log("REMOTE API STUB::SET USER");
  console.log(user);
};

const api: RemoteApi = {
  getAll,
  set,
  setUser,
};

export default api;
