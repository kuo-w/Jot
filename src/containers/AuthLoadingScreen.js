import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActivityIndicator, StatusBar, View } from "react-native";
import { jotGetAll } from "../actions/jots.js";

import firebase from "firebase";

export default function AuthLoadingScreen(props) {
  const isConnected = useSelector(state => state.network.isConnected);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isConnected === null) {
      return;
    }
    if (!isConnected) {
      dispatch(jotGetAll());
      props.navigation.navigate("App");
      return;
    }
    if (firebase.auth().currentUser) {
      props.navigation.navigate("App");
      return;
    }
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        dispatch(jotGetAll());
      }
      props.navigation.navigate(user ? "App" : "Auth");
    });

    return () => unsubscribe();
  }, [isConnected]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "center"
      }}>
      <StatusBar hidden={true} />
      <ActivityIndicator size="large" color="#333" />
    </View>
  );
}
