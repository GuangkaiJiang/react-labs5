import React from 'react'


class Player extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
            text:["Play","This user is playing now"]
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
            <button disabled={this.props.turn%2} onClick={this.props.turnChangeEventHandler}>{this.state.text[this.props.turn%2]}</button>
        </div>
 
    </div>
    )
  }
}
   
export default Player