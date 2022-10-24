import whatsappLogo from '../../assets/whatsapp-icon.svg';
import '../../css/App.css';

export const WhatsappButton = () => {
  return (
    <>
      <div className="whatsapp-button">
        <img src={whatsappLogo} alt="Botão Whatsapp"/>
      </div>
      <div className="whatsapp-expansion">
        <span>Teste</span>
      </div>
    </>
  )
}