import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

// import React from 'react';
// import {AppRegistry, StyleSheet, Text, View} from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';
//
// import {applyMiddleware, createStore} from 'redux';
// import {persistReducer, persistStore} from 'redux-persist';
// import {Provider} from 'react-redux';
// import {PersistGate} from 'redux-persist/integration/react';
// import rootReducer from './src/reducers';
// import rootSaga from './src/sagas';
// import RootContainer from './src/Root/RootContainer.Screen';
// import 'react-native-gesture-handler';
//
// class HelloWorld extends React.Component {
//
//     constructor(props) {
//         super(props);
//         storeData = async () => {
//             try {
//                 await AsyncStorage.setItem('@storage_Key', 'stored value')
//             } catch (e) {
//                 // saving error
//             }
//         }
//     }
//
//
//     render() {
//         return (
//             <View style={styles.container}>
//                 <Text style={styles.hello}>Hello, World</Text>
//             </View>
//         );
//     }
// }
// var styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//     },
//     hello: {
//         fontSize: 20,
//         textAlign: 'center',
//         margin: 10,
//     },
// });
//
// AppRegistry.registerComponent('DemoIntegrateRN', () => HelloWorld);
