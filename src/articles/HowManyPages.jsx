import { Header } from '../components/Header/Header';
import { CopyrightFooter } from '../components/CopyrightFooter/CopyrightFooter';
import { ArticleHeader } from '../components/ArticleHeader/ArticleHeader';
import { PrintCalc } from '../components/PrintCalc/PrintCalc';

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
            <p>A área de cobertura de impressão é o percentual da área da página que está recebendo tinta ou toner durante a impressão. Quanto maior essa área, maior o consumo por página, causando uma diminuição da autonomia.</p>
            <h3>Calculadora de páginas impressas</h3>
            <p>Selecione um toner e compare sua autonomia de acordo com a área de cobertura utilizada:</p>
            <PrintCalc />
          </div>
        </div>
        <CopyrightFooter />
      </div>
    </>
  )
}