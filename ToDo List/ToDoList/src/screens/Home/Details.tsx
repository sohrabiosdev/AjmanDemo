import React, {PureComponent} from "react";
import {SafeAreaView, View} from "react-native";
import {AppNavBar} from "../../components/AppNavBar";

interface Prop {
    navigation: any;
}

interface State {
    isLoading: boolean;
    error: boolean;
}

export default class Details extends PureComponent<Prop, State> {
    constructor(props) {
        super(props);
        const {params} = this.props.navigation.state;
        if (params) {
            this.state = {
                isLoading: false,
                error: false
            };
        }
    }

    private navigate(component) {
        this.props.navigation.navigate(component);
    }

    render() {
        return <SafeAreaView style={{flex: 1}}>
            <View style={{
                flex: 1,
                backgroundColor: "white"
            }}>
                <AppNavBar title={"Details"} navigation={this.props.navigation} hasBack={true}/>
            </View>
        </SafeAreaView>;
    }
};
