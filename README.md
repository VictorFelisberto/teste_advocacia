# 🧑‍⚖️ teste_advocacia

Site institucional/landing page para advocacia, com foco em **responsividade**, **performance** e boa apresentação visual.

> **Nota sobre o Front-end:** a base do UI/Front-end foi gerada inicialmente com **Bolt (bolt.new)** e depois ajustada/organizada manualmente (estrutura, melhorias e integrações).

---

## ✨ Funcionalidades

- Layout responsivo (mobile / desktop)
- Seções típicas de site de advocacia (ex.: apresentação, áreas de atuação, sobre, contato)
- Estilização com **Tailwind CSS**
- Pronto para build e deploy

> Se você tiver integrações (ex.: Supabase, formulário com envio, etc.), descreva aqui para ficar 100% fiel ao seu projeto.

---

## 🧰 Stack

- **Vite** (dev server + build)
- **JavaScript** (com configurações do ecossistema Vite)
- **Tailwind CSS** + PostCSS
- **ESLint** (padronização/qualidade)

---

## ✅ Pré-requisitos

- Node.js **18+**
- npm (ou yarn/pnpm)

---

## 🚀 Como rodar localmente

Clone o repositório e acesse a pasta:

```bash
git clone https://github.com/VictorFelisberto/teste_advocacia.git
cd teste_advocacia
(Se você estiver usando o branch js_sem_type)

git checkout js_sem_type
Instale as dependências:

npm install
Rode o projeto:

npm run dev
Acesse no navegador o endereço que o Vite mostrar (normalmente http://localhost:5173).

📦 Build / Preview
Gerar build de produção:

npm run build
Pré-visualizar o build localmente:

npm run preview
🔐 Variáveis de ambiente (opcional)
Se o projeto usar integrações (ex.: Supabase, APIs, etc.), crie um arquivo .env na raiz.

Exemplo (caso use Supabase no front):

VITE_SUPABASE_URL=coloque_sua_url_aqui
VITE_SUPABASE_ANON_KEY=coloque_sua_anon_key_aqui
Sugestão: crie também um .env.example:

VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
Importante: nunca suba .env com chaves reais no GitHub.

☁️ Deploy
Você pode hospedar facilmente em Vercel, Netlify ou Render.

Configuração típica:

Build command: npm run build

Output directory: dist

Se houver variáveis de ambiente, configure também na plataforma de deploy.

🗂️ Estrutura (visão geral)
src/                 # Código do front-end
public/              # Assets públicos (se existir)
index.html           # Entrada do Vite
vite.config.*        # Config do Vite
tailwind.config.*    # Config do Tailwind
postcss.config.*     # PostCSS
eslint.config.*      # ESLint
🧾 Créditos
UI/Front-end inicial: Bolt (bolt.new)

Ajustes, organização e evolução do projeto: VictorFelisberto

📄 Licença
Este projeto ainda não possui uma licença definida.
Se quiser abrir o código, uma opção comum é a MIT License.

::contentReference[oaicite:0]{index=0}
