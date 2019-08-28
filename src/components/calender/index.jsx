import React from "react";
// import moment from "moment";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
	calenderContainer: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between"
	},
	calenderItem: {
		backgroundColor: "#eae6de",
		width: "50px",
		height: "80px",
		textAlign: "center",
		color: "#b3b2b2",
		fontSize: "12px",
		fontWeight: "300"
	},
	date: {
		marginBottom: 0,
		color: "#000",
		fontWeight: 400,
		fontSize: "15px"
	},
	month: {
		margin: 0,
		textTransform: "uppercase",
		color: "#000",
		fontSize: "11px"
	}
}));

export default function SpacingGrid() {
	const classes = useStyles();
	// const currentDate = moment();

	const dateArray = [
		{ date: "1", month: "Aug", weekday: "S" },
		{ date: "2", month: "Aug", weekday: "M" },
		{ date: "3", month: "Aug", weekday: "T" },
		{ date: "4", month: "Aug", weekday: "W" },
		{ date: "5", month: "Aug", weekday: "T" },
		{ date: "6", month: "Aug", weekday: "F" },
		{ date: "7", month: "Aug", weekday: "S" }
	];
	// const weekdayshort = moment.weekdaysShort();

	// const calenderList = weekdayshort.map(day => (
	const calenderList = dateArray.map(day => (
		<Box p={1} className={classes.calenderItem}>
			{/* {day.slice(0, 1)} */}
			{day.weekday}
			<p className={classes.date}>{day.date}</p>
			<p className={classes.month}>{day.month}</p>
		</Box>
	));
	return (
		<div style={{ width: "100%" }}>
			<Box display="flex" className={classes.calenderContainer}>
				{calenderList}
			</Box>
		</div>
	);
}
