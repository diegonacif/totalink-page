import { Customers } from './components/Customers/Customers';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Modal } from './components/Modal/Modal';
import { Services } from './components/Services/Services';
import { TopButton } from './components/TopButton/TopButton';
import { Trust } from './components/Trust/Trust';
import './css/App.css'

function App() {

  return (
    <main>
      <Header />
      <Modal />
      <Trust />
      <Customers />
      <Services />
      <Footer />

      <TopButton />
    </main>
    )
}

export default App
