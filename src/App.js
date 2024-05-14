import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Doctors from './Pages/Doctors/Doctors';
import NotFound from './Pages/NotFound/NotFound';
import Header from './Pages/Header/Header';
import Services from './Pages/Services/Services';
import Footer from './Pages/Footer/Footer';
import Login from './Pages/Login/Login';
import AuthProvider from './contexts/AuthProvider';
function App() {
  return (
    <div className="App">
    <AuthProvider>
    <BrowserRouter>
      <Header></Header>
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/home" element={<Home />} />
  <Route path="/doctors" element={<Doctors />}/>
  <Route path="/services" element={<Services />}/>
  <Route path="/login" element={<Login />}/>
    <Route path="*" element={<NotFound />} />
  
</Routes>
<Footer></Footer>

      </BrowserRouter>
    </AuthProvider>
    </div>
  );
}

export default App;
