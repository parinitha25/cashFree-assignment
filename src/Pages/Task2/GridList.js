import React, { useState } from "react";
import { Grid, Paper } from "@material-ui/core";
import { Link } from 'react-router-dom';
import './GridList.css';
import GridStyle from './GridStyle'

const useStyles = GridStyle;

function GridList () {
	const classes = useStyles()
	const [cellSpace, setCellSpace] = useState({});
	return (
		<div className='pt-5'>
			<h4>1. Different column size and offsets. (No need to responsiveness):</h4>
			<Grid container spacing={1} className={classes.grid}>
        <Grid item xs={12} md={4}><Paper className={classes.paper}>4</Paper></Grid>
				<Grid item xs={12} md={1}><Paper className={classes.paper}>1</Paper></Grid>
        <Grid item xs={12} md={5}><Paper className={classes.paper}>5</Paper></Grid>
				<Grid item xs={12} md={2}><Paper className={classes.paper}>2</Paper></Grid>
        <Grid item xs={12} md={3}><Paper className={classes.paper}>3</Paper></Grid>
				<Grid item xs={12} md={2}><Paper className={classes.paper}>2</Paper></Grid>
				<Grid item xs={12} md={7}><Paper className={classes.paper}>7</Paper></Grid>
        <Grid item xs={12} md={6}><Paper className={classes.paper}>6</Paper></Grid>
        <Grid item xs={12} md={4}><Paper className={classes.paper}>4</Paper></Grid>
        <Grid item xs={12} md={2}><Paper className={classes.paper}>2</Paper></Grid>
			</Grid>
			<hr/>
			<h4>2. 12 columns grid:</h4>
			<Grid container spacing={1} className={classes.grid}>
				<Grid item md={1} xs={4}><Paper className={classes.paper}>1</Paper></Grid>
				<Grid item md={1} xs={4}><Paper className={classes.paper}>2</Paper></Grid>
				<Grid item md={1} xs={4}><Paper className={classes.paper}>3</Paper></Grid>
				<Grid item md={1} xs={4}><Paper className={classes.paper}>4</Paper></Grid>
				<Grid item md={1} xs={4}><Paper className={classes.paper}>5</Paper></Grid>
				<Grid item md={1} xs={4}><Paper className={classes.paper}>6</Paper></Grid>
				<Grid item md={1} xs={4}><Paper className={classes.paper}>7</Paper></Grid>
				<Grid item md={1} xs={4}><Paper className={classes.paper}>8</Paper></Grid>
				<Grid item md={1} xs={4}><Paper className={classes.paper}>9</Paper></Grid>
				<Grid item md={1} xs={4}><Paper className={classes.paper}>10</Paper></Grid>
				<Grid item md={1} xs={4}><Paper className={classes.paper}>11</Paper></Grid>
				<Grid item md={1} xs={4}><Paper className={classes.paper}>12</Paper></Grid>
			</Grid>
			<hr/>
			<h4>3. Adjustable gutter (Spacing between columns):</h4>
			<label className="form-label">Adjust the space between cellls by scrolling :</label>
			<input type="range" className="form-range mb-4" 
				onChange={(e)=>setCellSpace(e.target.value)} 
				min="0" max="10" defaultValue={0} 
			/>
			<Grid container spacing={cellSpace} className={classes.grid}>
				<Grid item xs={5}><Paper className={classes.paper}>5</Paper></Grid>
				<Grid item xs={3}><Paper className={classes.paper}>3</Paper></Grid>
				<Grid item xs={4}><Paper className={classes.paper}>4</Paper></Grid>
			</Grid>
			<hr/>
			<Link to='/' className='btn btn-secondary mb-5'>Go to home</Link>
    </div>   
	);
}

export default GridList;
