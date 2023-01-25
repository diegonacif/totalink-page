import { Header } from '../components/Header/Header';
import { CopyrightFooter } from '../components/CopyrightFooter/CopyrightFooter';
import { ArticleHeader } from '../components/ArticleHeader/ArticleHeader';
import { Note } from 'phosphor-react';

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
          <p>Caso sua impressão esteja apresentando manchas escuras que cobrem toda a área impressa, pontos aleatórios ou duplicando a impressão criando imagens “fantasmas”, seu toner pode ser a causa do problema.</p>
          <img src={manchasImg} alt="página com manchas" loading="lazy" />
          <p>Se possuir algum toner reserva, substitua para verificar se o problema persiste.</p>
          <p>Caso não possua, entre em contato com a nossa equipe clicando aqui.</p>
        </div>
      </div>
      <CopyrightFooter />
    </div>
  )
}