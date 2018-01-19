import React, { Component } from 'react';

import ProfileImg from './resources/profile.jpg'
import Resume from './resources/resume.pdf'

class About extends Component {
  render() {
    return (
        <div>
            <div className="About-left-column">
                <h1 className="About-title">Hi, I'm Merek Orlowski.</h1>
                <p className="About-descripton">
                    I'm a 4th year Software Engineering student at the Universtiy of Ottawa.
                    I have a great passion for software development and am currently looking
                    for a position as a Web developer at a private company. I have developed
                    various different applications in my studies and in the field an continue
                    to improve my skills.
                </p>
            </div>
            <div className="About-right-column">
                <img className="Profile" src={ProfileImg}/>
            </div>
            <div className="About-resume">
                <a target="_blank" href={Resume}>View my resume</a>
            </div>
        </div>
    )
  }
}

export default About