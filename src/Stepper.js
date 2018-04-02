import React, { Component } from 'react';
import styles from './styles';
import Progress from './components/Progress';
import Steps from './components/Steps';


class Stepper extends Component {
	state = {
		stage: this.props.stage
	}
	static defaultProps = {
    stage: 1
  }
	handleClick = () => {
		this.setState({ stage: this.state.stage + 1 });
	}
	render() {
		const { stage } = this.state;
		return (
			<div style={styles.container}>
				<Progress stage={stage}/>
				<Steps handleClick={this.handleClick} stage={stage}/>
			</div>
		);
	}
}

export default Stepper;
