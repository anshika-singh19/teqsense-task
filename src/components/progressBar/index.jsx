import React from "react";
import { lighten, makeStyles, withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const BorderLinearProgress = withStyles({
	root: {
		height: 8,
		backgroundColor: lighten("#f1eeee", 0.5)
	},
	bar: {
		borderRadius: 20,
		backgroundColor: "#60b39d"
	}
})(LinearProgress);

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	}
}));

export default function ProgressBar() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<BorderLinearProgress className={classes.margin} variant="determinate" color="secondary" value={25} />
		</div>
	);
}
