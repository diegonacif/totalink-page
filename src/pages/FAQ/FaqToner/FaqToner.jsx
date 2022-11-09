import { Link } from "react-router-dom";
import { Header } from "../../../components/Header/Header"

import '../../../css/App.css';
import lessThan from '../../../assets/greater-than-sign.svg';
import { ArticleHeader } from "../../../components/ArticleHeader/ArticleHeader";

export const FaqToner = () => {
  return (
    <div className="faq-toner-container">
      <Header />
      <ArticleHeader 
        navText=""
        titleText="Problemas com Toner" 
      />
      
      <section>
        <Link to="/article/how-many-pages" className="question-row">
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