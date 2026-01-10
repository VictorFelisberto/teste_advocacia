import { Quote } from 'lucide-react';

export default function Citacao() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Quote className="w-16 h-16 mx-auto mb-8 text-amber-400" />
          <blockquote className="text-3xl md:text-4xl font-serif italic mb-8 leading-relaxed">
            "A força do Direito deve superar o direito da força"
          </blockquote>
          <p className="text-xl text-amber-400 font-semibold">– Rui Barbosa</p>
          <div className="mt-12 pt-8 border-t border-gray-700">
            <p className="text-lg text-gray-300">
              Atendemos com hora marcada
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
