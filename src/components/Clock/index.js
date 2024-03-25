import {Component} from 'react'
import './index.css'

class Clock extends Component {
  constructor(props){
    super(props)
    this.state = {date: new Date()}
    
  }

  componentDidMount = () => { //MOUNT phase will be initiated after constructor this function.
    this.timerId = setInterval(this.tick, 1000)  
    console.log("componentMount Called")  
  }

  componentWillUnmount = () => { //to destroy the callback functions after hide button clicked
    clearInterval(this.timerId)
    console.log("componentUnmount Called")
  }

  tick = () =>{     //tick function for time update for every second
    const {date} = this.state
    this.setState({date: new Date()})    
    console.log("Tick Function Called")
  }


  
  render() {
    const {date} = this.state
    console.log(date)
    return (
      <div className="clock-container">
        <h1 className="heading">{date.toLocaleTimeString()}</h1>
      </div>
    )
  }
}
export default Clock
