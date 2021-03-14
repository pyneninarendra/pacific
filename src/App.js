import './App.css';
import Footer from './Footer'
import Home from './Home';

function App() {
  const developer='Narendra Kumar'
  return (
    <div className="App">
      <Home />      
      <Footer developer={developer} />
    </div>
  );
}

export default App;
