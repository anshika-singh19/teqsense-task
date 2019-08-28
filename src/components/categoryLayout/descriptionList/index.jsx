import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { CheckCircleOutline, ArrowForwardIos } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
	listItems: {
		backgroundColor: "#fdfcfc",
		padding: "1rem 1rem 0.5rem 1rem",
		lineHeight: 1.5,
		fontWeight: 300,
		listStyle: "none",
		fontSize: "1.4rem",
		borderTop: "1.5px solid #dedbdb",
		textAlign: "left",
		cursor: "pointer",
		position: "relative"
	},
	listWrapper: {
		padding: 0,
		margin: 0,
		borderBottom: "1.5px solid #dedbdb"
	},
	title: {
		fontWeight: 400
	},
	serviceDetail: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		position: "relative"
	},
	efforts: {
		fontSize: "13px"
	},
	servicePrice: {
		fontSize: "17px",
		textAlign: "right",
		fontWeight: 400,
		marginRight: "25px",
		fontStyle: "italic"
	},
	divider: {
		border: "0.5px solid #dedbdb",
		marginBottom: "0.5rem"
	},
	extraDetail: {
		fontSize: "11px",
		fontWeight: 300
	},
	serviceList: {
		fontSize: "11px",
		fontWeight: 300,
		listStyle: "none"
	},
	serviceListWrapper: {
		margin: 0,
		padding: 0
	},
	bulletIcon: {
		fontSize: "11px",
		fontWeight: 300,
		verticalAlign: "middle",
		marginRight: "5px"
	},
	openArrow: {
		position: "absolute",
		cursor: "pointer",
		right: "5px",
		top: "20px",
		fontSize: "20px"
	}
}));
function CategoryList({ descriptionList }) {
	const classes = useStyles();

	const descriptionItems = descriptionList.map(item => (
		<li className={classes.listItems} key={item.packType}>
			<Typography variant="h6" className={classes.title}>
				{item.packType}
			</Typography>
			<div className={classes.serviceDetail}>
				{item.noOfMovers ? (
					<div className={classes.service}>
						<div className={classes.efforts}>{item.noOfMovers} Movers</div>
						<div className={classes.efforts}>{item.movingHours} Hours</div>
					</div>
				) : null}
				{item.price ? (
					<div className={classes.servicePrice}>
						<div>${item.price}</div>
						<div className={classes.extraDetail}>*${item.extraCharge} for each addition hour</div>
					</div>
				) : null}
			</div>
			{item.services.length > 0 ? (
				<>
					<hr className={classes.divider} />
					<ul className={classes.serviceListWrapper}>
						{item.services.map(service => (
							<li className={classes.serviceList}>
								<CheckCircleOutline className={classes.bulletIcon} />
								{service}
							</li>
						))}
					</ul>
				</>
			) : null}
			<ArrowForwardIos className={classes.openArrow} />
		</li>
	));

	return <ul className={classes.listWrapper}>{descriptionItems}</ul>;
}

export default CategoryList;
