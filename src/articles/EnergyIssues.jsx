
import { Link } from 'react-router-dom';
import { ArticleHeader } from '../components/ArticleHeader/ArticleHeader';
import { CopyrightFooter } from '../components/CopyrightFooter/CopyrightFooter';
import { Header } from '../components/Header/Header';

import rightWayImg from '../assets/faq-assets/rightWay.svg';
import wrongWayImg from '../assets/faq-assets/wrongWay.svg';

import '../css/App.css';

export const EnergyIssues = () => {
  return (
    <div className="article-container">
      <Header />
      <ArticleHeader
        navText= " "
        titleText="Desligamento inesperado, mensagem de auto diagnóstico."
      />
      <div className="article-main">
        <div className="article-content">
          <p>Impressoras à laser utilizam voltagem 110V, e portanto quando instaladas, precisam de um transformador ou estabilizador compatível, que varia em potência de acordo com a carga necessária para cada modelo de impressora. <br />Então, a impressora deverá estar ligada à saída desse transformador (110V), e o transformador deverá estar ligado à uma fonte de alimentação (220V).</p>
          <img src={rightWayImg} className="energy-images" alt="Maneira correta de ligar" />
          <p>Os problemas podem ocorrer quando a impressora é ligada diretamente à alimentação 220V, onde irá ocorrer uma sobrecarga, danificando o equipamento. Ou então, quando ela é ligada ao transformador, porém este está ligado à outra fonte 110V de alimentação. Nesse caso, a corrente se torna muito pequena pra alimentar a impressora, que por sua vez apresenta mau funcionamento.</p>
          <img src={wrongWayImg} className="energy-images" alt="Maneira incorreta de ligar" />
          <p>Caso você detecte que tudo está conectado como deveria, mas ainda sim, um desses problemas persista, entre em contato com o suporte técnico clicando <Link to="/contact">aqui</Link>.</p>
        </div>
      </div>
      <CopyrightFooter />
    </div>
  )
}