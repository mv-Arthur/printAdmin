import { SerUserType } from "@/pages/Main";
import React, { ChangeEvent } from "react";
import classes from "./fullUser.module.css";
import Paper from "@mui/material/Paper";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";
import axios from "axios";
type FUPropsType = {
	user: SerUserType;
	getActual: (status: string, price: number) => void;
};

export const FullUser: React.FC<FUPropsType> = (props: FUPropsType) => {
	const [status, setStatus] = React.useState<string>(props.user.status);
	const [price, setPrice] = React.useState<number>(props.user.price);

	const handleChange = (e: SelectChangeEvent) => {
		setStatus(e.target.value);
	};
	const handlePriceChange = (e: ChangeEvent<HTMLInputElement>) => {
		setPrice(Number(e.target.value));
	};

	React.useEffect(() => {
		props.getActual(status, price);
	}, [status, price]);

	const handleDownload = () => {
		window.location.href = `http://localhost:4000/operator/file/${props.user.id}`;
	};

	return (
		<div className={classes.main}>
			<Paper>
				<div className={classes.row}>
					<div>Имя:</div>
					<div>{props.user.name}</div>
				</div>
				<div className={classes.row}>
					<div>Фамилия:</div>
					<div>{props.user.surname}</div>
				</div>
				<div className={classes.row}>
					<div>Номер группы:</div>
					<div>{props.user.groupNumber}</div>
				</div>
				<div className={classes.row}>
					<div>цена:</div>
					<TextField id="outlined-basic" variant="standard" value={price} type="number" onChange={handlePriceChange} />
				</div>
				<div className={classes.row}>
					<div>статус:</div>
					<FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
						<Select
							labelId="demo-simple-select-standard-label"
							value={status}
							defaultValue={status}
							onChange={handleChange}
							id="demo-simple-select-standard"
							label="Age"
						>
							<MenuItem value={"в работе"}>В работе</MenuItem>
							<MenuItem value={"выполнено"}>Выполнено</MenuItem>
							<MenuItem value={"ожидает принятия"}>Ожидает принятия</MenuItem>
						</Select>
					</FormControl>
				</div>
				<div className={classes.row}>
					<div>дата и время отправки:</div>
					<div>{props.user.createdAt}</div>
				</div>
				<div className={classes.row}>
					<div>файл:</div>
					<Button onClick={handleDownload} variant="text" style={{ transform: "translateY(2px)" }}>
						скачать
					</Button>
				</div>
			</Paper>
		</div>
	);
};
