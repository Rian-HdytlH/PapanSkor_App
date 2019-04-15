import React from 'react';
import Players from './players.js'

class Player extends React.Component {
	render () {
		return (
			<div>
			{this.props.members.map ( (player) => {
				return(
					<Players key={player.id} name={player.name} score={player.score} />

				)

			})}
			</div>
		)
	}
}

export default Player;