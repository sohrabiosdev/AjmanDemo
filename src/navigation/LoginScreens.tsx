import React , {Component} from "react";
import {SafeAreaView, View} from "react-native";
import {NavigationActions, NavigationEvents} from "react-navigation";
import LoginNav from "./LoginNav";

interface Props {
    navigation: any;
}

interface State {

}

class LoginScreens extends Component<Props, State> {
    static router = LoginNav.router;
}
