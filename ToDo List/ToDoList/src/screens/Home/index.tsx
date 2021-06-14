import React, {PureComponent} from "react";
import {Button, SafeAreaView, Text, View} from "react-native";
import {AppNavBar} from "../../components/AppNavBar";

interface Prop {
  navigation: any;
}

interface State {
  isLoading: boolean;
  error: boolean;
}

export default class Home extends PureComponent<Prop, State> {
  constructor(props) {
    super(props);
    const { params } = this.props.navigation.state;
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
      <View style={{flex: 1,
        backgroundColor: "white"}}>
        <AppNavBar title={"TEST"} navigation={this.props.navigation} hasBack={false}/>
        <View style={{flex: 1, justifyContent: "center"}}>
          <Text style={{fontWeight: "bold", alignSelf: "center", textAlign: "center"}}> {"No item to display.\n Add any task."} </Text>
        </View>
        {/*<Button title={"NEXT"} onPress={() => {*/}
        {/*  this.props.navigation.navigate("Details");*/}
        {/*}}/>*/}
      </View>
    </SafeAreaView>

  }
}
