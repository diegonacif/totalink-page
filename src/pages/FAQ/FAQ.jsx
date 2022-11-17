import { Link } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { CopyrightFooter } from '../../components/CopyrightFooter/CopyrightFooter';

import '../../css/App.css';

export const FAQ = () => {
  return (
    <>
      <Header />
      <div className="faq-container">
        <header>
          <h1>Encontre respostas rápidas pro seu problema, nas categorias abaixo.</h1>
        </header>
        <div className="faq-categories">
          <Link to="/faq/toner">
            <div className="faq-category">
              <span >Toner</span>
              <div className="faq-category-img toner-card"></div>
            </div>
          </Link>
          <div className="faq-category">
            <span id="drum-card-text">Fotocondutor</span>
            <div className="faq-category-img drum-card"></div>
          </div>
          <div className="faq-category">
            <span>Erros / Defeitos</span>
            <div className="faq-category-img error-card"></div>
          </div>
          <div className="faq-category">
            <span>Tanques de Tinta / Bulk</span>
            <div className="faq-category-img bulk-card"></div>
          </div>
        </div>
        <CopyrightFooter />
      </div>
    </>
  )
}