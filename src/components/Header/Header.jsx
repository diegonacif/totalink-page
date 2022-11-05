import '../../css/App.css';
import totalLogo from '../../assets/totalink-logo.png';
import { MenuButton } from '../MenuButton/MenuButton';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className="header-container">
      <Link to="/" >
        <img src={totalLogo} alt="Total Ink Logo" />
      </Link>
      <MenuButton />
    </div>
  )
}