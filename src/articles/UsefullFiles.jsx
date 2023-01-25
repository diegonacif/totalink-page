import { ArticleHeader } from "../components/ArticleHeader/ArticleHeader"
import { Header } from "../components/Header/Header"
import { CopyrightFooter } from "../components/CopyrightFooter/CopyrightFooter"
import { FileCloud } from "phosphor-react";

import '../css/App.css';

export const UsefullFiles = () => {
  return (
    <div className="article-container">
      <Header />
      <ArticleHeader
        navText=" "
        titleText="Arquivos Úteis"
        iconName={<FileCloud size={48} color="#75fc63" weight="duotone" />}
      />
      <div className="article-main">
        <div className="article-content">
          <a href="https://mega.nz/folder/2t1gnTrC#Qhub_eCqFYuzlSCc_C7fZw">Clique aqui para acessar.</a>
        </div>
      </div>
      <CopyrightFooter />
    </div>
  )
}