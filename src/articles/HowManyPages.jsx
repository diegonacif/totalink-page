import { Header } from '../components/Header/Header';
import { CopyrightFooter } from '../components/CopyrightFooter/CopyrightFooter';
import { ArticleHeader } from '../components/ArticleHeader/ArticleHeader';

import coberturaImg from '../assets/faq-assets/area-de-cobertura.png';
import '../css/App.css';

export const HowManyPages = () => {
  return (
    <>
      <div className="article-container">
        <Header />
        <ArticleHeader
          navText=" "
          titleText="Quantas páginas meu toner imprime?"
        />
        <div className="article-main">
          <div className="article-content">
            <p>Os fabricantes de impressora informam o número de páginas que um toner imprime tomando como referência a área de cobertura de 5%. Essa área de cobertura normalmente é ultrapassada no cotidiano das impressões.</p>
            <img src={coberturaImg} alt="Área de cobertura" />
            <h3>Área de cobertura</h3>
            <p>A área de cobertura de impressão é o percentual da área da página que está recebendo tinta ou toner durante a impressão. O preenchimento de uma folha em sua área total equivale a cobertura de página impressa, levando em conta o uso de toner ou tinta utilizada nas impressões.</p>
          </div>
        </div>
        <CopyrightFooter />
      </div>
    </>
  )
}