import '../../css/App.css';
import totalLogo from '../../assets/totalink-logo.png';
import { List } from 'phosphor-react'

export const Header = () => {
  return (
    <div className="header-container">
      <img src={totalLogo} alt="Total Ink Logo" />
      <List size={32} weight="bold" />
    </div>
  )
}