import React, { Component } from 'react';
import { Power2, TweenLite } from "gsap";
import {TransitionGroup, CSSTransition,Transition} from "react-transition-group";
import styles from '../styles'
import Button from './Button';

class Steps extends Component {
	entering(node){
		TweenLite.fromTo(
									node,
									1,
									{
											scaleX: 0.9,
											scaleY: 0.9,
											opacity: 0,
											cx: 500,
									},
									{
											scaleX: 1,
											scaleY: 1,
											opacity: 1,
											cx: 0,
											ease: Power2.easeOut,

									}
		).delay(0.4);
	}
	exiting(node){
		TweenLite.to(node, 0.6, {
							opacity: 0,
							onComplete: console.log('hgdfhdgfj')
					});
	}
	render() {
		const {stage,handleClick} = this.props
		return (
			<div style={styles.stagesContainer}>
				<div style={styles.stages}>
					<TransitionGroup>
						{stage === 1 &&
						<Transition appear={true} timeout={300} onEntering={this.entering} onExiting={this.exiting}>
							<div key={1} style={styles.stageContent}>Stage 1 </div>
						</Transition>
						}
						{stage === 2 &&
						<Transition appear={true} timeout={300} onEntering={this.entering} onExiting={this.exiting}>
							<div key={2} style={styles.stageContent}>Stage 2 </div>
						</Transition>
						}
						{stage === 3 &&
						<Transition appear={true} timeout={300} onEntering={this.entering} onExiting={this.exiting}>
							<div key={3} style={styles.stageContent}>Stage 3 </div>
						</Transition>
						}
						{stage === 4 &&
						<Transition appear={true} timeout={300} onEntering={this.entering} onExiting={this.exiting}>
							<div key={4} style={styles.stageContent}>Complete! </div>
						</Transition>
						}
					</TransitionGroup>
				</div>
				<div style={styles.stageButton}>
					<Button disabled={stage === 4} click={handleClick}>Continue</Button>
				</div>
			</div>
		);
	}

}

export default Steps;
