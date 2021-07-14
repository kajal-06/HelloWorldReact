import React from 'react';
import './style.css';
import Button from './Button';
import Paragraph from './Paragraph';

const App = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <h2>Let's Learn React JS</h2>
      <Paragraph paraText="Super excited to learn about react from Let's Upgrade Team!" />
      <Button btnText="Let's Upgrade" />
      <h2>More about React</h2>
      <Paragraph paraText="A JavaScript library for building user interfaces" />
      <Paragraph paraText="ReactJS is a free and open source front-end JavaScript Library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers" />
      <Button btnText="Get Started" />
    </div>
  );
};

export default App;
