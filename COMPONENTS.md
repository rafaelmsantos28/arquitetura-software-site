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

# Página Quem sou eu

# Página Sobre nós

# Componentes Gerais
