# Iara Games

Protótipo acadêmico de uma plataforma brasileira para descoberta e compra de jogos digitais nacionais. O projeto valoriza produções independentes, navegação simples e uma identidade visual inspirada nas águas e na lenda da Iara.

## Sobre o projeto

A Iara Games foi criada como uma vitrine para aproximar jogadores e desenvolvedores brasileiros. A página inicial apresenta jogos em destaque, seções temáticas e um catálogo completo. Cada título também possui uma página própria com informações e ações de compra e favorito.

Nesta fase, o projeto funciona inteiramente no navegador e não possui banco de dados, autenticação ou processamento de pagamentos.

## Funcionalidades

- Vitrines de jogos de aventura e ação.
- Catálogo com seis jogos e páginas individuais.
- Filtro do catálogo por categoria: Todos, Aventura e Ação.
- Botão para salvar ou remover um jogo dos favoritos.
- Alteração visual do ícone entre os estados outlined e filled.
- Notificação temporária após salvar um jogo.
- Formulário visual de cadastro.
- Interface responsiva para desktop e dispositivos móveis.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript puro
- Bootstrap 5.3.8 via CDN
- Google Fonts: New Amsterdam e Poppins
- Bootstrap Icons no formulário de cadastro

Não é necessário instalar pacotes ou executar `npm install`.

## Estrutura principal

```text
Projeto-Iara-Games/
├── index.html
├── Assets/
│   ├── CSS/
│   │   ├── general-style.css
│   │   ├── index-style.css
│   │   ├── gamepage-style.css
│   │   └── form-style.css
│   ├── JS/
│   │   ├── filterGames.js
│   │   ├── saveGame.js
│   │   └── telMask.js
│   ├── images/
│   └── pages/
│       ├── form.html
│       └── gamespage/
└── README.md
```

## Como executar

1. Clone o repositório:

   ```bash
   git clone https://github.com/LeninLana/Projeto-Iara-Games.git
   ```

2. Acesse a pasta do projeto:

   ```bash
   cd Projeto-Iara-Games
   ```

3. Abra o arquivo `index.html` no navegador.

Também é possível usar uma extensão de servidor local, como o Live Server, mas ela não é obrigatória.

## Interações em JavaScript

### Favoritos

Nas páginas individuais, o botão de salvar utiliza `aria-pressed` para representar seu estado. Ao ser ativado, o ícone é preenchido e o rótulo acessível passa a indicar a opção de remover o jogo dos favoritos.

O estado é mantido somente durante a permanência na página. Persistência com `localStorage` ou banco de dados não faz parte desta fase.

### Notificação

Ao salvar um jogo, uma mensagem temporária confirma a ação. A notificação utiliza uma região de status para também ser anunciada por tecnologias assistivas.

### Filtro por categoria

O filtro atua sobre a seção “Todos os jogos”. A categoria selecionada controla quais cards permanecem visíveis e atualiza a quantidade de resultados exibida.

## Acessibilidade e responsividade

- Uso de HTML semântico e textos alternativos nas imagens.
- Estados dos controles comunicados com atributos ARIA.
- Foco visível nos botões do filtro.
- Conteúdo acessível mesmo quando o JavaScript não é executado.
- Adaptação do layout para diferentes larguras de tela.

## Status

Projeto acadêmico em desenvolvimento.
