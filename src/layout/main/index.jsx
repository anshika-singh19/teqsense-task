import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CategoryLayout from "../../components/categoryLayout";
import Typography from "@material-ui/core/Typography";
import Calender from "../../components/calender";

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},
	title: {
		color: "#000",
		padding: "1rem",
		lineHeight: 1,
		fontWeight: 300,
		fontSize: "1.4rem"
	}
}));

export default function Main(props) {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			{props.categoryPage ? <Typography className={classes.title}>MOVE SIZE</Typography> : <Calender />}
			<CategoryLayout categoryPage={props.categoryPage} setDescriptionPage={props.setDescriptionPage} />
		</div>
	);
}
