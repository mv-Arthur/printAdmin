import axios from "axios";
import React from "react";
import { User } from "../user/User";
import classes from "./request.module.css";
import { SerUserType } from "@/pages/Main";

type ReqestsPropsType = {
	reqs: SerUserType[];
};

export const Requests: React.FC<ReqestsPropsType> = (props: ReqestsPropsType) => {
	return (
		<div className={classes.reqArea}>
			{props.reqs.length ? (
				props.reqs.map((el) => <User status={el.status} id={el.id} key={el.id} name={el.name} surname={el.surname} groupNumber={el.groupNumber} />)
			) : (
				<h2>заявок нет</h2>
			)}
		</div>
	);
};
