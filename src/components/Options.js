import React from 'react';
import './Optionstyles.css';

const ButtonGroup = () => {
  return (
    <div className="button-group">
      <a href="/Airporttaxi" className="btn">
        Airport Taxi
      </a>
      <a href="/Outstationtaxi" className="btn-outstation">
        Outstation Taxi
      </a>
      <a href="/Localtaxi" className="btn">
        Local Taxi
      </a>
    </div>
  );
};

export default ButtonGroup;