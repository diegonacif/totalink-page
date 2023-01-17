import { Link } from 'react-router-dom';
import '../../css/App.css';

export const HeaderNav = () => {
  const controlUrl = "http://54.94.82.25:4173"
  return (
    <div className="header-nav-container">
      <Link to="/aboutus">Sobre Nós</Link>
      <Link to="/contact">Fale Conosco</Link>
      <Link to="/faq">Dúvidas Frequentes</Link>
      <a href={controlUrl}>Área Restrita</a>
      {/* <Link to="/faq">Dúvidas Frequentes</Link> */}
    </div>
  )
}