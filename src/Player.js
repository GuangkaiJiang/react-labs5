import React from 'react'


class Player extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
            
         }
       
    }
  render(){
    return (
    <div style={{ borderStyle: 'solid', borderWidth: 5, margin: 20 }}> 
        <b>Player {this.props.number}</b> 
        <br/>
        <>Name:{this.props.name}</>
        <br/>
        <>Played number of times:{this.props.times}</>
        <div style={{float: 'right'}}>
            <button>Play</button>
        </div>
    </div>
    )
  }
}
   
export default Player