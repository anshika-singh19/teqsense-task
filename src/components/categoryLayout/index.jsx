import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CategoryList from "./categoryList";
import DescriptionList from "./descriptionList";

export default class CategoryLayout extends Component {
	constructor(props) {
		super(props);
		this.state = {
			category: [
				{ name: "4+ BEDROOMS", link: "" },
				{ name: "3 BEDROOMS", link: "" },
				{ name: "2 BEDROOMS", link: "" },
				{ name: "FEW ITEMS", link: "" }
			],
			descriptionList: [
				{
					category: "4+ BEDROOMS",
					packType: "PARTIAL PACK",
					noOfMovers: "4",
					movingHours: "3",
					price: "1231",
					extraCharge: "150",
					services: [
						"included all boxes & tapes",
						"we will be doing packing",
						"quilt pad wrap to all your furniture"
					]
				},
				{
					category: "4+ BEDROOMS",
					packType: "FULL PACK",
					noOfMovers: "6",
					movingHours: "4",
					price: "2499",
					extraCharge: "150",
					services: [
						"included all boxes & tapes",
						"we will be doing packing",
						"quilt pad wrap to all your furniture"
					]
				},
				{
					category: "4+ BEDROOMS",
					packType: "I'LL PACK MYSELF",
					noOfMovers: "2",
					movingHours: "2",
					price: "1231",
					extraCharge: "150",
					services: []
				},
				{
					category: "4+ BEDROOMS",
					packType: "CUSTOMIZE",
					noOfMovers: "",
					movingHours: "",
					price: "",
					extraCharge: "",
					services: []
				}
			]
		};
	}

	render() {
		return this.props.categoryPage ? (
			<CategoryList category={this.state.category} setDescriptionPage={this.props.setDescriptionPage} />
		) : (
			<DescriptionList descriptionList={this.state.descriptionList} />
		);
	}
}
