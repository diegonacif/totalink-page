import { useState } from 'react'
import { List, X } from 'phosphor-react'

import '../../css/App.css';
import { Link } from 'react-router-dom';

export const MenuButton = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <div className="menu-button-container">
      { 
        isMenuOpen ? 
        <X size={32} weight="bold" onClick={() => handleMenuOpen()} /> :
        <List size={32} weight="bold" onClick={() => handleMenuOpen()} />
      }
      {
        isMenuOpen
        ?
        <div className="menu-modal">
          <div className="menu-item">
            <Link to="/">Home</Link>
          </div>
          <hr />
          <div className="menu-item">
            <Link to="/quote">Solicitar Orçamento</Link>
          </div>
          <div className="menu-item">
            <Link to="/faq">FAQ</Link>
          </div>
        </div>
        :
        null
      }
      
    </div>
  )
}