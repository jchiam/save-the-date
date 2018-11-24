import React, { Component } from 'react';
import Slideshow from 'react-slidez';

export default class SaveTheDate extends Component {
  static renderSlideshow() {
    return (
      <Slideshow
        showIndex={false}
        showArrows={false}
        autoplay
        enableKeyboard={false}
        useDotIndex
        slideInterval={8000}
        defaultIndex={0}
        slides={[require('images/1.png'), require('images/2.png')]}
        effect={'fade'}
      />
    );
  }

  static renderDetails() {
    return (
      <div className="details">
        <span>Rebecca + Jonathan</span>
        <span>April 6, 2019</span>
        <button>RSVP Here</button>
      </div>
    );
  }

  render() {
    return (
      <>
        <h1>Save The Date</h1>
        {SaveTheDate.renderSlideshow()}
        {SaveTheDate.renderDetails()}
      </>
    );
  }
}
