- [Página Atividades](#página-atividades)
  - [`AtividadeBanner`](#atividadebanner)
  - [`MenuAtividades`](#menuatividades)
- [Página Extensão](#página-extensão)
  - [`BannerExtensao`](#bannerextensao)
  - [`ExtensaoDados`](#extensaodados)
  - [`ExtensaoMenu`](#extensaomenu)
- [Página Home](#página-home)
  - [`BannerCarousel`](#bannercarousel)
  - [`BannerYoutube`](#banneryoutube)
  - [`CourseCard`](#coursecard)
  - [`CoursesSection`](#coursessection)
  - [`EventCard`](#eventcard)
  - [`VerticalCardSection`](#verticalcardsection)
- [Página Pesquisa](#página-pesquisa)
  - [`BannerPesquisa`](#bannerpesquisa)
  - [`ContentDissertacoes`](#contentdissertacoes)
  - [`ContentOrientacoes`](#contentorientacoes)
  - [`ContentPesquisa`](#contentpesquisa)
  - [`MenuPesquisa`](#menupesquisa)
- [Página Quem sou eu](#página-quem-sou-eu)
  - [`BannerQuemSouEu`](#bannerquemsoueu)
  - [`EnsinoDados`](#ensinodados)
  - [`InformacoesCoordenador`](#informacoescoordenador)
- [Página Sobre nós](#página-sobre-nós)
  - [`BannerSobreNos`](#bannersobrenos)
  - [`Team`](#team)
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

## `BannerExtensao`

### 📄 Localização:

`/src/components/BannerExtensao.jsx`

---

### 📌 Descrição:

Responsável por exibir um banner responsivo no topo da página, apresentando o título e uma breve descrição do projeto de extensão, com troca automática da imagem de fundo conforme o tamanho da tela (desktop ou mobile).

---

### ⚙️ Funcionamento:

- **Responsividade via Hook (`useState` + `useEffect`):**

  - Detecta o tamanho da tela na renderização inicial e em mudanças de tamanho (evento `resize`).
  - Define a imagem do banner com base na largura da janela:

    - Até `768px` → imagem mobile.
    - Acima de `768px` → imagem desktop.

- **Objeto `banner`:**

  - Define:

    - `image` → caminho da imagem de fundo (mobile ou desktop).
    - `title` → título exibido sobre o banner.
    - `text` → descrição resumida do projeto.

- **Renderização:**

  - Um `section` com imagem de fundo via `inline-style`.
  - Conteúdo textual com título e parágrafo sobrepostos.

---

### 🖼️ Imagens Utilizadas:

- `/src/assets/banners/banner-extensao-mobile.jpg`
- `/src/assets/banners/BannerExtensao.jpg`

---

### 🎨 Estilos:

CSS específico em:
`/src/components/BannerExtensao.css`

---

### 🛠️ Como editar:

1. Para alterar as imagens → substitua os arquivos nos caminhos citados acima.
2. Para mudar o título ou texto → edite os valores de `title` e `text` dentro do objeto `banner`.
3. Para alterar o tamanho limite para considerar mobile → modifique o valor `768` no `checkScreenSize`.
4. Para customizar o estilo do banner e texto → edite o arquivo `BannerExtensao.css`.

---

## `ExtensaoDados`

### 📄 Localização:

`/src/components/extensao/ExtensaoDados.jsx`

---

### 📌 Descrição:

Responsável por estruturar e exibir as informações institucionais e organizacionais do projeto **Academia do Arquiteto de Software**, segmentadas em seções temáticas com ícones, títulos e conteúdos descritivos.

---

### ⚙️ Funcionamento:

- **Menu de Navegação (`ExtensaoMenu`):**

  - Um componente externo importado e renderizado no topo da página, com ícones de navegação rápida para seções específicas.

- **Seções (`Section`):**

  - Componente funcional interno que recebe:

    - `icon` → ícone (React Icon).
    - `title` → título da seção.
    - `children` → conteúdo descritivo (parágrafos, listas, etc.).

  - Cada seção é renderizada como um card com título, ícone e conteúdo.

- **Layout Responsivo (Bootstrap):**

  - `container-fluid px-5 my-5` → margem e padding horizontais e verticais.
  - `mb-5`, `p-4`, `shadow-sm` → espaçamentos e sombra para cards.
  - `text-center` e `text-start` controlam alinhamento de texto e títulos.

---

### 🖼️ Ícones Utilizados (React Icons):

- `FaLightbulb` → Introdução
- `FaBullseye` → Objetivos
- `FaCogs` → Metodologia
- `FaChartLine` → Resultados Esperados
- `FaCalendarAlt` → Cronograma
- `FaUserGraduate` → Participação Estudantil

---

### 🎨 Estilos:

CSS específico em:
`/src/components/extensao/ExtensaoDados.css`

---

### 🛠️ Como editar:

1. Para adicionar uma nova seção → crie um novo bloco `Section` no `return` do `ExtensaoDados`, passando `icon`, `title` e o conteúdo dentro do `children`.
2. Para trocar ícones → importe o novo ícone do `react-icons/fa` e substitua no componente.
3. Para alterar os textos → edite os conteúdos dentro de cada `Section`.
4. Para ajustar espaçamentos e aparência → edite as classes Bootstrap e os estilos em `ExtensaoDados.css`.

---

## `ExtensaoMenu`

### 📄 Localização:

`/src/components/extensao/ExtensaoMenu.jsx`

---

### 📌 Descrição:

Componente responsável por exibir um menu de botões com ícones e rótulos, permitindo a navegação suave para seções específicas da página com base no título da seção.

---

### ⚙️ Funcionamento:

- **Lista de Itens (`menuItems`):**

  - Array contendo objetos com:

    - `icon` → componente React do ícone importado da biblioteca `react-icons/fa`.
    - `label` → texto exibido no botão e usado para localizar a seção correspondente.

- **Navegação Suave:**

  - Função `scrollToSection(title)` usa `document.querySelector` para buscar a seção com atributo `data-title` igual ao `label`.
  - Se encontrada, chama `scrollIntoView({ behavior: 'smooth' })` para rolar suavemente até a seção.

- **Renderização:**

  - Mapeia `menuItems` e gera botões contendo ícone e texto.
  - Cada botão ao ser clicado chama `scrollToSection` com o título da seção correspondente.

---

### 🖼️ Ícones Utilizados:

- `FaLightbulb`
- `FaBullseye`
- `FaCogs`
- `FaChartLine`
- `FaCalendarAlt`
- `FaUserGraduate`

Todos importados da biblioteca [`react-icons/fa`](https://react-icons.github.io/react-icons/icons?name=fa).

---

### 🎨 Estilos:

CSS específico em:
`/src/components/extensao/ExtensaoMenu.css`
(complementar ao arquivo `/src/components/extensao/ExtensaoDados.css`)

---

### 🛠️ Como editar:

1. Para adicionar ou remover itens → edite o array `menuItems` no início do componente.
2. Para trocar os ícones → importe outros ícones da biblioteca `react-icons` e altere o valor `icon` no array `menuItems`.
3. Para mudar os textos exibidos → altere o valor `label` no array `menuItems` e nos atributos `data-title` das seções.
4. Para alterar o comportamento de rolagem → modifique a função `scrollToSection`.
5. Para ajustar o estilo dos botões → edite o CSS no arquivo `ExtensaoMenu.css`.

---

# Página Home

## `BannerCarousel`

### 📄 Localização:

`/src/components/banner/BannerCarousel.jsx`

---

### 📌 Descrição:

Componente que exibe um carrossel de banners com imagens, textos, títulos e botões que podem redirecionar para páginas específicas ou rolar a página para seções determinadas. O carrossel é responsivo e adapta imagens e estilos para dispositivos móveis, desktops e telas ultra wide.

---

### ⚙️ Funcionamento:

- **Lista de Banners (`banners`):**

  - Array de objetos contendo:

    - `image` → imagem do banner (diferenciada para mobile e desktop).
    - `title` → título exibido no banner.
    - `text` → texto descritivo do banner.
    - `link` → (opcional) rota para navegação via React Router.
    - `scrollTarget` → (opcional) id do elemento para rolar suavemente a página.
    - `delay` → tempo de duração (milissegundos) do slide no autoplay.
    - `buttonText` → texto exibido no botão (quando presente).

- **Renderização Dinâmica:**

  - Mapeia o array `banners` para gerar slides do carrossel com Swiper.
  - Cada slide usa a imagem de fundo configurada via inline style.
  - Botão exibido somente se `link` ou `scrollTarget` estiverem presentes.
  - Botão de navegação:

    - Se `scrollTarget` presente → botão faz scroll suave até a seção.
    - Se `link` presente → botão redireciona via `<Link>` do React Router.

- **Responsividade:**

  - Usa `useMediaQuery` para detectar se está em dispositivo móvel (`max-width: 768px`) e ultra wide (`min-width: 2560px`).
  - Ajusta imagens e tamanhos de fonte conforme o dispositivo.

- **Configuração do Swiper:**

  - Módulos usados: `Pagination`, `Autoplay`.
  - Paginação clicável.
  - Autoplay ativo, com pausa desativada ao interagir.
  - Loop infinito.
  - Um slide visível por vez (`slidesPerView={1}`).

---

### 🖼️ Imagens Utilizadas:

- Desktop:

  - `/src/assets/carrossel/banner1.jpg`
  - `/src/assets/carrossel/banner2.jpg`
  - `/src/assets/carrossel/banner3.jpg`
  - `/src/assets/banners/BannerAtividade.jpg`

- Mobile:

  - `/src/assets/carrossel/banner-mobile1.jpg`
  - `/src/assets/carrossel/banner-mobile2.jpg`
  - `/src/assets/carrossel/banner-mobile3.jpg`
  - `/src/assets/carrossel/banner-atividades-mobile.jpg`

---

### 🎨 Estilos:

CSS específico em:
`/src/components/banner/BannerCarousel.css`

---

### 🛠️ Como editar:

1. Para adicionar, remover ou editar banners → modifique o array `banners` no componente, ajustando as propriedades de cada objeto.
2. Para trocar imagens → substitua os arquivos nas pastas `/src/assets/carrossel/` e `/src/assets/banners/`.
3. Para alterar os textos ou títulos → edite os valores `title`, `text` e `buttonText` no array `banners`.
4. Para alterar comportamento do scroll → modifique a função anônima do evento `onClick` no botão que faz scroll suave.
5. Para ajustar responsividade → altere as queries do hook `useMediaQuery` e as regras CSS no arquivo `.css`.
6. Para modificar estilos do botão e do carrossel → edite `/src/components/banner/BannerCarousel.css`.

---

## `BannerYoutube`

### 📄 Localização:

`/src/components/youtube/BannerYoutube.jsx`

---

### 📌 Descrição:

Componente que exibe um banner promocional responsivo para divulgação do canal do YouTube, com animações de fade-in ao entrar na área visível da tela, imagem ilustrativa e chamada para ação com botão para inscrição.

---

### ⚙️ Funcionamento:

- **Controle de visibilidade via Intersection Observer:**

  - Três observadores monitoram a entrada na viewport de:

    - Imagem principal (`youtubePhone`)
    - Conteúdo textual
    - Título para versão mobile

  - Ao se tornarem visíveis, ativam classes CSS para animações de fade-in/fade-up.

- **Layout responsivo (Bootstrap):**

  - Grid de duas colunas em telas grandes (`col-lg-6` e `col-xxl-6`).
  - Em telas pequenas, o título é exibido centralizado e separado (visível somente no mobile).
  - Imagem principal posicionada com camada de fundo (imagem de circuito).

- **Chamada para ação:**

  - Texto convidando a conhecer o canal.
  - Botão que abre o link do canal do YouTube em nova aba para inscrição direta.

---

### 🖼️ Imagens Utilizadas:

- `/src/assets/youtube/youtube-phone.png`
- `/src/assets/youtube/circuito.png`

---

### 🎨 Estilos:

CSS específico em:
`/src/components/youtube/BannerYoutube.css`

---

### 🛠️ Como editar:

1. Para alterar imagens → substituir os arquivos em `/src/assets/youtube/`.
2. Para modificar textos → alterar os conteúdos dentro dos elementos `<h2>`, `<p>` e do botão.
3. Para ajustar animações → modificar classes CSS e observadores do Intersection Observer.
4. Para ajustar layout responsivo → alterar as classes Bootstrap nos `div` das colunas.

---

## `CourseCard`

### 📄 Localização:

`/src/components/eventos-cursos/CourseCard.jsx`

---

### 📌 Descrição:

Componente que exibe um cartão visual de curso ou evento, apresentando tipo, título, data e link para inscrição. Suporta estado "Em breve", que aplica um efeito de desfoque e sobreposição indicando que a inscrição ainda não está disponível.

---

### ⚙️ Funcionamento:

- **Props:**

  - `type` → string que indica o tipo do curso ou evento (ex: "Curso", "Evento").
  - `title` → título do curso ou evento.
  - `date` → data ou período do curso/evento.
  - `link` → URL para inscrição ou informações adicionais.
  - `comingSoon` → booleano que indica se o curso ainda não está disponível para inscrição.

- **Layout e Estilo:**

  - Fundo com imagem fixa (`courseBg`), ajustado para cobrir todo o card.
  - Texto em branco e centralizado.
  - Quando `comingSoon` é `true`, o conteúdo do card recebe um efeito de desfoque e uma camada escura com o texto "Em breve" aparece sobre o card.
  - Botão "INSCREVA-SE" aparece apenas quando o curso está disponível (ou seja, `comingSoon` é falso).

---

### 🎨 Estilos:

CSS específico em:
`/src/components/eventos-cursos/CourseCard.css`

---

### 🛠️ Como editar:

1. Para alterar a imagem de fundo → substitua o arquivo em `/src/assets/eventos-cursos/course-card-bg.jpg`.
2. Para modificar o texto exibido → ajuste as props `type`, `title`, `date` e `comingSoon` ao usar o componente.
3. Para mudar o link do botão → modifique a prop `link`.
4. Para alterar estilos visuais → edite o arquivo CSS correspondente.

---

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

## `BannerPesquisa`

### 📄 Localização:

`/src/components/pesquisa/BannerPesquisa.jsx`

---

### 📌 Descrição:

Responsável por exibir um banner responsivo com imagem de fundo, título e texto relacionados à seção de pesquisa do projeto.

Detecta automaticamente se o usuário está em um dispositivo mobile para exibir a imagem correta.

---

### ⚙️ Funcionamento:

- **Estado Local:**

  - `isMobile` → detecta se a tela tem largura menor ou igual a **768px**.

- **Efeito (`useEffect`):**

  - Executa uma verificação inicial do tamanho da tela na montagem.
  - Escuta eventos de `resize` para atualizar dinamicamente.
  - Remove o listener no desmontar para evitar vazamento de memória.

- **Banner:**

  - Renderiza `banner3Mobile` se for mobile, ou `banner3Desktop` em telas maiores.
  - Exibe o título **"Pesquisa"** com um parágrafo descritivo.

---

### 🖼️ Imagens Utilizadas:

- `/src/assets/carrossel/banner3.jpg`
- `/src/assets/carrossel/banner-mobile3.jpg`

---

### 🎨 Estilos:

CSS específico em:
`/src/components/pesquisa/BannerPesquisa.css`

---

### 🛠️ Como editar:

1. Para trocar as imagens → substitua os arquivos no caminho `/src/assets/...`
2. Para mudar o texto → edite o objeto `banner` dentro do componente.
3. Para alterar o ponto de quebra mobile (atualmente 768px) → modifique a condição dentro da função `checkScreenSize`.

---

### 🧠 Observações:

Esse componente segue a mesma lógica de responsividade e estrutura visual dos demais banners, mantendo consistência com o design geral do site.

## `ContentDissertacoes`

### 📄 Localização:

`/src/components/dissertacoes/ContentDissertacoes.jsx`

---

### 📌 Descrição:

Exibe uma lista de dissertações de mestrado orientadas, organizadas por data (mais recentes primeiro), com título, autores, instituição e link para o repositório.

Cada dissertação é apresentada em formato de cartão clicável.

---

### ⚙️ Funcionamento:

- **Dados Locais:**

  - Um array de objetos `dissertacoes` com os campos:
    - `title`, `data`, `autores`, `nota`, `escola`, `url`

- **Ordenação:**

  - As dissertações são ordenadas do ano mais recente para o mais antigo usando `sort()`.

- **Renderização:**

  - Usa `map()` para criar um cartão para cada dissertação.
  - Cada cartão é um link externo (`<a href=... target="_blank">`).
  - Ícone ilustrativo é exibido ao lado das informações.

---

### 🖼️ Imagens Utilizadas:

- `/src/assets/icons/iconM.png` (ícone ao lado das dissertações)

---

### 🎨 Estilos:

CSS específico em:
`/src/components/dissertacoes/ContentDissertacoes.css`

---

### 🛠️ Como editar:

1. Para adicionar uma nova dissertação → inclua um novo objeto no array `dissertacoes`.
2. Para trocar o ícone → substitua `iconM.png` no diretório de assets.
3. Para mudar a ordem de exibição → altere a lógica de ordenação com `sort()`.
4. Para customizar os estilos → edite o CSS associado ao componente.

---

### 🧠 Observações:

O componente está preparado para escalabilidade: basta adicionar novos itens ao array que eles serão exibidos automaticamente em ordem cronológica decrescente.

## `ContentOrientacoes`

### 📄 Localização:

/src/components/ContentOrientacoes.jsx

---

### 📌 Descrição:

Componente responsável por exibir as orientações de **Mestrado** e **Doutorado** em andamento.  
Apresenta as informações de forma organizada em cards, com ícones ilustrativos e links externos para os perfis dos orientandos (ex: Lattes, LinkedIn).

---

### ⚙️ Funcionamento:

- **Listas de dados:**

  - `mestrados` → contém objetos com informações sobre orientações de mestrado.
  - `doutorados` → contém objetos com informações sobre orientações de doutorado.

- **Funções utilitárias:**

  - `ordenarPorData` → ordena as listas do mais recente para o mais antigo.
  - `extrairAno` → extrai apenas o ano de uma string de data.

- **Renderização:**
  - Dois blocos distintos com títulos: _Dissertações de Mestrado_ e _Tese de Doutorado_.
  - Cada orientação é apresentada como um card clicável com:
    - Título da dissertação.
    - Ano de início.
    - Nome(s) do(s) autor(es).
    - Tipo de publicação.
    - Link para mais informações (Lattes ou LinkedIn).

---

### 🖼️ Ícones Utilizados:

- `/src/assets/icons/iconM.png` → ícone para dissertações de mestrado.
- `/src/assets/icons/iconD.png` → ícone para teses de doutorado.

---

### 🎨 Estilos:

CSS específico em:  
`/src/components/ContentOrientacoes.css`

---

### 🛠️ Como editar:

1. Para adicionar ou remover orientações → edite os arrays `mestrados` ou `doutorados` no componente.
2. Para trocar os ícones → substitua os arquivos no caminho `/src/assets/icons/`.
3. Para mudar estilos → edite `ContentOrientacoes.css`.
4. Para alterar o formato de exibição da data ou ordenar de outra forma → modifique `ordenarPorData` ou `extrairAno`.

## `ContentPesquisa`

### 📄 Localização:

/src/components/ContentPesquisa.jsx

---

### 📌 Descrição:

Componente responsável por exibir uma lista de artigos científicos publicados.  
Apresenta cada artigo em cards clicáveis com informações detalhadas e link para o artigo original.

---

### ⚙️ Funcionamento:

- **Array de dados `artigos`:**

  - Contém objetos com título, data, autores, publicação e URL do artigo.

- **Ordenação:**

  - Os artigos são ordenados por data, do mais recente para o mais antigo.

- **Renderização:**
  - Exibe um título principal.
  - Renderiza cada artigo em um card com ícone, título, ano da publicação, autores e informações da publicação.
  - Cada card é link externo para o artigo original.

---

### 🖼️ Ícone Utilizado:

- `/src/assets/icons/iconA.png` → ícone para artigos.

---

### 🎨 Estilos:

CSS específico em:  
`/src/components/ContentPesquisa.css`

---

### 🛠️ Como editar:

1. Para atualizar a lista de artigos → edite o array `artigos` no componente.
2. Para trocar o ícone → substitua o arquivo em `/src/assets/icons/iconA.png`.
3. Para alterar o estilo → modifique o arquivo CSS associado.
4. Para mudar a forma de ordenação → edite a lógica de ordenação no componente.

## `MenuPesquisa`

### 📄 Localização:

/src/components/MenuPesquisa.jsx

---

### 📌 Descrição:

Componente que renderiza um menu de navegação para seções relacionadas à pesquisa acadêmica:

- Artigos Publicados
- Orientações em Andamento
- Orientações Defendidas

Cada item do menu é exibido com um ícone e texto, funcionando como link para a respectiva seção na página.

---

### ⚙️ Funcionamento:

- **Array `items`:** Define os itens do menu com `id` (ancora da seção), ícone e label (texto).
- **Renderização:**
  - Gera colunas responsivas com bootstrap para cada item.
  - Cada item é um link (`<a>`) que navega para a seção pelo id.
  - Mostra o texto e o ícone correspondente.

---

### 🖼️ Ícones Utilizados:

- artigoIcon → ícone para "Artigos Publicados"
- orientacoesIcon → ícone para "Orientações em Andamento"
- dissertacoesIcon → ícone para "Orientações Defendidas"

---

### 🎨 Estilos:

CSS específico em:  
`/src/components/MenuPesquisa.css`

---

### 🛠️ Como editar:

- Para adicionar um novo item no menu, adicione no array `items`.
- Para alterar ícones, substitua os arquivos importados.
- Para ajustar o layout ou estilos, edite o CSS associado.

# Página Quem sou eu

## `BannerQuemSouEu`

### 📄 Localização:

`/src/components/BannerQuemSouEu.jsx`

---

### 📌 Descrição:

Responsável por exibir um banner responsivo com imagem de fundo, título e texto sobre o professor coordenador do projeto.

Adapta dinamicamente a imagem do banner com base na largura da tela, exibindo versões diferentes para dispositivos **mobile** ou **desktop**.

---

### ⚙️ Funcionamento:

- **Estado Local:**

  - `isMobile` → armazena se o dispositivo visualizado tem largura menor ou igual a 768px.

- **Efeito (`useEffect`):**

  - Executa `checkScreenSize()` na montagem do componente para definir se é mobile.
  - Adiciona um _listener_ de `resize` para atualizar o estado em tempo real caso o usuário redimensione a janela.
  - Remove o _listener_ ao desmontar o componente para evitar vazamento de memória (_memory leak_).

- **Banner Dinâmico:**

  - O objeto `banner` define:
    - `image` → imagem a ser usada como fundo (diferente para mobile e desktop).
    - `title` → título principal exibido no banner.
    - `text` → descrição complementar do conteúdo.

- **Renderização:**

  - A imagem de fundo é aplicada via `style={{ backgroundImage }}` diretamente no `div` da classe `slide-content-bannerquemsoueu`.
  - Título e texto são renderizados dentro de um container de texto centralizado.

---

### 🖼️ Imagens Utilizadas:

- `/src/assets/banners/BannerQuemSouEu.jpg` → versão desktop.
- `/src/assets/carrossel/banner-quemsoueu-mobile.jpg` → versão mobile.
- `/src/assets/carrossel/banner-mobile2.jpg` → comentada e não utilizada.

---

### 🎨 Estilos:

CSS localizado em:
`/src/components/BannerQuemSouEu.css`

Classes de destaque:

- `.hero-section-bannerquemsoueu` → define o layout externo do banner.
- `.slide-content-bannerquemsoueu` → aplica a imagem de fundo e controla a área principal.
- `.text-container-bannerquemsoueu` → alinha e estiliza o conteúdo textual.

---

### 🛠️ Como editar:

1. **Trocar imagens**:  
   Substitua os arquivos no caminho `/src/assets/...`.

2. **Alterar título ou descrição**:  
   Modifique os valores das propriedades `title` e `text` dentro do objeto `banner`.

3. **Mudar breakpoint mobile (768px)**:  
   Edite a condição `window.innerWidth <= 768` na função `checkScreenSize()`.

4. **Ajustar estilos**:  
   Faça alterações no arquivo `BannerQuemSouEu.css` para mudar cores, fontes, espaçamento ou responsividade.

---

(Componente geralmente utilizado como banner de abertura na seção “Quem Sou Eu”)

## `EnsinoDados`

### 📄 Localização:

`/src/components/ensino/EnsinoDados.jsx`

---

### 📌 Descrição:

Componente que exibe informações relacionadas às atividades de ensino desenvolvidas no projeto. É dividido em seções com ícones, títulos e descrições, utilizando dados estruturados para facilitar manutenção e extensão.

---

### ⚙️ Funcionamento:

- **`SectionCard` (componente interno):**  
  Componente reutilizável que representa uma seção estilizada com ícone, título e conteúdo.

- **Dados utilizados:**

  - `pessoas`: lista com instituições e disciplinas ministradas.
  - `acoesPromovidas`: array com ações educacionais realizadas.

- **Renderização:**
  - Seções:
    - **O que promovemos no ensino**
    - **Disciplinas**
    - **O que já fizemos**
  - Usa os ícones `FaBook`, `FaChalkboardTeacher` e `FaListAlt`.

---

### 🎨 Estilos:

CSS específico em:  
`/src/components/ensino/EnsinoDados.css`

---

### 🛠️ Como editar:

1. Para adicionar novas disciplinas → edite o array `pessoas`.
2. Para adicionar novas ações realizadas → edite o array `acoesPromovidas`.
3. Para criar novas seções com layout padronizado → utilize o componente `SectionCard`.

---

## `InformacoesCoordenador`

### 📄 Localização:

`/src/components/informacoes/InformacoesCoordenador.jsx`

---

### 📌 Descrição:

Componente React que apresenta informações do coordenador do projeto, incluindo foto, contatos, formação acadêmica e áreas de interesse.

---

### ⚙️ Funcionamento:

- Renderiza uma estrutura com duas colunas:
  - Coluna 1: foto do coordenador e contatos (telefone e email) com ícones.
  - Coluna 2: descrição do cargo, formação acadêmica e áreas de interesse.
- Utiliza imagens importadas localmente para foto e ícones.
- Layout responsivo usando classes Bootstrap.

---

### 🎨 Estilos:

CSS personalizado em:  
`/src/components/informacoes/InformacoesCoordenador.css`

---

### 🛠️ Como editar:

- Atualize as imagens em `../../assets/`.
- Modifique informações pessoais, formação e áreas de interesse diretamente no JSX.
- Altere estilos em CSS conforme necessidade.

# Página Sobre nós

## `BannerSobreNos`

### 📄 Localização:

`/src/components/banner/BannerSobreNos.jsx`

---

### 📌 Descrição:

Componente React que exibe um banner responsivo para a seção "Sobre nós", alternando entre imagens mobile e desktop conforme a largura da tela.

---

### ⚙️ Funcionamento:

- Usa hook `useState` para controlar se a tela é mobile (`<= 768px`).
- Hook `useEffect` adiciona um listener para resize da janela, atualizando o estado.
- Define o banner a ser exibido (imagem, título e texto) baseado no estado `isMobile`.
- Renderiza a seção com imagem de fundo e conteúdo textual sobreposto.

---

### 🖼️ Imagens utilizadas:

- Banner Mobile: `../../assets/banners/banner-sobrenos-mobile.jpg`
- Banner Desktop: `../../assets/banners/BannerSobreNos.jpg`

---

### 🎨 Estilos:

CSS personalizado em:  
`/src/components/banner/BannerSobreNos.css`

---

### 🛠️ Como editar:

- Atualize as imagens em `../../assets/banners/`.
- Altere título e texto diretamente no objeto `banner`.
- Ajuste estilos no CSS conforme necessidade.

## `Team`

### 📄 Localização:

`/src/components/team/Team.jsx`

---

### 📌 Descrição:

Componente React que exibe a seção "Nossa Equipe" com cards para cada membro. O coordenador é destacado em uma linha separada, e os demais membros são listados abaixo.

Cada membro possui foto, nome, cargo/função e links para suas redes sociais (LinkedIn, GitHub, X, e-mail quando disponível).

---

### ⚙️ Funcionamento:

- Define um array `teamMembers` com objetos contendo dados dos membros.
- Extrai o coordenador (primeiro membro) e os demais.
- Renderiza um card especial para o coordenador.
- Renderiza cards para os demais membros usando `.map()`.
- Cada card mostra foto, nome, cargo e ícones clicáveis que abrem as redes sociais em nova aba.
- Ícones só aparecem se o link correspondente existir.

---

### 🖼️ Imagens utilizadas:

- Fotos dos membros do time:

  - `../../assets/team/frank.jpg`
  - `../../assets/team/orlando.jpg`
  - `../../assets/team/veronica.jpg`
  - `../../assets/team/pedronette.jpg`
  - `../../assets/team/brendo.jpg`
  - `../../assets/team/joelle.jpg`
  - `../../assets/team/rafael.jpg`
  - `../../assets/team/layna.jpg`
  - `../../assets/team/leticia-d.jpeg`
  - `../../assets/team/leticia-h.jpg`

- Ícones de redes sociais:
  - `../../assets/redes-sociais/linkedin.svg`
  - `../../assets/redes-sociais/github.svg`
  - `../../assets/redes-sociais/x.svg`
  - `../../assets/redes-sociais/mail.svg`

---

### 🎨 Estilos:

Estilos definidos em:  
`/src/components/team/Team.css`

---

### 🛠️ Como editar:

- Atualize as fotos dos membros em `/assets/team/`.
- Atualize os links sociais no array `teamMembers`.
- Adapte o CSS para alterar a aparência dos cards e responsividade.

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
