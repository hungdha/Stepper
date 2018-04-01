import React, { Component } from 'react';
import styles from './styles'
import HourGlass from './animations/HourGlass'

class Stepper extends Component {
	state = {
		stage: 2
	}
	handleClick = () => {
    this.setState({stage: this.state.stage+1})
  }
	renderIcon = (stage, num) => {
		if (stage === num){
			return <HourGlass size="30px"/>
		}
		else if(stage < num){
			return <div><div>{num}</div><img style={{position: 'absolute',left: '20px',top: "20px",width: '15px'}} src="/icons/padlock.svg"/></div>
		}
		return <img style={{width: '12px'}} src="/icons/checked2.svg"/>
	}
	circleStyle = (current, circleSection) => {
		if (current === circleSection){
			return {...styles.circle,...styles.circleActive}
		}
		else if (current > circleSection){
			return {...styles.circle,...styles.circleComplete}
		}
		return styles.circle
	}
	render() {
		const {stage} = this.state
		return (
			<div style={styles.container}>
				<div style={styles.progressContainer}>
					<div style={this.circleStyle(stage, 1)}>{this.renderIcon(stage, 1)}</div>
					<div style={this.circleStyle(stage, 2)}>{this.renderIcon(stage, 2)}</div>
					<div style={this.circleStyle(stage, 3)}>{this.renderIcon(stage, 3)}</div>
		    </div>
				<div style={styles.stagesContainer}>
					{stage === 1 && <div style={styles.stageContent}>Stage 1 </div>}
					{stage === 2 && <div style={styles.stageContent}>Stage 2 </div>}
					{stage === 3 && <div style={styles.stageContent}>Stage 3 </div>}
					{stage === 4 && <div style={styles.stageContent}>Complete! </div>}
					<div style={styles.stageButton}>
						{stage <4 && <button onClick={this.handleClick}>next stage</button>}
					</div>
		    </div>
			</div>
		);
	}

}

export default Stepper;
