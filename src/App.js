import React from 'react';
// import { Button, ImageList, WaterMark } from './components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Watermark from './page/watermark';
import FileToBase64 from './page/fileToBase64';
import Index from './page';
import Install from './page/install';

const App = () => (
    <Router>
        <Switch>
            <Route path="/" exact={true}>
                <Index>
                    <Install />
                </Index>
            </Route>
            <Route path="/watermark" exact={true}>
                <Index>
                    <Watermark />
                </Index>
            </Route>
            <Route path="/fileToBase64" exact={true}>
                <Index>
                    <FileToBase64 />
                </Index>
            </Route>
        </Switch>
    </Router>
);

export default App;
