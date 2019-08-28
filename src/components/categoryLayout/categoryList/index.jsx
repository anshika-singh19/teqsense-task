import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CropSquare } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
	listItems: {
		backgroundColor: "#fdfcfc",
		padding: "1rem",
		lineHeight: 1.5,
		fontWeight: 300,
		listStyle: "none",
		fontSize: "1.4rem",
		borderTop: "1.5px solid #dedbdb",
		textAlign: "left",
		cursor: "pointer"
	},
	listWrapper: {
		padding: 0,
		margin: 0,
		borderBottom: "1.5px solid #dedbdb"
	},
	icon: {
		height: "40px",
		width: "40px",
		borderRadius: "50%",
		backgroundColor: "#f9ebd1",
		marginRight: "15px",
		verticalAlign: "middle"
	}
}));
function CategoryList({ category, setDescriptionPage }) {
	const classes = useStyles();

	const categoryItems = category.map(categoryItem => (
		<li className={classes.listItems} key={categoryItem.name} onClick={setDescriptionPage}>
			<CropSquare className={classes.icon} />
			{categoryItem.name}
		</li>
	));

	return <ul className={classes.listWrapper}>{categoryItems}</ul>;
}

export default CategoryList;
