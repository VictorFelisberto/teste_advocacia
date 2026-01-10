import { Scale, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Scale className="w-10 h-10 text-amber-600" />
            <div>
              <h1 className="text-2xl font-bold text-gray-800">SILVA ADVOCACIA</h1>
              <p className="text-xs text-gray-600">Compromisso com a Justiça</p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">
              Início
            </a>
            <a href="#areas" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">
              Áreas de Atuação
            </a>
            <a href="#sobre" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">
              Sobre
            </a>
            <a href="#noticias" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">
              Notícias
            </a>
            <a href="#contato" className="bg-amber-600 text-white px-6 py-2 rounded-md hover:bg-amber-700 transition-colors font-medium">
              Contato
            </a>
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <a href="#home" className="block text-gray-700 hover:text-amber-600 transition-colors font-medium">
              Início
            </a>
            <a href="#areas" className="block text-gray-700 hover:text-amber-600 transition-colors font-medium">
              Áreas de Atuação
            </a>
            <a href="#sobre" className="block text-gray-700 hover:text-amber-600 transition-colors font-medium">
              Sobre
            </a>
            <a href="#noticias" className="block text-gray-700 hover:text-amber-600 transition-colors font-medium">
              Notícias
            </a>
            <a href="#contato" className="block bg-amber-600 text-white px-6 py-2 rounded-md hover:bg-amber-700 transition-colors font-medium text-center">
              Contato
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
