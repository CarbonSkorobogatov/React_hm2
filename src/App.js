import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'

import Blog from "./class-works/cw2/life-cycle-example/Blog";



class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <Blog />
      </div>
    )
  }
}

export default App;
