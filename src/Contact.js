import React, { Component } from 'react';
import MaterialIcon from 'material-icons-react';

class Contact extends Component {
  render() {
    return (
      <div>
        <h1 className="Contact-title">
          Want to chat or connect with me?
        </h1>
        <div className="Contact-links">
          <a target="_blank" href="https://www.linkedin.com/in/merekorlowski/">LinkedIn</a>
          <a href="mailto:merekorlowski@gmail.com">Email</a>
        </div>
      </div>
    )
  }
}

export default Contact