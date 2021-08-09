// import React from 'react';

import { Provider } from "react-redux";
import store from "./store";

import PanelA from "./views/study/components/PanelA";
import PanelB from "./views/study/components/PanelB";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <PanelA />
        <PanelB />
      </div>
    </Provider>
  )
}

export default App;
