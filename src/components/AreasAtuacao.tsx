import { Scale, Briefcase, HeartHandshake, Building2 } from 'lucide-react';

const areas = [
  {
    icon: Scale,
    titulo: 'CÍVEL',
    descricao: 'Soluções completas em direito civil, incluindo contratos, indenizações e questões patrimoniais.',
  },
  {
    icon: Briefcase,
    titulo: 'TRABALHISTA',
    descricao: 'Defesa dos direitos do trabalhador, ações trabalhistas e consultoria para empresas.',
  },
  {
    icon: HeartHandshake,
    titulo: 'PREVIDENCIÁRIO',
    descricao: 'Aposentadorias, benefícios por incapacidade, pensões e revisões previdenciárias.',
  },
  {
    icon: Building2,
    titulo: 'PÚBLICO',
    descricao: 'Assessoria em licitações, contratos administrativos e questões relacionadas ao direito público.',
  },
];

export default function AreasAtuacao() {
  return (
    <section id="areas" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">ÁREAS DE ATUAÇÃO</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Conheça as áreas atendidas por nosso time de advogados especializados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {areas.map((area, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="mb-6 inline-block p-4 bg-amber-100 rounded-lg group-hover:bg-amber-600 transition-colors">
                <area.icon className="w-10 h-10 text-amber-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{area.titulo}</h3>
              <p className="text-gray-600 leading-relaxed">{area.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
