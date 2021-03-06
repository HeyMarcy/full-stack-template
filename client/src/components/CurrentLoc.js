import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/index.css';



const CurrentLoc = (props) => {
  return (
    <div className="location-section">
        <button className="change-loc">{ props.city}, {props.stateName} </button>
    </div>

  )
}

const mapStateToProps = (state, props) => ({
    city: state.city,
    stateName: state.stateName
});

export default connect(mapStateToProps)(CurrentLoc);
