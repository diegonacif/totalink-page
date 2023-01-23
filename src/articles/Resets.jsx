import { Repeat } from 'phosphor-react';
import { ArticleHeader } from '../components/ArticleHeader/ArticleHeader';
import { CopyrightFooter } from '../components/CopyrightFooter/CopyrightFooter';
import { Header } from '../components/Header/Header';

import '../css/App.css';

export const Resets = () => {
  return (
    <div className="article-container">
      <Header />
      <ArticleHeader
        navText=" "
        titleText="Resets"
        iconName={<Repeat size={48} color="#75fc63" weight="duotone" />}
      />
      <div className="article-main">
        <div className="article-content">
          <h1>Article Container</h1>
        </div>
      </div>
      <CopyrightFooter />
    </div>
  )
}