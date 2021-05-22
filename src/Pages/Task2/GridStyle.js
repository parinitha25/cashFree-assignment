import { makeStyles } from "@material-ui/core/styles";

const GridStyle = makeStyles((theme) => ({
	grid: {
		width:'100%',
		margin: '0px',
		marginBottom:'50px'
	},
	
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
		background:theme.palette.success.light
	}
}));

export default GridStyle;