import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Páginas
import Home from './pages/Home/home';
import Receitas from './pages/Receitas/receitas';
import Erro from './pages/Error/error';

// Componentes
import Header from './components/Header/header';

function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/receitas' element={<Receitas/>} />
                <Route path='*' element={<Erro/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;