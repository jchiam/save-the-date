import React, { Component } from 'react';
import Slideshow from 'react-slidez';
import cloudinary from 'cloudinary-core';
  
const cloudinaryCore = new cloudinary.Cloudinary({ cloud_name: process.env.CLOUDINARY_CLOUD_NAME });

export default class SaveTheDate extends Component {
  static renderDetails() {
    const path = document.location.pathname;
    return (
      <div className="details">
        <h1>Save The Date</h1>
        <h2>{'6 \u00b7 4 \u00b7 19'}</h2>
        <span>Jonathan + Rebecca</span>
        <button
          onClick={() => {
            if (path === '/solemnisation') {
              window.location.assign(process.env.SOLEMNISATION_GDOCS_URL);
            } else if (path === '/solemnisation-banquet') {
              window.location.assign(process.env.SOLEMNISATION_BANQUET_GDOCS_URL);
            }
          }}
        >
          RSVP Here
        </button>
      </div>
    );
  }

  renderSlideshow() {
    const tr = cloudinary.Transformation.new();
    tr
      .dpr(3).quality('auto').height(window.innerheight).width(window.innerWidth).crop('fill').gravity('faces').chain()
      .effect('gradient_fade:symmetric').x(0.1).background('rgb:ffe4f7');   // primary color as background
    return (
      <Slideshow
        showIndex={false}
        showArrows={false}
        autoplay
        enableKeyboard={false}
        useDotIndex
        slideInterval={5000}
        defaultIndex={0}
        slides={[
          cloudinaryCore.url('save-the-date/wedding2.jpg', tr),
          cloudinaryCore.url('save-the-date/wedding3.jpg', tr),
          cloudinaryCore.url('save-the-date/wedding4.jpg', tr)
        ]}
        effect={'fade'}
      />
    );
  }

  render() {
    return (
      <>
        {this.renderSlideshow()}
        {SaveTheDate.renderDetails()}
      </>
    );
  }
}
