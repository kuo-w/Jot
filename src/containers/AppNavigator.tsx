import React, { ReactElement, useEffect } from "react";

import JotScreen from "@containers/JotScreen";
import HistoryScreen from "@containers/HistoryScreen";
import Tab from "@containers/AppBottomTabNavigator";
import { checkUserAuth } from "@store/authSlice";
import { getall } from "@store/jotSlice";
import { useAppDispatch } from "@store/index";
import TopicsScreen from "./TopicsScreen";

const AppNavigator = (): ReactElement => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        (async () => {
            console.log("APP NAV::DISPATCH CHECKAUTH EFFECT");
            await dispatch(checkUserAuth());
            await dispatch(getall());
        })();
    }, []);

    return (
        <Tab.Navigator>
            <Tab.Screen name="Jot" component={JotScreen} />
            <Tab.Screen name="Topics" component={TopicsScreen} />
            <Tab.Screen name="History" component={HistoryScreen} />
        </Tab.Navigator>
    );
};

export default AppNavigator;
