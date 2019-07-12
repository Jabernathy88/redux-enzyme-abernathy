import React, { Component } from 'react'
import './styles.css';
import PostsList from "./components/PostList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Hello from App.js</h2>
        <PostsList />
      </div>
    )
  }
}

export default App;
