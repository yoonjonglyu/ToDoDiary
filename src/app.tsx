import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import NotFound from './view/notfound';
import Main from './view/main';
import Stats from './view/stats';
import Todo from './view/todo';

const App: React.FC<any> = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/todo" component={Todo} />
            <Route exact path="/stats" component={Stats} />
            <Route exact component={NotFound} />
        </Switch>
    </Router>
);

export default App;