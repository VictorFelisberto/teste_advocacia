import { Award, Users, TrendingUp, Shield } from 'lucide-react';

const estatisticas = [
  { numero: '15+', label: 'Anos de Experiência', icon: Award },
  { numero: '500+', label: 'Casos Resolvidos', icon: TrendingUp },
  { numero: '300+', label: 'Clientes Satisfeitos', icon: Users },
  { numero: '95%', label: 'Taxa de Sucesso', icon: Shield },
];

export default function Experiencia() {
  return (
    <section id="sobre" className="py-20 bg-gradient-to-br from-amber-600 to-amber-700 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Anos de Experiência</h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Durante nossa trajetória, colhemos centenas de vitórias judiciais,
            frutos de um esforço incansável de nossos advogados experientes
            e dedicados à causa, com foco na justiça acima de tudo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {estatisticas.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300"
            >
              <div className="mb-4 inline-block">
                <stat.icon className="w-12 h-12 mx-auto" />
              </div>
              <div className="text-4xl font-bold mb-2">{stat.numero}</div>
              <div className="text-lg font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
