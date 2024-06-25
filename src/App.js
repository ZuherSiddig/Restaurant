import './App.css';
import Home from './component/Home/Home';
import Nfood from './component/NavFood/Nfood';
import Footer from './component/Footer/Footer';

function App() {
  return (
  
    <>
    <div style={{position:"sticky", top:"0"}}>
    <Nfood/>
    </div>
     <Home/>
     <Footer/>
    </>
 
  );
}

export default App;
