import React from 'react';
import './display.scss';

const Display = (props) => {
    
  return (
    <div className='display-wrapper'>
            <div className='at-bat'>
                <h2 className='category'>Strike</h2>
                <div className='status-wrapper'>
                    <h2 className='status'>{props.strikes}</h2>
                </div>
            </div>
            <div className='at-bat'>
                <h2 className='category'>Balls</h2>
                <div className='status-wrapper'>
                    <h2 className='status'>{props.balls}</h2>
                </div>
            </div>
            
    </div>
  );
};

export default Display;
