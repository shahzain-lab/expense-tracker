import React from 'react';
import './App.css';
import { Balance } from './components/Balance';

function App() {
  return (
    <div className="mainDiv">
      <div>
      <h3>expense tracker</h3>
      <div className="section">
          <Balance />
      </div>
      </div>
    </div>
  );
}

export default App;
