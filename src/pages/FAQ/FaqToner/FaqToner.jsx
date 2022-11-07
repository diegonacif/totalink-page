import { CaretDoubleRight } from "phosphor-react";
import { Link } from "react-router-dom";
import { Header } from "../../../components/Header/Header"

import '../../../css/App.css';

export const FaqToner = () => {
  return (
    <div className="faq-toner-container">
      <Header />
      <header>
        <nav>
          <Link to="/faq">Início</Link>
          <CaretDoubleRight size={20} color="#241f31" weight="duotone" />
        </nav>
        <h1>Problemas com Toner</h1>
      </header>
    </div>
  )
}