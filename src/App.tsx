import React from 'react';
import './App.css';
import { Summary } from './components/Summary';
import { AddTrans } from './components/AddTrans';

function App() {
  return (
    <div className="mainDiv">
      <div>
      <h3>expense tracker</h3>
      <div className="section">
        <Summary />
        <AddTrans />
      </div>
      </div>
    </div>
  );
}

export default App;
