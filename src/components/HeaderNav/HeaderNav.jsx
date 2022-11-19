import { Link } from 'react-router-dom';
import '../../css/App.css';

export const HeaderNav = () => {
  return (
    <div className="header-nav-container">
      <Link to="/quote">Solicitar Orçamento</Link>
      <Link to="/faq">FAQ</Link>
    </div>
  )
}