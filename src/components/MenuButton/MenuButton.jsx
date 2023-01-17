import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom';

import '../../css/App.css';

// Outside Click (Hook)
import { useOnClickOutside } from 'usehooks-ts'

// Conditional Rendering Transition Lib
import { useTransition, animated } from '@react-spring/web';

// Hamburguer Menu Button with Animation
import { Twirl as Hamburguer } from 'hamburger-react';

export const MenuButton = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  // Outside Click (Variable)
  const refContainer = useRef(null);

  const handleClickOutside = () => {
    setIsMenuOpen(false);
  }

  useOnClickOutside(refContainer, handleClickOutside)

  // Modal Animation
  const transitions = useTransition(isMenuOpen, {
    from: { x: 10, y: -10, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: 10, y: -10, opacity: 0 },
    config: {duration: 200},
  });

  const controlUrl = "http://54.94.82.25:4173";
  
  return (
    <div 
      className="menu-button-container"
      onClick={() => handleMenuOpen()}
      ref={refContainer} // Outside Click (Reference)
    > 
      <Hamburguer 
        toggled={isMenuOpen} 
        toggle={handleMenuOpen}
        size={30}
        duration={0.3}
        rounded
        label="abrir menu"
      />
            
      {/* Conditional Rendering with Transition */}
      {
        transitions(
          (styles, item) => item &&
            <animated.div className="menu-modal" style={styles}>
              <div className="menu-item">
                <Link to="/aboutus">Sobre Nós</Link>
              </div>
              <div className="menu-item">
                <Link to="/contact">Fale Conosco</Link>
              </div>
              <div className="menu-item">
                <Link to="/faq">Dúvidas Frequentes</Link>
              </div>
              <hr />
              <div className="menu-item">
              <a href={controlUrl}>Área Restrita</a>
              </div>
            </animated.div>
        )
      }
    </div>
  )
}