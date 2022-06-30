import { Box } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import axios from 'axios';
import { useEffect, useState } from 'react';



const columns: GridColDef[] = [
  { field: '_id', headerName: 'ID', width: 50 },
  { field: 'nome', headerName: 'Nome', width: 200 },
];


export default function DataGridColaborador() {
  const [colaboradores, setColaboradores] = useState([]);
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/login/obter_colaboradores/')
      .then(resposta => {
        setColaboradores(resposta.data.colaboradores);
      })
      .catch(erro => {
        console.log(erro);
      });
  }, []);

  return (
    <Box
      sx={{ width: '100%', height: '100%', }}
    >
      <h2>Lista de Colaboradores</h2>
      <DataGrid
        rows={colaboradores}
        columns={columns}
        pageSize={5}
        autoHeight
        rowsPerPageOptions={[5]}
        disableSelectionOnClick />
    </Box>
  );
}