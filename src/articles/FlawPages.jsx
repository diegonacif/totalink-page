import { ArticleHeader } from "../components/ArticleHeader/ArticleHeader"
import { useState } from "react";
import { Header } from "../components/Header/Header"
import { CopyrightFooter } from "../components/CopyrightFooter/CopyrightFooter"
import { CaretRight, CaretDown, Note } from 'phosphor-react';
import { YoutubeEmbed } from "../components/YoutubeEmbed/YoutubeEmbed";
import { Link } from "react-router-dom";
import falhasImg from '../assets/faq-assets/falhas.jpg';
import '../css/App.css';

export const FlawPages = () => {
  const [laserShow, setLaserShow] = useState(false);
  const [inkShow, setInkShow] = useState(false);
  return (
    <div className="article-container">
      <Header />
      <ArticleHeader 
        navText=" "
        titleText="Impressões com falhas"
        iconName={<Note size={48} color="#75fc63" weight="duotone" />}
      />
      <div className="article-main">
        <div className="article-content">
          <div className="article-row">
            <img src={falhasImg} alt="página com manchas" loading="lazy" />
            <div className="article-column">
              <div className="section-toggle" onClick={() => setLaserShow(!laserShow)}>
                <span>Impressora à laser</span>
                {
                  laserShow ?
                  <CaretDown size={16} weight="duotone" /> :
                  <CaretRight size={16} weight="duotone" />
                }
              </div>
              {
                laserShow ?
                <>
                  <p>Se áreas na impressão aparecem em branco, ou muito claras, seu toner pode estar acabando. Se possuir algum toner reserva, substitua para verificar se o problema persiste.</p>
                  <p>No caso de impressoras multi funcionais, verifique também se o problema ocorre tanto em impressões diretamente do computador, quanto em cópias.</p>
                  <p>Caso não possua toner reserva, entre em contato com a nossa equipe clicando <Link to="/contact" target="_blank">aqui</Link>.</p>
                </> :
                null
              }

              <div className="section-toggle" onClick={() => setInkShow(!inkShow)}>
                <span >Impressora Jato de Tinta / Bulk</span>
                {
                  inkShow ?
                  <CaretDown size={16} weight="duotone" /> :
                  <CaretRight size={16} weight="duotone" />
                }
              </div>
              {
                inkShow ?
                <>
                  <p>Falhas na impressão podem ser devido a falta de tinta no cabeçote de impressão, entupimento nos dutos que transportam a tinta do bulk até o cabeçote, ou em casos mais graves, furos ou outros danos na lâmina do cabeçote.</p>
                  <p>O procedimento mais básico é realizar uma limpeza no cabeçote. É um processo automatizado que pode ser feito no painel da impressora, ou em um computador que esteja conectado à ela.</p>
                  <YoutubeEmbed embedId="6I7gmly_kn4" />
                  <p>Se mesmo após 3 tentativas de limpeza do cabeçote, as impressões continuem com falhas, entre em contato com o suporte técnico clicando <Link to="/contact" target="_blank">aqui</Link>.</p>
                </> :
                null
              }
            </div>
          </div>
        </div>
      </div>
      <CopyrightFooter />
    </div>
  )
}