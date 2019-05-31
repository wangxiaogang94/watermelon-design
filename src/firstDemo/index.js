import React from 'react';
import './styles.css';
const MyComponent = (props) => (
 <h1 className="hello">Hello from My Component{props.a}{props.b}</h1>
);
export default MyComponent;