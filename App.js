import React, {Component} from 'react';
import createSagaMiddleware from 'redux-saga';
import AsyncStorage from '@react-native-community/async-storage';
import {applyMiddleware, createStore} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import rootReducer from './src/reducers';
import rootSaga from './src/sagas';
import RootContainer from './src/Root/RootContainer.Screen';
import 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Toast from "react-native-simple-toast";
// for iOS only since enable
MaterialCommunityIcons.loadFont();

const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export default class App extends Component {
  constructor(props) {
    super(props);
    Toast.show(this.props.message_from_native)
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RootContainer/>
        </PersistGate>
      </Provider>
    );
  }
}
