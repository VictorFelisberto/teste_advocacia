import { ArrowRight } from 'lucide-react';

const noticias = [
  {
    imagem: 'https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg?auto=compress&cs=tinysrgb&w=800',
    titulo: 'A partir de maio, empresas deverão monitorar riscos à saúde mental',
    descricao: 'A partir de maio de 2026, empresas passarão a ser fiscalizadas de acordo com as exigências da nova redação da NR-1, norma que estabelece diretrizes gerais de saúde e segurança no trabalho',
    link: 'https://www.migalhas.com.br/quentes/448486/nr-1-a-partir-de-maio-empresas-devem-monitorar-riscos-a-saude-mental'
  },
  {
    imagem: 'https://images.pexels.com/photos/7841478/pexels-photo-7841478.jpeg?auto=compress&cs=tinysrgb&w=800',
    titulo: 'Revisão da Vida Toda aprovada pelo STF',
    descricao: 'Saiba como solicitar a revisão e aumentar o valor da sua aposentadoria.',
  },
  {
    imagem: 'https://images.pexels.com/photos/8111808/pexels-photo-8111808.jpeg?auto=compress&cs=tinysrgb&w=800',
    titulo: 'Direitos do Consumidor: O que você precisa saber',
    descricao: 'Conheça seus direitos e saiba como se proteger em relações de consumo.',
  },
  {
    imagem: 'https://images.pexels.com/photos/5669603/pexels-photo-5669603.jpeg?auto=compress&cs=tinysrgb&w=800',
    titulo: 'Indenizações por Acidente de Trabalho',
    descricao: 'Entenda quando você tem direito a indenização e como proceder.',
  },
  {
    imagem: 'https://images.pexels.com/photos/6077447/pexels-photo-6077447.jpeg?auto=compress&cs=tinysrgb&w=800',
    titulo: 'Aposentadoria Especial: Novidades',
    descricao: 'Mudanças nas regras para aposentadoria em condições especiais.',
  },
  {
    imagem: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800',
    titulo: 'Direitos da Gestante no Trabalho',
    descricao: 'Conheça os direitos garantidos pela legislação trabalhista.',
  },
];

export default function Noticias() {
  return (
    <section id="noticias" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Acompanhe Nossas Notícias</h2>
          <p className="text-gray-600 text-lg">
            Fique por dentro das últimas atualizações jurídicas e decisões importantes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {noticias.map((noticia, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={noticia.imagem}
                  alt={noticia.titulo}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-amber-600 transition-colors">
                  {noticia.titulo}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{noticia.descricao}</p>
                <a className="text-amber-600 font-semibold flex items-center gap-2 hover:gap-4 transition-all" href={noticia.link} target="_blank" rel="noreferrer">
                Leia mais<ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
