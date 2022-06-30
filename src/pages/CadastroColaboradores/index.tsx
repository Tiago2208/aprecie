import { Box, Button } from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from 'react-router-dom';
import FormularioCadastroColaborador from '../../components/FormularioCadastroColaborador';

interface Props {
    token: any
}

export default function CadastroColaboradores({token}: Props) {
  const navegar = useNavigate();

  return (
    <Box>
      <FormularioCadastroColaborador token={token} />
      <Button sx={{mt: 2}} variant="outlined" endIcon={<KeyboardBackspaceIcon />} onClick={() => navegar(-1)} />
    </Box>
  );
}