- [Página Atividades](#página-atividades)
  - [`AtividadeBanner`](#atividadebanner)
- [Página Extensão](#página-extensão)
- [Página Home](#página-home)
- [Página Pesquisa](#página-pesquisa)
- [Página Quem sou eu](#página-quem-sou-eu)
- [Página Sobre nós](#página-sobre-nós)
- [Componentes Gerais](#componentes-gerais)

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

(Aqui viriam outros componentes da Página Atividades no mesmo formato)

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

## ContentOrientacoes

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

## ContentPesquisa

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

## MenuPesquisa

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
  - Adiciona um *listener* de `resize` para atualizar o estado em tempo real caso o usuário redimensione a janela.
  - Remove o *listener* ao desmontar o componente para evitar vazamento de memória (*memory leak*).

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
