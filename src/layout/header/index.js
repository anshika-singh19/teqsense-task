import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import { ArrowBackIos, Phone } from "@material-ui/icons";
import Logo from "../../assets/images/allmysons.png";

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: theme.spacing(2),
		color: "black"
	},
	title: {
		flexGrow: 1,
		padding: "0.5rem"
	},
	callMenu: {
		display: "flex",
		flexDirection: "column",
		color: "black"
	},
	callText: {
		margin: 0
	},
	logo: {
		width: "125px"
	},
	bgPrimary: {
		backgroundColor: "#fdfcfc"
	},
	header: {
		paddingRight: "0"
	}
}));

export default function Header({ setCategorypage }) {
	const classes = useStyles();
	// const getLogoSize=
	return (
		<div className={classes.root}>
			<AppBar position="static" className={classes.bgPrimary}>
				<Toolbar className={classes.header}>
					<IconButton
						edge="start"
						className={classes.menuButton}
						onClick={() => setCategorypage(true)}
						color="inherit"
						aria-label="back"
					>
						<ArrowBackIos />
					</IconButton>
					<Typography className={classes.title}>
						<img className={classes.logo} src={Logo} alt="logo" />
					</Typography>
					<MenuItem className={classes.callMenu}>
						<Phone />
						<p className={classes.callText}>Call Us</p>
					</MenuItem>
				</Toolbar>
			</AppBar>
		</div>
	);
}
