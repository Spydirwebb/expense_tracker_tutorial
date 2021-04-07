//src/App.js
import React, { Component } from 'react'

import AuthButtonFB from "./components/AuthButtons.js"

class App extends Component {
  render() {
    return (
        <div>
            <h1>Sign In</h1>
            <AuthButtonFB />
        </div>
    )
  }
}

export default App;
