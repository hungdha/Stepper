import React from 'react';

const styles = {
	container: {
		width: '40%',
		height: 'calc(40vh)',
		display: 'flex'
	},
	progressContainer: {
			display: 'flex',
			width: "100px",
			margin: '15px 0px 15px 15px',
			flexDirection: 'column',
			justifyContent: 'space-between',
			alignItems: 'center',
			height: 'calc(100% - 20px)',
			background: 'white',
			border: "2px solid #ccc",
			borderRadius: '8px',
	},
	stagesContainer: {
			flex: 1,
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			margin: '15px 0px 15px 15px',
			height: 'calc(100% - 20px)',
			border: "2px solid #ccc",
			borderRadius: '8px',

	},
	stages:{
		display: 'flex',
		flex: 1,
		background: '#eee',
		margin: '10px',
		borderRadius: '8px',
		width: 'calc(100% - 20px)',
		justifyContent: 'center',
		alignItems: 'center',
	},
	stageContent: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: "40px",
		color: '#a1a1a1',
		fontWeight: 700
	},
	stageButton: {
		display: 'flex',
		justifyContent: 'flex-end',
		height: "40px",
		marginRight: "10px",
		marginBottom: '10px'
	},
	circle: {
		marginTop: "30px",
		marginBottom: "30px",
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		color: '#ccc',
		width: '30px',
		height: '30px',
		background:'white',
		borderRadius: '40px',
		border: '3px solid #ccc',
		zIndex: '3',
		position: 'relative'
	},
	circleActive: {
		width: '50px',
		height: '50px',
		border: '3px solid #ccc',
	},
	circleComplete: {
		border: '3px solid #6bada7',
	},
}



export default styles
