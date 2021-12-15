
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Popup from './components/popup/Popup';
import Shop from './components/shop/Shop';
import { useSelector} from 'react-redux'


function App() {
  const {popup} = useSelector(state => state)
  return (
    <div className="App">
      <Header/>
      <Shop/>
      <Footer/>
      {popup ? <Popup/> : null}
    </div>
  );
}

export default App;
