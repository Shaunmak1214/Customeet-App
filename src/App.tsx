import React from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';

import Home from './screens/home';
import PrivacyPolicy from './screens/privacy-policy';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        {/* Fallback */}
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
