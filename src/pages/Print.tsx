import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridToolbar, GridValueGetterParams } from "@mui/x-data-grid";
import { SerUserType } from "./Main";
import axios from "axios";
import Button from "@mui/material/Button/Button";
import { useNavigate } from "react-router-dom";

const columns: GridColDef[] = [
	{
		field: "name",
		headerName: "Имя",
		width: 150,
	},
	{
		field: "surname",
		headerName: "Фамилия",
		width: 150,
	},
	{
		field: "groupNumber",
		headerName: "Номер группы",
		width: 150,
	},
	{
		field: "price",
		headerName: "Выплаченная сумма",
		type: "number",
		width: 150,
	},
];

export function Print() {
	const [users, setUsers] = React.useState([]);
	const navigate = useNavigate();
	React.useEffect(() => {
		(async () => {
			const data = (await axios.get("http://localhost:4000/operator")).data;
			setUsers(data);
		})();
	}, []);

	return (
		<Box sx={{ height: 800, width: "100%" }}>
			<Button onClick={() => navigate("/")}>Назад</Button>
			<DataGrid
				rows={users}
				columns={columns}
				initialState={{
					pagination: {
						paginationModel: {
							pageSize: 10,
						},
					},
				}}
				pageSizeOptions={[10]}
				disableRowSelectionOnClick
				slots={{ toolbar: GridToolbar }}
			/>
		</Box>
	);
}
