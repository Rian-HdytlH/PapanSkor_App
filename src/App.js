import React, { Component } from 'react';

import Leaderboard from './leaderboard.js';
import Player from './player.js';
import AddPlayer from './addPlayer.js'

class App extends Component {
  constructor (props) {
    super(props)

    const PLAYER = [
      {id: 1, name: "Rian Hidayatuloh", score: 0},
    ]

    this.state = {
      members: PLAYER
    }
    this.onPlayerAdd = this.onPlayerAdd.bind(this)
  }

  onPlayerAdd(name) {
    let members_baru = this.state.members
    members_baru.push ({id: members_baru.length + 1, name: name, score: 0})
    this.setState({
      members: members_baru
    })
  }

  render() {

  	const styles = {
  		container: {
  			padding: 60  		}
  	}

    return (
      <div style={styles.container}>
        < Leaderboard />
        < Player members={this.state.members} />
        <AddPlayer onAdd={this.onPlayerAdd} />
      </div>
    );
  }
}

export default App;
