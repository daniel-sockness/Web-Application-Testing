import React from 'react';
import './Dashboard.scss';

const Dashboard = (props) => {
    
  return (
    <div className='btn-wrapper'>
        <button className="btn" onClick={props.addStrikes}>Add Strike</button>
        <button className="btn" onClick={props.addFoul}>Add Foul</button>
        <button className="btn" onClick={props.addBall}>Add Ball</button>
        <button className="btn" onClick={props.addHit}>Add Hit</button>
    </div>
  );
};

export default Dashboard;
