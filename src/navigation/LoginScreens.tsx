import React, {Component} from "react";
import {SafeAreaView, View} from "react-native";
import LoginNav from "./LoginNav";

interface Props {
    navigation?: any;
}

interface State {

}

class LoginScreens extends Component<Props, State> {
    static router = LoginNav.router;

    render() {
        return (
            <SafeAreaView style={{flex: 1}}>
                <View style={{flex: 1}}>
                    <LoginNav
                        navigation={this.props.navigation}/>
                </View>
            </SafeAreaView>
        );
    }
}

export default LoginScreens;
