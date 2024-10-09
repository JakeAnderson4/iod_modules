import React from 'react';
import Greeting from './Greeting';

const App = () => {
  return (
    <div>
      <Greeting name="John" /><Greeting />

      <Greeting>Hello Everyone!</Greeting>
    </div>
  );
};

export default App;
