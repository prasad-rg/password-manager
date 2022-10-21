import React from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
import RootNavigator from './src/navigation/RootNavigator';

let persistor = persistStore(store);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RootNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;
