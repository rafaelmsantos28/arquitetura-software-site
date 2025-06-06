- [Página Atividades](#página-atividades)
  - [`AtividadeBanner`](#atividadebanner)
  - [`MenuAtividades`](#menuatividades)
- [Página Extensão](#página-extensão)
- [Página Home](#página-home)
- [Página Pesquisa](#página-pesquisa)
- [Página Quem sou eu](#página-quem-sou-eu)
- [Página Sobre nós](#página-sobre-nós)
- [Componentes Gerais](#componentes-gerais)
  - [`Footer`](#footer)
  - [`Header`](#header)
  - [`Popup`](#popup)
  - [`ScrollToTop`](#scrolltotop)
  - [`SideInfoColumn`](#sideinfocolumn)

# Página Atividades

## `AtividadeBanner`

### 📄 Localização:

`/src/components/atividades/AtividadeBanner.jsx`

---

### 📌 Descrição:

Responsável por exibir um banner responsivo com imagem de fundo, título e texto sobre as atividades do projeto.

Se adapta ao tamanho da tela, exibindo uma imagem diferente para dispositivos mobile (largura menor ou igual a **768px**).

---

### ⚙️ Funcionamento:

- **Estado Local:**

  - `isMobile` → controla se o dispositivo é mobile ou não com base no `window.innerWidth`.

- **Efeito (`useEffect`):**

  - Checa o tamanho da tela na primeira renderização.
  - Adiciona um listener de `resize` para atualizar o estado em tempo real.
  - Remove o listener no unmount para evitar memory leak.

- **Banner:**

  - Exibe `banner4Mobile` se for mobile, ou `bannerAtividade` para telas maiores.
  - Mostra o título **"Atividades do Projeto"** e a descrição fixa.

---

### 🖼️ Imagens Utilizadas:

- `/src/assets/banners/BannerAtividade.jpg`
- `/src/assets/carrossel/banner-atividades-mobile.jpg`

---

### 🎨 Estilos:

CSS específico em:
`/src/components/AtividadeBanner.css`

---

### 🛠️ Como editar:

1. Para trocar as imagens → substitua os arquivos no caminho `/src/assets/...`
2. Para mudar o texto → edite o objeto `banner` dentro do componente.
3. Para alterar o ponto de quebra mobile (atualmente 768px) → modifique a condição em `checkScreenSize`.

---

## `MenuAtividades`

### 📄 Localização:

`/src/components/atividades/MenuAtividades.jsx`

---

### 📌 Descrição:

Responsável por exibir um menu responsivo em formato de grade com ícones e rótulos, permitindo navegação rápida para seções específicas da página (via `id` no link).

---

### ⚙️ Funcionamento:

- **Lista de Itens (`items`):**

  - Array de objetos contendo:

    - `id` → referência da âncora na página.
    - `icon` → caminho do ícone.
    - `label` → nome visível.

- **Renderização Dinâmica:**

  - Mapeia o array `items` e gera blocos de link com ícone e texto para cada item.
  - Links com `href="#id"` permitem navegação para âncoras na página.

- **Layout Responsivo (Bootstrap):**

  - `col-6 col-sm-4 col-md-3` → organiza os itens em 2 colunas no mobile, 3 no sm e 4 no md+.
  - `img-fluid` → garante responsividade das imagens.

---

### 🖼️ Ícones Utilizados:

- `/src/assets/icons/palestra.png`
- `/src/assets/icons/curso.png`

---

### 🎨 Estilos:

CSS específico em:
`/src/components/atividades/MenuAtividades.css`

---

### 🛠️ Como editar:

1. Para adicionar ou remover itens → edite o array `items` no início do componente.
2. Para trocar imagens → substitua os arquivos no caminho `/src/assets/icons/`.
3. Para mudar os textos exibidos → altere o valor `label` no array `items`.
4. Para alterar o layout responsivo → edite as classes Bootstrap dentro do `className` das `div` de cada item.

---

# Página Extensão

# Página Home

## `CoursesSection`

### 📄 Localização:

`/src/components/cursos/CoursesSection.jsx`

---

### 📌 Descrição:

Renderiza uma seção de **atividades extras**, como cursos e workshops, que são exibidos em formato de cards.  
A lista pode ser limitada por meio da prop `limit`, útil para reuso em outras páginas.

---

### ⚙️ Funcionamento:

- **Importações:**
  - `CourseCard` → Componente visual para exibir cada curso.
  - `CoursesSection.css` → Estilos específicos da seção.

- **Lista de cursos (`courses`):**
  - Contém objetos com as propriedades:
    - `type`: Tipo da atividade (Curso ou Workshop).
    - `title`: Nome da atividade.
    - `date`: Data no formato ISO (`YYYY-MM-DD`).
    - `link`: URL para acesso (atualmente como `#`).
    - `comingSoon`: Booleano que indica se o curso ainda será lançado.

- **Ordenação:**
  - Os cursos são ordenados por data (mais próximos primeiro) através de `Array.sort()`.

- **Renderização condicional:**
  - Se a prop `limit` for passada, limita a quantidade de cards exibidos.
  - Caso contrário, exibe todos.

- **Formatação de data:**
  - Datas são convertidas para o formato `pt-BR` (ex: `27 de junho`).

---

### 🛠️ Como editar:

1. **Adicionar novo curso:**
   - Inclua um novo objeto no array `courses` com os campos `type`, `title`, `date`, `link` e `comingSoon`.

2. **Editar texto do título da seção:**
   - Modifique a string dentro de `<h2>` no retorno do componente.

3. **Alterar quantidade exibida (limite):**
   - Passe a prop `limit={N}` ao usar o componente `<CoursesSection limit={3} />`.

4. **Modificar a lógica de ordenação:**
   - Altere a função `sort()` para outro critério, se necessário.

---

### 🎨 Estilos:

CSS associado:  
`/src/components/cursos/CoursesSection.css`

---

### 🔗 Dependência Direta:

- `CourseCard.jsx` → Componente filho que recebe props individuais de cada curso.

## `EventCard`

### 📄 Localização:

`/src/components/eventos/EventCard.jsx`

---

### 📌 Descrição:

Renderiza uma seção de **eventos futuros** relacionados ao projeto, utilizando um layout responsivo em formato de card com imagem de fundo.  
Cada evento mostra: título, data, descrição e um link para acesso (ex: inscrição).

---

### ⚙️ Funcionamento:

- **Importações:**
  - `eventBg`: imagem de fundo para o card.
  - `EventCard.css`: arquivo de estilos para o componente.

- **Lista de eventos (`events`):**
  - Lista fixa com os dados dos eventos, incluindo:
    - `title`: título do evento.
    - `date`: data no formato `YYYY-MM-DD`.
    - `description`: descrição breve do evento.
    - `link`: URL para mais informações ou inscrição.

- **Ordenação:**
  - Ordena os eventos por data em ordem crescente (mais próximo primeiro).

- **Filtro:**
  - Apenas eventos **futuros** são exibidos (data >= hoje).

- **Limitação (`limit`):**
  - Se a prop `limit` for passada, limita a quantidade de eventos renderizados.

- **Formatação de data:**
  - Converte a data para o formato `dd de mês` em português.

---

### 🛠️ Como editar:

1. **Adicionar novo evento:**
   - Insira um novo objeto no array `events`, mantendo a estrutura dos campos `title`, `date`, `description`, e `link`.

2. **Alterar imagem de fundo:**
   - Substitua o arquivo `event-card-bg.jpg` em `/src/assets/eventos-cursos/`.

3. **Editar título da seção:**
   - Altere o conteúdo do `<h2>` dentro do componente.

4. **Modificar limite de eventos:**
   - Ao utilizar o componente, passe a prop `limit={N}` para limitar a quantidade de cards exibidos.

---

### 🖼️ Imagem Utilizada:

- `/src/assets/eventos-cursos/event-card-bg.jpg`

---

### 🎨 Estilos:

CSS localizado em:  
`/src/components/eventos/EventCard.css`

---

### 🔗 Dependência de Ícone:

- Usa ícone do Bootstrap Icons: `bi bi-box-arrow-in-up-right`

## `VerticalCardSection`

### 📄 Localização:

`/src/components/VerticalCardSection.jsx`

---

### 📌 Descrição:

Componente responsável por exibir três cards verticais com informações sobre funcionalidades do sistema: **Eventos & Palestras**, **Artigos** e **Cursos**.

Cada card possui ícone, título, texto explicativo e um botão que redireciona para uma rota interna da aplicação.

---

### ⚙️ Funcionamento:

- **Estrutura Interna:**

  - Os dados são armazenados em um array `features`, contendo objetos com os campos:
    - `icon` → caminho da imagem exibida no card.
    - `title` → título principal do card.
    - `text` → descrição breve do conteúdo.
    - `buttonLabel` → texto exibido no botão.
    - `link` → rota para redirecionamento ao clicar no botão.

- **Renderização Dinâmica:**
  
  - Os cards são gerados com `map()`, usando os dados do array `features`.
  - Cada card ocupa uma coluna (`col-12 col-md-6 col-lg-4`) e se adapta ao grid responsivo do Bootstrap.

- **Botão de Navegação:**

  - O botão de cada card utiliza o componente `<Link>` do React Router para realizar navegação interna sem recarregar a página.

---

### 🖼️ Ícones Utilizados:

- `/src/assets/icons/palestra.png`
- `/src/assets/icons/artigo.png`
- `/src/assets/icons/curso.png`

---

### 🎨 Estilos:

CSS localizado em:
`/src/components/VerticalCardSection.css`

Estilos aplicados:
- Layout com `Bootstrap grid` (responsividade).
- Classe `card-hover-verticalcardsection` adiciona efeito visual ao passar o mouse.
- Estilo personalizado para as imagens com a classe `vertical-card-img`.

---

### 🛠️ Como editar:

1. **Adicionar novo card**:  
   Inclua um novo objeto no array `features` com os campos `icon`, `title`, `text`, `buttonLabel` e `link`.

2. **Alterar texto ou link**:  
   Edite diretamente os valores do array `features`.

3. **Modificar estilos**:  
   Altere o CSS correspondente no arquivo `VerticalCardSection.css`.

4. **Trocar ícones**:  
   Substitua os arquivos em `/src/assets/icons/`.

---

(Seção pode ser reutilizada em diversas páginas que exijam exibição vertical de funcionalidades)

# Página Pesquisa

# Página Quem sou eu

# Página Sobre nós

# Componentes Gerais

## `Footer`

### 📄 Localização:

`/src/components/Footer/Footer.jsx`

---

### 📌 Descrição:

Componente de rodapé responsivo que exibe a marca, ícones de redes sociais, links de navegação e informações de contato.

---

### ⚙️ Funcionamento:

- **Logo e Redes Sociais:**

  - Exibe a logo no canto esquerdo.
  - Ícones para Instagram, YouTube e LinkedIn com links externos.

- **Menu Institucional:**

  - Navegação para páginas institucionais:

    - Home
    - Quem Sou Eu
    - Sobre Nós

- **Menu Acadêmico:**

  - Navegação para páginas acadêmicas:

    - Atividades
    - Pesquisa
    - Extensão

- **Contatos:**

  - Informações de e-mail, telefone, Instagram e LinkedIn.
  - Ícones personalizados carregados via SVG.

- **Créditos:**

  - Barra inferior com direitos autorais e link para o site da **ProEC Unesp**.

---

### 🖼️ Ícones Utilizados:

- `/src/assets/logo-footer.png`
- `/src/assets/redes-sociais/instagram.svg`
- `/src/assets/redes-sociais/linkedin.svg`
- `/src/assets/redes-sociais/mail.svg`
- `/src/assets/redes-sociais/phone.svg`
- `/src/assets/redes-sociais/youtube.svg`

---

### 🎨 Estilos:

CSS específico em:
`/src/components/Footer/Footer.css`

---

### 🛠️ Como editar:

1. **Para adicionar redes sociais:**

   - Adicione uma nova `<a>` dentro do `div` com `className="social-icons-footer"` no bloco da logo.
   - Siga o padrão:

     ```jsx
     <a href="URL" target="_blank" rel="noopener noreferrer">
       <img src={iconeNovo} alt="Nome da Rede" width="30" height="30" />
     </a>
     ```

2. **Para incluir novas páginas no menu:**

   - Adicione novos `<li>` dentro dos `<ul>` de "Institucional" ou "Acadêmico".

3. **Para alterar contatos:**

   - Edite os `<li>` dentro da lista de contatos.
   - Troque ícone, texto ou link conforme necessário.

4. **Para editar os créditos finais:**

   - Modifique o conteúdo dentro da `<div>` com `className="direitos-footer"`.

---

### 📌 Observações:

- Todos os links externos usam `target="_blank"` e `rel="noopener noreferrer"` por segurança.
- As rotas internas usam o `Link` do `react-router-dom`.
- Layout responsivo usando `Bootstrap` com classes `col-12 col-md-3 col-lg-3`.
- Ícones de contato com `className="icon-footer-contact"` para controle visual via CSS.

---

## `Header`

### 📄 Localização:

`/src/components/Header/Header.jsx`

---

### 📌 Descrição:

Responsável por exibir a barra de navegação principal do site, incluindo:

- **Logo**
- **Links de navegação**
- **Ícones de redes sociais**
- **Menu mobile colapsável**

Atende tanto **desktop** quanto **mobile**, garantindo navegação fluída e responsiva entre as páginas do site via `react-router-dom`.

---

### ⚙️ Funcionamento:

- **Estado `menuOpen` (`useState`):**

  - Controla a visibilidade do menu mobile.
  - Alterna entre `true` e `false` ao clicar no botão hamburguer.

- **Funções:**

  - `toggleMenu` → alterna a visibilidade do menu mobile.
  - `closeMenu` → fecha o menu mobile ao clicar em um link.

- **Links de Navegação (`navLinks`):**

  - Array de objetos contendo:

    - `label` → texto do item de navegação.
    - `path` → rota correspondente.

- **Renderização Condicional:**

  - Menu Desktop → visível em telas `lg` ou maiores.
  - Menu Mobile → aparece sobrepondo a tela quando `menuOpen` for `true`.

---

### 🖼️ Ícones Utilizados:

- `/src/assets/logo.png`
- `/src/assets/icons/menu.svg`
- `/src/assets/redes-sociais/linkedin.svg`
- `/src/assets/redes-sociais/instagram.svg`
- `/src/assets/redes-sociais/youtube.svg`

---

### 🎨 Estilos:

CSS específico em:
`/src/components/Header/Header.css`

---

### 🛠️ Como editar:

1. Para adicionar ou remover links de navegação → edite o array `navLinks`.
2. Para trocar o logo ou ícone do menu → substitua os arquivos em `/src/assets/`.
3. Para alterar os links das redes sociais → edite os `href` dos elementos `<a>` nas seções Desktop e Mobile.
4. Para alterar o layout ou comportamento responsivo → ajuste as classes Bootstrap e os estilos em `Header.css`.
5. Para personalizar o comportamento do menu mobile → altere a função `toggleMenu` ou o bloco condicional `{menuOpen && (...)}`.

---

## `Popup`

### 📄 Localização:

`/src/components/Popup.jsx`

---

### 📌 Descrição:

Componente responsável por exibir uma imagem em destaque em formato de popup sobreposto na tela, com botão de fechamento. A imagem exibida varia de acordo com o tamanho da tela (versão desktop ou mobile).

---

### ⚙️ Funcionamento:

- **Props Recebidas:**

  - `imageDesktop` → caminho da imagem para telas maiores.
  - `imageMobile` → caminho da imagem para telas menores.
  - `onClose` → função executada ao clicar no botão de fechar (`×`).

- **Detecção de Tela:**

  - Usa `window.innerWidth` para verificar se a largura é menor ou igual a `768px`.
  - Seleciona `imageMobile` ou `imageDesktop` com base nessa condição.

- **Exibição:**

  - Renderiza uma div com fundo escuro (`popup-overlay`).
  - Dentro dela, exibe o conteúdo (`popup-content`) contendo:

    - Botão `×` para fechar.
    - Imagem correspondente.

---

### 🖼️ Imagens Utilizadas:

As imagens são passadas como props no momento da chamada do componente. Exemplo:

```jsx
<Popup
  imageDesktop="/src/assets/imagens/bannerDesktop.png"
  imageMobile="/src/assets/imagens/bannerMobile.png"
  onClose={handleClose}
/>
```

---

### 🎨 Estilos:

CSS específico em:
`/src/components/Popup.css`

---

### 🛠️ Como editar:

1. Para alterar as imagens exibidas → modifique os caminhos passados nas props `imageDesktop` e `imageMobile`.
2. Para personalizar o botão de fechar (`×`) ou adicionar outros elementos → edite a estrutura dentro da `div.popup-content`.
3. Para alterar o comportamento de responsividade → ajuste o valor no `window.innerWidth` ou implemente um hook de resize.
4. Para modificar a aparência visual (overlay, imagem, botão) → edite o arquivo `/src/components/Popup.css`.

---

## `ScrollToTop`

### 📄 Localização:

`/src/components/ScrollToTop.jsx`

---

### 📌 Descrição:

Componente responsável por controlar o comportamento de rolagem da página ao navegar entre rotas usando o `React Router`. Sempre que o caminho (`pathname`) muda, a página é automaticamente rolada para o topo, proporcionando uma navegação mais intuitiva.

---

### ⚙️ Funcionamento:

- **Hook `useLocation`:**

  - Obtém o valor atual de `pathname` (endereço da URL) através do hook `useLocation` do `react-router-dom`.

- **Hook `useEffect`:**

  - Executa o efeito toda vez que `pathname` for alterado.
  - Dentro do efeito, chama `window.scrollTo` para rolar a janela até o topo da página.

- **Opção de Comportamento:**

  - `behavior: 'smooth'` → animação suave na rolagem.
  - Pode ser alterado para `'auto'` para rolagem instantânea.

---

### 🎨 Estilos:

- Nenhum arquivo CSS associado.
- O componente não possui elementos visuais na tela.

---

### 🛠️ Como editar:

1. Para desativar a animação → altere o valor de `behavior` para `'auto'`.
2. Para rolar para outra posição fixa → modifique o valor de `top` no `window.scrollTo`.
3. Para adicionar novas ações ao mudar de rota → inclua no callback do `useEffect`.

---

## `SideInfoColumn`

### 📄 Localização:

`/src/components/SideInfoColumn.jsx`

---

### 📌 Descrição:

Responsável por exibir uma coluna lateral com a seção **Novidades**, apresentando uma lista de notícias com imagem, título e data. Ao clicar em uma notícia, um popup é exibido com a imagem completa do conteúdo, adaptada para desktop e mobile.

---

### ⚙️ Funcionamento:

- **Lista de Notícias (`newsList`):**

  - Array de objetos contendo:

    - `id` → identificador único da notícia.
    - `image` → imagem de destaque da notícia.
    - `title` → título da notícia.
    - `date` → data de publicação.
    - `popupImageDesktop` → imagem para exibição no popup em telas desktop.
    - `popupImageMobile` → imagem para exibição no popup em telas mobile.

- **Renderização Dinâmica:**

  - Mapeia o array `newsList` e renderiza um botão para cada notícia.
  - Ao clicar, a função `openPopup` armazena o item selecionado no estado `selectedPopup`.
  - Se houver um `selectedPopup`, renderiza o componente `Popup` com as imagens correspondentes.

- **Interação de Popup:**

  - **Abrir:** clicando na notícia.
  - **Fechar:** através da função `onClose` passada para o `Popup`.

- **Layout e Estilo:**

  - Estrutura e responsividade controladas por classes CSS específicas em `SideInfoColumn.css`.
  - Separação visual entre itens feita com `<hr />`.

---

### 🖼️ Imagens Utilizadas:

- `/src/assets/noticias/news2.png`
- `/src/assets/popup/popup-eventoinaugural-desktop.jpg`
- `/src/assets/popup/popup-eventoinaugural-mobile.jpg`

---

### 🎨 Estilos:

CSS específico em:
`/src/components/SideInfoColumn.css`

---

### 🛠️ Como editar:

1. Para adicionar ou remover notícias → edite o array `newsList` no início do componente.
2. Para trocar imagens → substitua os arquivos no caminho `/src/assets/`.
3. Para alterar os textos ou datas → modifique os valores `title` e `date` no array `newsList`.
4. Para mudar o layout ou estilo → edite as classes no arquivo `SideInfoColumn.css`.
5. Para alterar a lógica do popup → edite o componente `Popup.jsx`.

---
