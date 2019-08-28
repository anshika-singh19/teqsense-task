import React, { Component } from "react";
import Header from "./header";
import ProgressBar from "../components/progressBar";
import Main from "./main";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";

class CategoryLayout extends Component {
	state = {
		categoryPage: true
	};
	setCategorypage = () => {
		this.setState({
			categoryPage: true
		});
	};
	setDescriptionPage = () => {
		this.setState({
			categoryPage: false
		});
	};
	render() {
		const classes = this.props;

		return (
			<div className={classes.root}>
				<Header setCategorypage={this.setCategorypage} categoryPage={this.state.categoryPage} />
				<ProgressBar />
				<Main categoryPage={this.state.categoryPage} setDescriptionPage={this.setDescriptionPage} />
			</div>
		);
	}
}

export default withStyles(styles)(CategoryLayout);
