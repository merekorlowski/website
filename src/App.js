import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import './App.css';

import Blog from './Blog'
import About from './About'
import Contact from './Contact'

class App extends Component {
  render() {
    return (
      <Router>
        <Main/>
      </Router>
    )
  }
}

class Main extends Component {
  render() {
    return (
      <div className="App">
          <header className="App-header">
            <div className="App-header-content">
              <h1 className="App-title">Orlo</h1>
              <nav>
                <ul class="App-nav">
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/About">About</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
          <section className="Main">
            <Route path="/blog" component={Blog}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
          </section>
      </div>
    );
  }
}

export default App;
