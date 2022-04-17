import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Nav } from './components/Nav';
import { Header } from './components/Header';
import { Landing } from './pages/Landing';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
        <Nav />
        <Landing />
    </div>
    </BrowserRouter>
  );
}

export default App;
