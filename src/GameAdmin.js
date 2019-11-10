import React from 'react'
import Player from './Player'

class GameAdmin extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        nameone:"",
        nametwo:"",
        turn:0
    }
    this.oneNameChangeEventHandler = this.oneNameChangeEventHandler.bind(this);
    this.twoNameChangeEventHandler = this.twoNameChangeEventHandler.bind(this);
    this.turnChangeEventHandler = this.turnChangeEventHandler.bind(this);
}

oneNameChangeEventHandler(event) {
  this.setState({nameone: event.target.value});
}
twoNameChangeEventHandler(event) {
  this.setState({nametwo: event.target.value});
}
turnChangeEventHandler(event){ 
  this.setState((prevState, props) => ({
    turn: prevState.turn + 1
}));
}

  render(){
    return (
    <div>
        <Player number='one' name={this.state.nameone} times='3'  turn={this.state.turn} turnChangeEventHandler={this.turnChangeEventHandler}/>
        <Player number='two' name={this.state.nametwo} times='4'  turn={this.state.turn+1} turnChangeEventHandler={this.turnChangeEventHandler}/>
        
        <div style={{ borderStyle: 'solid', borderWidth: 5, margin: 20 }}>
          <>Set Name of Player One: </>
          <input type="text" value={this.state.nameone} onChange={this.oneNameChangeEventHandler}/>
          <br/>
          <>Set Name of Player Two: </>
          <input type="text" value={this.state.nametwo} onChange={this.twoNameChangeEventHandler}/>
        </div>
    </div>
    )
  }
}
   
export default GameAdmin