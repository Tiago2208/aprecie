import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Menu from './components/Menu';
import token from './data/token.json';
import CadastroColaboradores from './pages/CadastroColaboradores';
import ListagemColaboradoresCadastrados from './pages/ListagemColaboradoresCadastrados';
import NotFound from './pages/NotFound';

export default function AprecieRouter() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<ListagemColaboradoresCadastrados />} />
        <Route path="/cadastro" element={<CadastroColaboradores token={token} />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}