import React from 'react'
import Player from './Player'

class GameAdmin extends React.Component{
  render(){
    return (
    <div>
        <Player number='one' name='<name from input field>' times='3'/>
        <Player number='two' name='<name from input field>' times='4'/>
        
        <div style={{ borderStyle: 'solid', borderWidth: 5, margin: 20 }}>
          <>Set Name of Player One: </>
          <input type="string" />
          <br/>
          <>Set Name of Player Two: </>
          <input type="string" />
        </div>
    </div>
    )
  }
}
   
export default GameAdmin