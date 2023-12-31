import { HashRouter as Router, Routes, Route  } from 'react-router-dom';
import './App.css';
// Componentes de tus rutas
import ProjectsSection from './Containers/Projects/projectsSection';
import WriteForm from './Containers/WriteForm/writeForm';
import Header from './Containers/Header/header';
import Workplace from './Containers/Workplace/workplace';
import List from './Containers/List/list';
import Footer from './Containers/Footer/footer';


// Tu componente principal
function App() {
  return (

      <Router>
      <Header />
      <Routes>
        {/* Rutas de tu aplicación */}
        <Route exact path="/" element={<ProjectsSection />} />
        <Route path="/form" element={<WriteForm />} />
        <Route path="/workplace" element={<Workplace />} />
        <Route path="/list" element={<List />} />
      </Routes>
      <Footer />
    </Router>
    
  );
}

export default App;