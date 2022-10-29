import '../../css/App.css';
import totalLogo from '../../assets/totalink-logo.png';
import { MenuButton } from '../MenuButton/MenuButton';

export const Header = () => {
  return (
    <div className="header-container">
      <img src={totalLogo} alt="Total Ink Logo" />
      <MenuButton />
    </div>
  )
}