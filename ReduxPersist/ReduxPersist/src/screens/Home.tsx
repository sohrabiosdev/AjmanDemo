import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';
import {getCurrentLanguage, isAppRTL, setLanguage} from "../lib/user";

interface Prop {

}

interface State {
    currentLanguage: string;
}

export default class Home extends Component<Prop, State> {


    constructor(props) {
        super(props);
        this.state = { currentLanguage: getCurrentLanguage()};
    }

    componentDidMount() {

    }

    setArabic() {
        setLanguage("ar");
        this.setState({currentLanguage:  getCurrentLanguage()});
    }

    setEnglish() {
        setLanguage("en")
        this.setState({currentLanguage:  getCurrentLanguage()});
    }

    render() {
        return (
            <View>
                <Text style={{fontSize: 24, color: "white", backgroundColor: "red"}}> {this.state.currentLanguage}</Text>
                <Button onPress={() => {this.setArabic();}} title={"SET ARABIC"}/>
                <View style={{height: 20}}/>
                <Button onPress={() => {this.setEnglish();}} title={"SET ENGLISH"}/>
            </View>
        );
    }
}
