import React, { Component } from 'react';

import styles from '../styles'
import Button from './Button';

class Steps extends Component {
	render() {
		const {stage,handleClick} = this.props
		return (
			<div style={styles.stagesContainer}>
				<div style={styles.stages}>
					{stage === 1 && <div style={styles.stageContent}>Stage 1 </div>}
					{stage === 2 && <div style={styles.stageContent}>Stage 2 </div>}
					{stage === 3 && <div style={styles.stageContent}>Stage 3 </div>}
					{stage === 4 && <div style={styles.stageContent}>Complete! </div>}
				</div>
				<div style={styles.stageButton}>
					{stage < 4 && <Button click={handleClick}>Continue</Button>}
				</div>
			</div>
		);
	}

}

export default Steps;
