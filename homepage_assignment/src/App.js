// import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import ProductInfo from './Components/ProductInfo';
import Features from './Components/Features';
import Buy from './Components/Buy';
import Footer from './Components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <ProductInfo />
      <Features />
      <Buy />
      <Footer />
    </div>
  );
}

export default App;
