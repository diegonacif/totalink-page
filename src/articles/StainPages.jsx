import { Header } from '../components/Header/Header';
import { CopyrightFooter } from '../components/CopyrightFooter/CopyrightFooter';
import { ArticleHeader } from '../components/ArticleHeader/ArticleHeader';
import { Note } from 'phosphor-react';
import { Link } from 'react-router-dom';

import manchasImg from '../assets/faq-assets/manchas.jpg';
import '../css/App.css';

export const StainPages = () => {
  return (
    <div className="article-container">
      <Header />
      <ArticleHeader
        navText=" "
        titleText="Impressões com manchas"
        iconName={<Note size={48} color="#75fc63" weight="duotone" />}
      />
      <div className="article-main">
        <div className="article-content">
          <div className="article-row">
            <img src={manchasImg} alt="página com manchas" loading="lazy" />
            <div className="article-column">
              <p>Caso sua impressão esteja apresentando manchas escuras que cobrem toda a área impressa, pontos aleatórios ou duplicando a impressão criando imagens “fantasmas”, seu toner pode ser a causa do problema.</p>
              <p>Se possuir algum toner reserva, substitua para verificar se o problema persiste.</p>
              <p>Caso não possua, entre em contato com a nossa equipe clicando <Link to="/contact" target="_blank">aqui</Link>.</p>
            </div>
          </div>
        </div>
      </div>
      <CopyrightFooter />
    </div>
  )
}