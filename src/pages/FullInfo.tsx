import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SerUserType } from "./Main";
import axios from "axios";
import { FullUser } from "@/components/fullUser/FullUser";
import Button from "@mui/material/Button";

type ActualType = {
	price: number | null;
	status: string | null;
};
const actual: ActualType = {
	price: null,
	status: null,
};
export const FullInfo = () => {
	const [user, setUser] = React.useState<SerUserType>();
	const param = useParams();
	const navigate = useNavigate();
	React.useEffect(() => {
		(async () => setUser((await axios.get(`http://localhost:4000/operator/${param.id}`)).data))();
	}, []);

	const onBack = () => {
		navigate("/");
	};

	const getActual = (status: string, price: number) => {
		actual.price = price;
		actual.status = status;
	};

	const onSave = async () => {
		await axios.put(`http://localhost:4000/operator/${param.id}`, {
			newStatus: actual.status,
			newPrice: actual.price,
		});
	};

	return (
		<div>
			{user ? <FullUser getActual={getActual} user={user} /> : "запись не найдена"}
			<Button variant="contained" onClick={onBack} style={{ marginTop: "30px", marginRight: "10px" }}>
				Назад
			</Button>
			<Button onClick={onSave} variant="contained" style={{ marginTop: "30px" }}>
				Сохранить
			</Button>
		</div>
	);
};
