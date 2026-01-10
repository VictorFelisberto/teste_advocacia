export default function Hero() {
  return (
    <section
      id="home"
      className="pt-24 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(https://images.pexels.com/photos/8111808/pexels-photo-8111808.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-3xl">
          <p className="text-amber-400 text-sm font-semibold tracking-wider uppercase mb-4">
            Consulte seu
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Advogado trabalhista
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Defendemos seus direitos com dedicação, experiência e compromisso com a justiça.
            Nossa equipe está pronta para oferecer a melhor assessoria jurídica.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contato"
              className="bg-amber-600 text-white px-8 py-4 rounded-md hover:bg-amber-700 transition-colors font-semibold text-center"
            >
              Agende uma Consulta
            </a>
            <a
              href="#areas"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-md hover:bg-white hover:text-gray-900 transition-colors font-semibold text-center"
            >
              Nossas Especialidades
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
