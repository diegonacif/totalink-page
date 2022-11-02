import { Header } from '../../components/Header/Header';
import { WhatsappButton } from '../../components/WhatsappButton/WhatsappButton';
import '../../css/App.css';

export const RequestQuote = () => {
  return (
    <>
      <Header />
      <div className="request-quote-container">
        <header>
          <h1>Para informações sobre orçamento para locação, entre em contato com nosso Diretor Comercial clicando no link abaixo.</h1>
          <WhatsappButton address='https://wa.me/message/6OTAK6W6W2T6D1'/>
        </header>
      </div>
    </>
  )
}