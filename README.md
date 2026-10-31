# Portfólio da Ana

Portfólio pessoal de uma estudante que está começando a aprender desenvolvimento web na UFG. O projeto apresenta essa jornada de forma visual e inclui um pequeno experimento interativo feito com JavaScript.

## Como visualizar

Abra `index.html` em um navegador. O projeto é estático: não precisa instalar dependências, configurar um servidor ou fazer uma compilação.

Para manter o visual correto, deixe os arquivos principais juntos na mesma pasta:

```text
aula-02/
├── index.html
├── style.css
├── script.js
└── fundo.jpg
```

Também é possível executar um servidor local a partir desta pasta:

```bash
python -m http.server 8000
```

Depois, acesse <http://localhost:8000>.

## O que a página apresenta

- **Início:** apresentação da Ana e imagem do campus da UFG.
- **Sobre:** contexto da jornada de aprendizagem.
- **Aprendizado:** tecnologias em estudo — HTML, CSS e JavaScript.
- **Experimento:** botão que sorteia desafios criativos para desenvolver ideias de páginas. A sugestão não se repete imediatamente.
- **Contato:** encerramento que reforça que o portfólio está em construção.

A navegação se adapta a telas menores com um menu móvel. A página também considera a preferência do sistema por movimento reduzido.

## Tecnologias

- **HTML:** estrutura semântica e conteúdo.
- **CSS:** identidade visual, layout responsivo, animações e estados de foco.
- **JavaScript:** abertura do menu móvel e sorteio de ideias.

Não há frameworks, dependências ou backend.

## Arquivos

- `index.html` — página principal e conteúdo do portfólio.
- `style.css` — estilos e ajustes para diferentes tamanhos de tela.
- `script.js` — interações do menu e do experimento de ideias.
- `fundo.jpg` — imagem de fundo usada na apresentação.
- `zueira.html` — página HTML adicional, separada da página principal.

## Personalização

Para atualizar a apresentação, edite o conteúdo em `index.html`. Para alterar cores, tipografia ou layout, ajuste as variáveis e regras em `style.css`. Para incluir outros desafios no sorteio, acrescente frases ao array `ideas` em `script.js`.

O nome e os textos atuais são exemplos do projeto e podem ser substituídos pelas informações reais da autora.
