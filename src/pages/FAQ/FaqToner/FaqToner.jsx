import { CaretDoubleRight } from "phosphor-react";
import { Link } from "react-router-dom";
import { Header } from "../../../components/Header/Header"

import '../../../css/App.css';
import lessThan from '../../../assets/greater-than-sign.svg';

export const FaqToner = () => {
  return (
    <div className="faq-toner-container">
      <Header />
      <header>
        <nav>
          <Link to="/faq">Início</Link>
          <img src={lessThan} alt="" />
        </nav>
        <h1>Problemas com Toner</h1>
      </header>
      <section>
        <Link to="#" className="question-row">
          <span>Quantas páginas meu toner imprime?</span>
          <img src={lessThan} alt="" />
        </Link>
        <Link to="#" className="question-row">
          <span>Impressões apresentando falhas</span>
          <img src={lessThan} alt="" />
        </Link>
        <Link to="#" className="question-row">
          <span>Impressões com manchas</span>
          <img src={lessThan} alt="" />
        </Link>
        <Link to="#" className="question-row">
          <span>Impressões muito claras</span>
          <img src={lessThan} alt="" />
        </Link>
      </section>
      
    </div>
  )
}