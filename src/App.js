import React from 'react';
import { Button, ImageList, WaterMark } from './components';

const App = () => (
    <div className="App">
        hello<Button text={'hello'} />
        <ImageList />
        <WaterMark text={'王晓刚'} isWatermark />
    </div>
);

export default App;
