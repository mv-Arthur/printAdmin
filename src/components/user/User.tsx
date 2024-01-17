import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import classes from "./user.module.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

type UserPropsType = {
	name: string;
	surname: string;
	groupNumber: string;
	id: number;
	status: string;
};

export const User: React.FC<UserPropsType> = (props: UserPropsType) => {
	const navigate = useNavigate();

	const onClickHandle = () => {
		navigate(`/reqest/${props.id}`);
	};

	return (
		<div>
			<Box
				sx={{
					display: "flex",
					flexWrap: "wrap",
					"& > :not(style)": {
						m: 1,
						minWidth: 228,
						height: 228,
					},
				}}
			>
				<Paper elevation={3} style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "10px" }}>
					<div className={classes.container}>
						<div className={classes.row}>
							<div>Имя:</div>
							<div>{props.name}</div>
						</div>
						<div className={classes.row}>
							<div>Фамилия:</div>
							<div>{props.surname}</div>
						</div>
						<div className={classes.row}>
							<div>Номер группы:</div>
							<div>{props.groupNumber}</div>
						</div>
						<div className={classes.row}>
							<div>статус:</div>
							<div>{props.status}</div>
						</div>
					</div>
					<div className={classes.buttonsArea}>
						{" "}
						<Button variant="contained" onClick={onClickHandle}>
							смотреть далее
						</Button>
					</div>
				</Paper>
			</Box>
		</div>
	);
};
