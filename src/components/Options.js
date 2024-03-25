import React from 'react';
import './Optionstyles.css';
import { Link } from 'react-router-dom';

const ButtonGroup = () => {
  return (
    <div className="button-group">
      <Link to="/Airporttaxi" className="btn">
        Airport Taxi
      </Link>
      <Link to="/Outstationtaxi" className="btn-outstation">
        Outstation Taxi
      </Link>
      <Link to="/Localtaxi" className="btn">
        Local Taxi
      </Link>
    </div>
  );
};

export default ButtonGroup;