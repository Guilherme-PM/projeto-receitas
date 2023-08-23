import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Páginas
import Erro from './pages/Error/error';
import Receitas from './pages/Receitas/receitas';
import AdicionarReceitas from './pages/AdicionarReceitas/adicionarReceitas';

// Componentes
import Header from './components/Header/header';

function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/receitas' element={<Receitas/>} />
                <Route path='/adicionarReceitas' element={<AdicionarReceitas/>} />
                <Route path='*' element={<Erro/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;