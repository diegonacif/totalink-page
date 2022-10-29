import { useState } from 'react'
import { List, X } from 'phosphor-react'

import '../../css/App.css';

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
          <div className="menu-item">Solicitar Orçamento</div>
          <div className="menu-item">FAQ</div>
          <div className="menu-item">Item 3</div>
        </div>
        :
        null
      }
      
    </div>
  )
}