import { Requests } from "@/components/requests/Requests";
import axios from "axios";
import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useNavigate } from "react-router-dom";
export type SerUserType = {
	createdAt: string;
	filePath: string;
	groupNumber: string;
	id: number;
	name: string;
	price: number;
	status: string;
	surname: string;
	updatedAt: string;
};
export const Main = () => {
	const [users, setUsers] = React.useState<SerUserType[]>([]);
	const [open, setOpen] = React.useState(false);
	const navigate = useNavigate();
	React.useEffect(() => {
		(async () => {
			setUsers((await axios.get("http://localhost:4000/operator")).data);
		})();
	}, []);

	const onClick = async () => {
		setUsers((await axios.get("http://localhost:4000/operator")).data);
	};

	const clear = async () => {
		console.log("worked");
		await axios.delete("http://localhost:4000/operator");
		setUsers([]);
		handleClose();
	};

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	return (
		<div>
			<Button onClick={onClick}>Обновить</Button>
			<Button onClick={handleClickOpen}>Очистить</Button>
			<Button onClick={() => navigate("/print")}>Сводная таблица</Button>
			<Requests reqs={users} />
			<Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
				<DialogTitle id="alert-dialog-title">Очистить историю</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">вы уверены что хотите очистить историю заявок, данные исчезнут навсегда</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={clear}>Да</Button>
					<Button onClick={handleClose} autoFocus>
						Нет
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};
