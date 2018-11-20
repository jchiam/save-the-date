import React, { Component } from 'react';

export default class SaveTheDate extends Component {
  render() {
    return (
      <>
        <h1>Save The Date</h1>
        <div className="image">
          <img src={require('images/1.png')} />
        </div>
        <div className="details-container">
          <div className="details">
            <span>Rebecca + Jonathan</span>
            <span>April 6, 2019</span>
            <button>RSVP Here</button>
          </div>
        </div>
      </>
    );
  }
}
