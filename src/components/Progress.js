import React, {Component} from 'react';
import HourGlass from '../animations/HourGlass.js'
import styles from '../styles'

const renderIcon = (stage, num) => {
	if (stage === num) {
		return <HourGlass size="30px" />;
	} else if (stage < num) {
		return (
			<div>
				<div>{num}</div>
				<img
					style={{
						position: 'absolute',
						left: '20px',
						top: '20px',
						width: '15px'
					}}
					src="/icons/padlock.svg"
				/>
			</div>
		);
	}
	return <img style={{ width: '12px' }} src="/icons/checked2.svg" />;
};

const circleStyle = (current, circleSection) => {
	if (current === circleSection) {
		return { ...styles.circle, ...styles.circleActive };
	} else if (current > circleSection) {
		return { ...styles.circle, ...styles.circleComplete };
	}
	return styles.circle;
};

export default class Progress extends Component {
  render(){
		const {stage} = this.props
    return(
			<div style={styles.progressContainer}>
				<div style={circleStyle(stage, 1)}>
					{renderIcon(stage, 1)}
				</div>
				<div style={circleStyle(stage, 2)}>
					{renderIcon(stage, 2)}
				</div>
				<div style={circleStyle(stage, 3)}>
					{renderIcon(stage, 3)}
				</div>
				<div style={circleStyle(stage, 4)}>
					{renderIcon(stage, 4)}
				</div>
			</div>
    )
  }
}
