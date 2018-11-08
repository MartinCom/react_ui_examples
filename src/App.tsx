import * as React from 'react';
import './App.css';

import BeforeContext from './components/BeforeContextExample';
import DefaultPropsExample from './components/DefaultPropsExample';
import DefaultPropsExtand from './components/DefaultPropsExtandExample';
import PassPropsExample from './components/PassPropsExample';
import SimpleControler from './components/SimpleControler';
import WithGlobalContext from './components/WithGlobalContextExample';
import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
          <SimpleControler/>
          <PassPropsExample name="PACMAN ('<)"/>
          <DefaultPropsExample requiredName="Snow!"/>
          <DefaultPropsExtand requiredName="HELLO!"/>
          <BeforeContext theme="blue" name="Test Btn"/>
          <BeforeContext theme="grey" name="Test 2 Btn"/>
          
          <WithGlobalContext name="With Context!"/>
          
        </p>
      </div>
    );
  }
}

export default App;
