import { AddBox } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import DataGridColaborador from '../../components/DataGridColaborador';

export default function ListagemColaboradoresCadastrados() {
  const navegar = useNavigate();
  return (
    <>
      <DataGridColaborador />
      <Button sx={{mt: 2}} variant='contained' startIcon={<AddBox />} onClick={() => {navegar('/cadastro');}} >
        Cadastrar
      </Button>
    </>  
  );
}