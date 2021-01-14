import React from 'react';
import './App.css';
import { Summary } from './components/Summary';
import { AddTrans } from './components/AddTrans';
import { Balance } from './components/Balance';
import { History } from './components/History';
import { GlobalProvider } from './components/context/GlobalState';

function App() {
  return (
    <GlobalProvider className="mainDiv">
      <div>
      <h1 className="heading">expense tracker</h1>
      <div className="section">
        <div className="sec1">
        <Summary />
        <AddTrans />
        </div>
        <div className="sec2">
        <Balance />
        <History />
        </div>
      </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
