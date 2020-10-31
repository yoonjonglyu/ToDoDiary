import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

const App: React.FC<any> = () => (
    <Router>
        <Switch>
            <Route exact path="/" />
            <Route exact />
        </Switch>
    </Router>
);

export default App;