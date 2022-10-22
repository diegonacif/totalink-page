import { Customers } from './components/Customers/Customers';
import { Header } from './components/Header/Header';
import { Modal } from './components/Modal/Modal';
import { Trust } from './components/Trust/Trust';
import './css/App.css'

function App() {

  return (
    <main>
      <Header />
      <Modal />
      <Trust />
      <Customers />
    </main>
    )
}

export default App
