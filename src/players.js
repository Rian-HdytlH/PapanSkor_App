import React from 'react';

class Players extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			score: this.props.score
		}
		this.incrementScore = this.incrementScore.bind(this)
		this.decrementScore = this.decrementScore.bind(this)
	}
	incrementScore(event) {
		this.setState({
			score: this.state.score + 1
		})
	}
	decrementScore(event) {
		this.setState({
			score: this.state.score - 1
		})
	}
	render () {
		const styles = {
			player: {
				display: 'flex',
				padding: 10
			},
			name: {
				color: 'purple',
				flex: '1'
			},
			playerScore: {
				width: 200
			},
			score: {
				padding: 20
			},
			button: {
				padding: 10,
				background: 'aqua'
			}
		}
		return (
			<div style={styles.player}>
				<div style={styles.name}>
					{this.props.name}
				</div>
				<div style={styles.playerScore}>
					<div>
						<button onClick={this.decrementScore} style={styles.button}>-</button>
						<span style={styles.score}>{this.state.score}</span>
						<button onClick={this.incrementScore} style={styles.button}>+</button>
					</div>
				</div>
			</div>

			)
	}
}

export default Players;