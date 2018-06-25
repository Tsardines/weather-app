import React from 'react'; // import React from the 'react package' that's in package.json

import Titles from './components/Titles';

class App extends React.Component { // creates an instance of App that extends React.Component (an object that exists somewhere in node_modules)
  render() {
    return (
      <div>
        <Titles />
      </div>
    );
  }
};



export default App;
