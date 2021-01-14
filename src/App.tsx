import React from 'react';
import './App.css';
import { Summary } from './components/Summary';
import { AddTrans } from './components/AddTrans';
import { Balance } from './components/Balance';

function App() {
  return (
    <div className="mainDiv">
      <div>
      <h1>expense tracker</h1>
      <div className="section">
        <div className="sec1">
        <Summary />
        <AddTrans />
        </div>
        <div>
        <Balance />
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
