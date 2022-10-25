import { Customers } from './components/Customers/Customers';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Modal } from './components/Modal/Modal';
import { Trust } from './components/Trust/Trust';
import { WhatsappButton } from './components/WhatsappButton/WhatsappButton';
import './css/App.css'

function App() {

  return (
    <main>
      <Header />
      <Modal />
      <Trust />
      <Customers />
      <Footer />
      {/* <WhatsappButton /> */}
    </main>
    )
}

export default App
