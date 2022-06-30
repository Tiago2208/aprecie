import style from './Menu.module.scss';
import { Link } from 'react-router-dom';
import logoAprecie from '../../assets/logoAprecie.png';

export default function Menu() {
  const rotas = [{ label: 'Colaboradores', to: '/' }, { label: 'Cadastro', to: '/cadastro' }, { label: 'Apreciações', to: '/apreciacoes' }];
  return (
    <header className={style.cabecalhoSistema}>
      <div className={style.cabecalhoSistema__containerPrimario}>
        <a href="/">
          <img className={style.cabecalhoSistema__logo} width="105" src={logoAprecie} alt="Logotipo do Digix UI"/>
        </a>
        <nav className={style.cabecalhoSistema__menu} aria-label="Menu principal">
          <ul className={style.cabecalhoSistema__listaDeItens}>
            {rotas.map((rota, index) => <li key={index}>
              <Link className={style.cabecalhoSistema__itemDeMenu} to={rota.to}>
                {rota.label}
              </Link>
            </li>)}
          </ul>
        </nav>
      </div>
    </header>

  );
}
