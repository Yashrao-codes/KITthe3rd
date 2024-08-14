import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import SavedArticles from './pages/SavedArticles';
import Recommendations from './pages/Recommendations';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/saved" component={SavedArticles} />
          <Route path="/recommendations" component={Recommendations} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
