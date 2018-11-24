import React, { Component } from 'react';
import Slideshow from 'react-slidez';
import cloudinary from 'cloudinary-core';
  
const cloudinaryCore = new cloudinary.Cloudinary({ cloud_name: process.env.CLOUDINARY_CLOUD_NAME });

export default class SaveTheDate extends Component {
  static renderDetails() {
    return (
      <div className="details">
        <span>Rebecca + Jonathan</span>
        <span>April 6, 2019</span>
        <button>RSVP Here</button>
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize());
  }

  handleResize() {
    this.setState({
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth
    });
  }

  renderSlideshow() {
    const { windowHeight, windowWidth } = this.state;
    const transformations = {
      height: windowHeight,
      width: windowWidth,
      crop: 'fill',
      gravity: 'faces'
    };
    return (
      <Slideshow
        showIndex={false}
        showArrows={false}
        autoplay
        enableKeyboard={false}
        useDotIndex
        slideInterval={8000}
        defaultIndex={0}
        slides={[
          cloudinaryCore.url('save-the-date/wedding1.png', transformations),
          cloudinaryCore.url('save-the-date/wedding2.png', transformations)
        ]}
        effect={'fade'}
      />
    );
  }

  render() {
    return (
      <>
        <h1>Save The Date</h1>
        {this.renderSlideshow()}
        {SaveTheDate.renderDetails()}
      </>
    );
  }
}
