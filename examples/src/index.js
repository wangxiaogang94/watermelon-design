import React from 'react';
import { render } from 'react-dom';
import { a, b, FirstDemo } from '../../src';
console.log(a,b,FirstDemo)
const App = () => (<FirstDemo a={a} b={b} />);

render(<App />,document.getElementById('root'));