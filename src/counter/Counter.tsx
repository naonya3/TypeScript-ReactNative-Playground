import * as React from "react";
import { CounterState } from "./module";
import { ActionDispatcher } from "./Container";
import { View, Text, Button, SafeAreaView } from "react-native";

interface Props {
  value: {counter: CounterState};
  actions: ActionDispatcher;
}

export class Counter extends React.Component<Props, {}> {

  render() {
    return (
      <View>
        <SafeAreaView>
        <Text>score: {this.props.value.counter.num}</Text>
        <Button onPress={() => this.props.actions.increment(3)} title="Increment 3" />
        <Button onPress={() => this.props.actions.decrement(2)} title="Decrement 2" />
        </SafeAreaView>
      </View>
    )
  }
}