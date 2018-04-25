import * as React from 'react'
import { StyleSheet, SafeAreaView } from "react-native"
import Counter from './counter/Container'
import store from './store'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
interface Props {

}

interface State {
    text: String
}

const styles: any = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
});

interface FirstViewProps {
    text: String
}
class FirstView extends React.Component<{}, State> {
    render() {
        return (
            <Counter />
        )
    }
}
export default class App extends React.Component<Props, State> {
    render() {
        return (
            <Provider store={store}>
                <SafeAreaView>
                    <FirstView />
                </SafeAreaView>
            </Provider>
        );
    }   
}