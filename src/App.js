import React from 'react';
import './App.css';
import Desktop from './components/desktop/index';
import Menubar from './components/menubar/index';

function App() {
  return (
    <React.Fragment>
      <Menubar></Menubar>
      <Desktop></Desktop>
    </React.Fragment>
  );
}

export default App;
