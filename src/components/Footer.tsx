import { Scale, Facebook, Instagram, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Scale className="w-8 h-8 text-amber-600" />
              <div>
                <h3 className="text-xl font-bold">SILVA ADVOCACIA</h3>
                <p className="text-xs text-gray-400">& Associados</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Compromisso com a justiça e defesa dos seus direitos há mais de 15 anos.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-amber-600 transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#areas" className="text-gray-400 hover:text-amber-600 transition-colors">
                  Áreas de Atuação
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-gray-400 hover:text-amber-600 transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#noticias" className="text-gray-400 hover:text-amber-600 transition-colors">
                  Notícias
                </a>
              </li>
              <li>
                <a href="#contato" className="text-gray-400 hover:text-amber-600 transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Especialidades</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">Direito Cível</li>
              <li className="text-gray-400">Direito Trabalhista</li>
              <li className="text-gray-400">Direito Previdenciário</li>
              <li className="text-gray-400">Direito Público</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Redes Sociais</h4>
            <p className="text-gray-400 mb-4">Siga-nos nas redes sociais</p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-amber-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-amber-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-amber-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-amber-600 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Silva Advocacia & Associados. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Este é um site criado para fins educacionais.
          </p>
        </div>
      </div>
    </footer>
  );
}
