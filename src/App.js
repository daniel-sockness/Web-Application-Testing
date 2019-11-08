import React, { useState } from 'react';
import Dashboard from './componenets/Dashboard/dashboard';
import Display from './componenets/Display/display';

function App() {

  const [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState(0);

  const displayReset = () => {
    setStrikes(0)
    setBalls(0);
  }

  const addStrikes = () => {
    setStrikes(strikes + 1);
    if(strikes === 2) {
      displayReset();
    }
  }

  const addBall = () => {
    setBalls(balls + 1);
    if(balls === 3) {
      displayReset();
    }
  }

  const addFoul = () => {
    if(strikes === 0 || strikes === 1) {
      setStrikes(strikes + 1);
    }
  }

  const addHit= () => {
    displayReset();
  }
  return (
    <div className="App">
      <Dashboard 
      addStrikes={addStrikes} 
      addFoul={addFoul}
      addBall={addBall}
      addHit={addHit}
      />
      <Display 
      strikes={strikes} 
      balls={balls}
      />
    </div>
  );
}

export default App;
