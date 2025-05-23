# Blog Florescer Humano

Este projeto é um blog desenvolvido com Next.js, Tailwind CSS e Supabase como banco de dados. O objetivo é fornecer uma plataforma responsiva para a publicação e visualização de artigos.

## Estrutura do Projeto

A estrutura do projeto é a seguinte:

```
blog-florescer-humano
├── src
│   ├── pages
│   │   ├── index.tsx          # Página inicial que exibe a lista de artigos
│   │   └── blog
│   │       └── [slug].tsx     # Página dinâmica para exibir um artigo específico
│   ├── components
│   │   ├── BlogList.tsx       # Componente que busca e exibe a lista de artigos
│   │   ├── BlogPost.tsx       # Componente que exibe o conteúdo de um artigo
│   │   └── Layout.tsx         # Componente de layout genérico
│   ├── lib
│   │   └── supabaseClient.ts   # Configuração do cliente Supabase
│   ├── styles
│   │   └── globals.css        # Estilos globais do projeto
│   └── types
│       └── index.ts           # Tipos TypeScript utilizados no projeto
├── public
│   └── favicon.ico            # Ícone do site
├── .env.local                 # Variáveis de ambiente para conexão com Supabase
├── tailwind.config.js         # Configuração do Tailwind CSS
├── postcss.config.js          # Configuração do PostCSS
├── tsconfig.json              # Configuração do TypeScript
├── package.json               # Configuração do npm
└── README.md                  # Documentação do projeto
```

## Instalação

1. Clone o repositório:
   ```
   git clone <URL_DO_REPOSITORIO>
   cd blog-florescer-humano
   ```

2. Instale as dependências:
   ```
   npm install
   ```

3. Configure as variáveis de ambiente:
   - Renomeie o arquivo `.env.local.example` para `.env.local` e preencha com suas credenciais do Supabase.

4. Inicie o servidor de desenvolvimento:
   ```
   npm run dev
   ```

5. Acesse o projeto em `http://localhost:3000`.

## Uso

- A página inicial (`/`) exibe uma lista de artigos.
- Cada artigo pode ser acessado através de sua URL dinâmica (`/blog/[slug]`).

## Contribuição

Sinta-se à vontade para contribuir com melhorias ou correções. Crie um fork do repositório, faça suas alterações e envie um pull request.

## Licença

Este projeto está licenciado sob a MIT License. Veja o arquivo LICENSE para mais detalhes.#   e s t u d o - G i s c u s - b l o g  
 