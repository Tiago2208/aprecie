import style from './Footer.module.scss';
import {ReactComponent as LogoFooter} from '../../assets/logo-digix-laranja.svg';

export default function Footer() {
  return (<footer className= {style.rodapeSistema}>
    <p className={style.rodapeSistema__texto}>Desenvolvido por</p>
    <a href="http://www.digix.com.br/">
      <LogoFooter className={style.rodapeSistema__logo}/>
    </a>
  </footer>
  );
}