import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Nav } from './components/Nav';
import { Header } from './components/Header';
import { Landing } from './pages/Landing';



function App() {
  return (
    <BrowserRouter>
    <>
    <Header />
    </>
    </BrowserRouter>
  );
}

export default App;
