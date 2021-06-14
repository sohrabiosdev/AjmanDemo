import React, {Component} from "react";
import {Image, StyleProp, Text, TextStyle, TouchableWithoutFeedback, View, ViewStyle} from "react-native";
import NavigationService from "../navigation/NavigationService";
import {NavigationActions} from "react-navigation";
import {StaticStyles} from "../common/Styles";

interface Props {
    navigation: any;
    title: string;

    hasBack: boolean;
    backIcon?: string;
    backIconAction?: Function;
    backIconColor?: string;
    extraText?: string;
    extraTextAction?: Function;
    extraTextColor?: string;
    style?: StyleProp<ViewStyle>;
    titleStyle?: StyleProp<TextStyle>;
}

interface State {

}

export class AppNavBar extends Component <Props, State> {
    constructor(props, context) {
        super(props, context);
    }

    private getBackIcon() {
        return (
            <View>
                <View style={{width: 50, height: 50, alignItems: "center", justifyContent: "center"}}>
                    <Image style={{width: 25, height: 25}} source={require("../../assets/images/back.png")}/>
                </View>
                <View style={{width: 10}}/>
            </View>
        );

    }

    private getTitle() {
        return (
            <View style={{flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text style={{fontWeight: "bold"}}> {this.props.title} </Text>
            </View>
        );
    }

    renderBar(props) {
        const back = this.getBackIcon();
        const title = this.getTitle();
        return (
            <View style={[StaticStyles.shadow, {flexDirection: "row", flex: 1}]}>
                {props.hasBack && <TouchableWithoutFeedback onPress={() => {
                    if (props.backIconAction) {
                        props.backIconAction();
                    } else {
                        NavigationService.navigator().dispatch(NavigationActions.back());
                    }
                }}>
                    {back}
                </TouchableWithoutFeedback>}
                {title}
            </View>
        );
    }

    render() {
        const props = this.props;
        return (
            <View
                style={[props.style, {minHeight: 50}]}>
                {this.renderBar(props)}
            </View>
        );
    }
}
