
import './App.css';
import Header from './component/Header';
import Cards from './component/Cards';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route,Routes } from 'react-router-dom';
import { CardDetails } from './component/CardDetails';
import { Footer } from './component/Footer';

function App() {
  return (
    <>

    <Header/>
    <Routes>
    <Route path="/" element={<Cards/>}></Route>

      <Route path="/cart/:id" element={<CardDetails/>}></Route>

    </Routes>
   <Footer/>
    </>
  );
}

export default App;
