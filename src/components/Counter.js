import React from 'react'
import './Counter.css'

export default function Counter({secs, minutes, hours, days}) {
  return (
    <div className="counter">
      <div className="container">
        <div className="up">{days}</div>
        <div className="down">DIAS</div>
      </div>
      <div className="container">
        <div className="up">{hours}</div>
        <div className="down">HRS</div>
      </div>
      <div className="container">
        <div className="up">{minutes}</div>
        <div className="down">MIN</div>
      </div>
      <div className="container">
        <div className="up">{secs}</div>
        <div className="down">SEG</div>
      </div>
    </div>
  );
}
