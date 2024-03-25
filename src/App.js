import {Component} from 'react'
import Clock from './components/Clock'

import './App.css'

class App extends Component {
  state = {shoClock: false}

  clickToShowOrHide = () =>{
    const {shoClock} = this.state
    this.setState(prevState => ({shoClock: !prevState.shoClock}))
  } 
  render() {
    const {shoClock} = this.state
    
    return (
      <div className="app-container">
        <button onClick={this.clickToShowOrHide} type="button" className="toggle-button">
          {shoClock ? "Hide Clock" : "Show Clock"}
        </button>
        {shoClock && <Clock />}
      </div>
    )
  }
}

export default App
