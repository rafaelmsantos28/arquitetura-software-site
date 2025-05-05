Desenvolver em React requer boas práticas. Organização é essencial. Aqui estão algumas boas práticas:

### 1. Componentes devem ser pequenos e específicos (Responsabilidade Única)

Exemplo:

**Ruim:**

```jsx
function MegaComponente() {
  return (
    <div>
      <h1>Header</h1>
      <nav>Menu</nav>
      <main>Conteúdo</main>
      <footer>Rodapé</footer>
    </div>
  );
}
```

**Bom:**

```jsx
function App() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}
```

### 2. Nome dos componentes em letra maiúscula

```jsx
function Header() {
  return <h1>Arquitetura de Software</h1>;
}
```

### 3. Usar fragment (<> </>) para evitar div desnecessária

### 4. Usar o `React.StrictMode` no `main.jsx` (já vem por padrão).

### 5. Usar cards reutilizáveis pode ser interessante

```jsx
function Card({ titulo, descricao }) {
  return (
    <div>
      <h2>{titulo}</h2>
      <p>{descricao}</p>
    </div>
  );
}
```

```jsx
<Card titulo="Clean Architecture" descricao="Um padrão de arquitetura..." />
```
