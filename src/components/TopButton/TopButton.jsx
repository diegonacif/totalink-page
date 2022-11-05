import '../../css/App.css';
import { ArrowCircleUp } from 'phosphor-react'
import { useState } from 'react';


export const TopButton = () => {

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 200){
      setIsVisible(true);
    }
    else if (scrolled <= 300){
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <div className="top-button-container">
      <ArrowCircleUp 
        size={40} 
        color="#095531" 
        weight="duotone" 
        onClick={scrollToTop}
        style={{ display: isVisible ? 'inline' : 'none' }}
      />
    </div>
  )
}