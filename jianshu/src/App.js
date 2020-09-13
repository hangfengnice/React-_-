import React from 'react';
import {Provider} from 'react-redux'
import Header from './common/header'
import store from './store'

import {Title} from './style'

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Title >hello title</Title>
    </Provider>
  );
}

export default App;
