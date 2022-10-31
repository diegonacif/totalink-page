import { Link } from 'react-router-dom';
import { Header } from '../../components/Header/Header';

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
          <div className="faq-category">
            <Link to="#">Toner</Link>
          </div>
          <div className="faq-category">
            <Link to="#">Cilindro / Fotocondutor</Link>
          </div>
          <div className="faq-category">
            <Link to="#">Erros / Defeitos</Link>
          </div><div className="faq-category">
            <Link to="#">Tanques de Tinta / Bulk</Link>
          </div>
        </div>
      </div>
    </>
  )
}