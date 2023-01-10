import { UserCircle } from 'phosphor-react';
import '../../css/App.css';

export const Chat = () => {
  return (
    <div className="chat-container">
      <div className="header">
        <UserCircle size={56} color="#ffffff" weight="duotone" />
        <span className="">Fale conosco</span>
      </div>
      <main>
        <div className="chat-row question">
          <UserCircle size={38} color="#ffffff" weight="duotone" />
          <span>Qualquer coisa escrita</span>
        </div>
        <div className="chat-row answer">
          <UserCircle size={38} color="#ffffff" weight="duotone" />
          <span>Qualquer coisa escrita</span>
        </div>
      </main>
      <div className="footer">
        <input type="text" />
      </div>
    </div>
  )
}