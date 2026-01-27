import { ArrowRight } from 'lucide-react';

const noticias = [
  {
    imagem: 'https://img2.migalhas.com.br/_MEDPROC_/https__img5.migalhas.com.br__SL__gf_base__SL__empresas__SL__miga__SL__imagens__SL__2026__SL__01__SL__23__SL__cropped_nr3zouee.y0q.jpg._PROC_CP65.jpg',
    titulo: 'A partir de maio, empresas deverão monitorar riscos à saúde mental',
    descricao: 'A partir de maio de 2026, empresas passarão a ser fiscalizadas de acordo com as exigências da nova redação da NR-1, norma que estabelece diretrizes gerais de saúde e segurança no trabalho',
    link: 'https://www.migalhas.com.br/quentes/448486/nr-1-a-partir-de-maio-empresas-devem-monitorar-riscos-a-saude-mental'
  },
  {
    imagem: 'https://images.jota.info/wp-content/uploads/2025/11/influenciador-digital-scaled.jpg',
    titulo: 'Ministério do Trabalho vai propor decreto para regulamentar profissão de influenciador',
    descricao: 'Nova lei criou diversas profissões de trabalhadores multimídia, entre elas a de influenciador digital; pasta pediu veto, mas não foi atendida.',
    link: 'https://www.jota.info/trabalho/ministerio-do-trabalho-vai-propor-decreto-para-regulamentar-profissao-de-influenciador'
  },
  {
    imagem: 'https://mobilidade.estadao.com.br/wp-content/uploads/2021/10/BR-116-e-a-estrada-mais-perigosa-do-Brasil.jpg',
    titulo: 'Poder público não pode cobrar por uso de faixa de domínio para instalação de rede elétrica',
    descricao: 'A 8ª Câmara de Direito Público do Tribunal de Justiça de São Paulo manteve a decisão da 10ª Vara de Fazenda Pública da Capital que determinou que uma autarquia estadual não deve cobrar uma concessionária de energia elétrica pelo uso de faixa de domínio de uma rodovia durante a implantação de rede de distribuição',
    link: 'https://www.conjur.com.br/2026-jan-26/poder-publico-nao-pode-cobrar-por-uso-de-faixa-de-dominio-para-instalacao-de-rede-eletrica/',
  },
  {
    imagem: 'https://medproc.migalhas.com.br/https__img.migalhas.com.br__SL__gf_base__SL__empresas__SL__MIGA__SL__imagens__SL__2025__SL__02__SL__05__SL__cropped_h2mce1nb.n4q.jpg._PROC_CP65.jpg',
    titulo: 'Fictor: Justiça autoriza bloqueio de contas por risco de lesão a investidores.',
    descricao: 'Decisão liminar considerou admissão de problemas de liquidez pela empresa para assegurar ressarcimento em contrato de SCP.',
    link: 'https://www.migalhas.com.br/quentes/448599/justica-autoriza-bloqueio-de-contas-por-risco-de-lesao-a-investidores',
  },
  {
    imagem: 'https://medproc.migalhas.com.br/https__img5.migalhas.com.br__SL__gf_base__SL__empresas__SL__miga__SL__imagens__SL__2026__SL__01__SL__26__SL__cropped_m32lhjyx.ig5.png._PROC_CP65.png',
    titulo: 'Código de Conduta: Quais proibições e permissões OAB/SP propôs ao STF?',
    descricao: 'Proposta traz regras sobre conflitos de interesse, eventos, manifestações públicas e até uma "quarentena" para ministros do Supremo',
    link: 'https://www.migalhas.com.br/quentes/448637/codigo-de-conduta-quais-proibicoes-e-permissoes-oab-sp-propos-ao-stf'
  },
  {
    imagem: 'https://images.jota.info/wp-content/uploads/2025/10/2148269788.jpg',
    titulo: 'Empresas terão que ressarcir gasto do INSS com auxílio por acidente de trabalho',
    descricao: 'As ações foram movidas pela AGU, que divulgou duas decisões recentes, de novembro de 2025. Ainda cabe recurso.',
    link: 'https://www.jota.info/trabalho/empresas-terao-que-ressarcir-gasto-do-inss-com-auxilio-por-acidente-de-trabalho',
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
