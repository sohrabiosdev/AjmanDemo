import * as React from "react";
import { Component } from "react";
import { View } from "react-native";

interface Props {
  navigation: any;
}

interface State {
  loading?: boolean;
}

export default class Home extends Component<Props, State> {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      </View>
    );
  }
}
