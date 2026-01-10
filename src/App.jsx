import Header from './components/Header';
import Hero from './components/Hero';
import AreasAtuacao from './components/AreasAtuacao';
import Experiencia from './components/Experiencia';
import Noticias from './components/Noticias';
import Citacao from './components/Citacao';
import Contato from './components/Contato';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <AreasAtuacao />
      <Experiencia />
      <Noticias />
      <Citacao />
      <Contato />
      <Footer />
    </div>
  );
}

export default App;
