import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';
import Slider from './components/Slider';
import Scroll from './components/Scroll';
import Place from './components/Place';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Slider />
        <Scroll />
        <Place/>
      </BrowserRouter>
    </>
  );
}

export default App;
