import { Header } from '../../components/Header/Header';
import { CopyrightFooter } from '../../components/CopyrightFooter/CopyrightFooter';
import { ArticleHeader } from '../../components/ArticleHeader/ArticleHeader';

import '../../css/App.css';

export const HowManyPages = () => {
  return (
    <div className="article-container">
      <Header />
      <ArticleHeader
        navText="Problemas com Toner"
        titleText="Quantas páginas meu toner imprime?"
      />
      <main>
        <div className="article-content">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita corrupti deserunt saepe corporis facilis qui doloremque ea ipsam eos! Ducimus tempora harum iste doloremque aspernatur saepe incidunt tenetur soluta nihil.</p>
          <p>Quod ducimus suscipit autem cumque sequi nobis consequatur ipsam excepturi neque, minus atque magni adipisci non totam numquam, vitae voluptatibus facere asperiores repellat corrupti voluptatum in voluptates. Id, at distinctio!</p>
          <p>Aperiam laudantium minus iure assumenda dolorem? Ipsam perferendis architecto veritatis eaque doloremque similique, maxime reprehenderit tenetur a blanditiis tempora laborum eligendi nemo nobis repudiandae et quia, atque rem possimus voluptates?</p>
          <p>Deleniti fuga officiis quo, delectus labore culpa earum reiciendis sed ex repellendus repudiandae officia dolores incidunt, dicta soluta dignissimos nostrum at deserunt vero ratione hic odio odit ipsa. Doloremque, quaerat?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed libero beatae reiciendis. Rerum facilis in vero consectetur, eligendi sapiente perspiciatis omnis animi quibusdam quis voluptatem, repudiandae deleniti dolorum perferendis quaerat.</p>
          <p>Cupiditate aliquid provident et enim? Dolores quos enim, voluptatem molestias facilis excepturi perferendis. Dolore inventore non iste magnam atque nam doloribus odit! Ullam inventore odio recusandae quisquam nam, qui assumenda?</p>
          <p>Optio fugit magnam deleniti tenetur ea excepturi sunt maxime! Sed autem quia blanditiis, doloremque temporibus assumenda! Repellat labore aut modi optio minima exercitationem assumenda fuga libero fugit laborum. Temporibus, eveniet!</p>
          <p>Sed ea eveniet quis numquam incidunt voluptatem officia odio eum tenetur architecto vel rerum illo a esse fuga doloremque dignissimos quibusdam magnam, iusto distinctio enim nam voluptates? Molestias, odio voluptates.</p>
        </div>
      </main>
      <CopyrightFooter />
    </div>
  )
}