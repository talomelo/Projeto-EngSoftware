import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';

import Logo from './Components/Logo/Logo';


function App() {

  return (
    <>
      <div>
        <Logo img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLHGbOxIt-9XlVBMhtzfzWHWahmpFUX65ccGNJB9OOZAKZlHtuSjkcUnemzoAp8mDh6Vg&usqp=CAU" des="geoMapa"/>
      </div>
      <Router>
        <nav>
          <Link to="/Entrar">Entrar</Link>
          <Link to="/Cadastre-se">Cadastre-se</Link>
        </nav>
      </Router>

      {/* <Routes>
        <Route path='/Components/Pages/Entrar' element={<Entrar />} />
        <Route path='/cadastre' element={<Cadatre-se />} />
      </Routes> - problema no router */}

      <section>
        <h3>Saiba mais sobre cada pais</h3>
        <h1>GeoMundo: Conheça os países, Explore os Planetas</h1>
        <p>O GeoMundo é sua plataforma de referência para explora o mundo.</p>
        <p>
          Descubra informações detalhadas sobre países, incluindo dados geográficos, descrições rápidas e mapas interativos 
          ideal para estudantes e curiosos por conhecimentos.
        </p>
      </section>
    </>
  )
}

export default App
