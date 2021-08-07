import React from 'react';

import { Provider } from "react-redux";
import store from "./store";

import StudyRedux from "./views/study";

function App() {
  return <Provider store={store}>
    <div className="app">
      <StudyRedux />
    </div>
  </Provider>
}

export default App;
