import React from 'react'


class Player extends React.Component{
    constructor(props) {
        super(props);
        this.state = { nameOfPlayer1:props.nameOfPlayer ,
            nameOfPlayer2: "chole" }
       
    }
  render(){
    return (
    <div style={{ borderStyle: 'solid', borderWidth: 5, margin: 20 }}> 
        <h1>Player {this.props.number}</h1> 
        <>Name:{this.props.name}</>
        <br/>
        <>Played number of times:{this.props.times}</>
        <div style={{float: 'right'}}>
            <button>Play</button>
        </div>

        <h1></h1>
    </div>
    )
  }
}
   
export default Player