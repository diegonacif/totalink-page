import { Link } from 'react-router-dom';
import '../../css/App.css';

export const HeaderNav = () => {
  return (
    <div className="header-nav-container">
      <Link to="/aboutus">Sobre Nós</Link>
      <Link to="/contact">Fale Conosco</Link>
      <Link to="/faq">Dúvidas Frequentes</Link>
    </div>
  )
}