import React,{Component} from 'react'
import './clock.css'
class Clock extends React.Component{

  constructor(props)
  {
    super(props)
    this.state={
      time:new Date().toLocaleTimeString()
    }
  }

  componentDidMount(){
    this.intervalID=setInterval(()=>
      this.updateClock(),1000)
  }

   componentWillUnmount(){
        clearInterval(this.intervalID)
    }

    updateClock(){
        this.setState({
            time: new Date().toLocaleTimeString()
        });
    }
  render(){
    return(
      <div className="Time">
      <h2>React clock app</h2>
      <p>{this.state.time}</p>
      </div>
    )
  }
}

export default Clock;