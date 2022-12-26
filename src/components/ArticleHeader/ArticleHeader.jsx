import { Link, useNavigate } from "react-router-dom";
import greaterThan from '../../assets/greater-than-sign.svg';

export const ArticleHeader = ({ navText, titleText }) => {
  const nav = navText ? navText : null;
  const title = titleText ? titleText : null;
  
  const navigate = useNavigate();
  const NavigateUp = () => {
    navigate(-1);
  }

  return (
    <div className="article-header">
      <header>
        <nav>
          <Link to="/faq">Início</Link>
          {
            nav 
            ?
            <div className="nav-variable-wrapper">
              <img src={greaterThan} alt="" />
              <span onClick={NavigateUp}>{nav}</span>
            </div> 
            :
            null
          }
        </nav>
        { title ? <h1>{title}</h1> : null }
      </header>
    </div>
  );
};