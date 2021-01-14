import React from 'react';
import './App.css';
import { Summary } from './components/Summary';

function App() {
  return (
    <div className="mainDiv">
      <div>
      <h3>expense tracker</h3>
      <div className="section">
        <Summary />
      </div>
      </div>
    </div>
  );
}

export default App;
