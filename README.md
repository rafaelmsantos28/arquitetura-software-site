# Academia do Arquiteto de Software

## Visão Geral do Projeto

O projeto **Academia do Arquiteto de Software** busca disseminar conhecimento sobre arquitetura de software de forma acessível, promovendo um diálogo entre a universidade e a sociedade.

## Objetivos:

- Realizar oficinas, workshops, palestras e atividades interativas para capacitação de estudantes, profissionais e público interessado.
- Estimular o engajamento colaborativo, permitindo que os participantes adquiram e apliquem conhecimentos sobre práticas arquiteturais no desenvolvimento de software.

## Público-Alvo

- **Estudantes universitários** de graduação e pós-graduação interessados em engenharia e arquitetura de software.
- **Profissionais da área de tecnologia** que desejam aprofundar conhecimentos e aplicar boas práticas arquiteturais.
- **Pessoas interessadas em tecnologia**, mesmo sem formação específica, que queiram aprender sobre o tema.

## Protótipo no Figma

Acesse o protótipo do projeto no Figma através do link abaixo:

[**Protótipo no Figma**](https://www.figma.com/proto/7irYUNVOZqJdbMpW0eJt0y/Projeto-ES?page-id=1%3A6&node-id=234-84&viewport=1179%2C138%2C0.17&t=8XkhTGQrYtGUlc3l-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=234%3A84)

## Desenvolvimento do Site

Estamos elaborando o site oficial do projeto, que em breve estará disponível para acesso.

---

# 👨‍💻 Tutorial para contribuição no site!

Aqui vamos aprender como contribuir e preparar um ambiente para desenvolvimento e atualização do site. Para isso, será necessário instalar:

1. Nodejs
2. Git

Antes de tudo, no seu terminar verifique se você já não tem essas ferramentas instaladas:

Verificar Nodejs:

```bash
node -v
npm -v
```

Verifique também se você tem Git:

```bash
git --version
```

Caso não tenha alguma ou nenhuma das ferramentas, siga o tutorial abaixo.

## ⚙️ Instalação do Git

1. Entre no site [Git - Downloads](https://git-scm.com/downloads)
2. Faça download do Git para seu sistema operacional.
3. Execute o arquivo de instalação
4. Dê "Next" em tudo
5. Abra o terminal e use `git --version` para verificar se o git foi instalado corretamente.

### Configuração do git

Será necessário sincronizar o git com sua conta do Github

1. No terminal, use o comando abaixo para configurar seu nome de usuário:
   ```bash
   git config --global user.name "nome_do_Github"
   ```
2. Ainda no terminal, use o comando:
   ```bash
   git config --global user.email "seu_endereço_de_email_Github"
   ```
3. Feito isso, agora seu git está configurado corretamente.

Vamos agora instalar o node.

## 📦 Instalação do NodeJs

1. Entre no site [Node.js — Run JavaScript Everywhere](https://nodejs.org/en)
2. Baixe a versão **LTS (Long Term Support)**.
3. Execute o arquivo de instalação
4. Dê "Next" em tudo
5. Ao fim, abra o terminal e use `npm -v` e `node -v` para verificar se tudo foi instalado corretamente.

## 📥 Baixando o Projeto

Agora vamos ver como podemos baixar o repositório na nossa máquina e contribuir no projeto.

1. Copie a url do projeto:

   ```
   https://github.com/rafaelmsantos28/arquitetura-software-site.git
   ```

2. Vá até a pasta do seu computador onde você quer que o projeto fique
3. Abra o terminal nessa pasta
4. No terminal, use o seguinte comando:
   ```bash
   git clone https://github.com/rafaelmsantos28/arquitetura-software-site.git
   ```
5. Acesse a pasta do projeto
   ```bash
   cd arquitetura-software-site
   ```
6. Instale as dependências do projeto usando o comando:
   `bash
	npm install
	`
   > Observações: O diretório node_modules não é versionado e não precisa ser enviado pro GitHub, pois suas dependências estão listadas no arquivo package.json. O comando npm install baixa as dependências automaticamente com base nesse arquivo.

## 🚀 Rodando o projeto localmente

1. No terminal da pasta projeto (ou até no terminal do Vscode do projeto), execute:

```
npm run dev
```

O comando fornce um link (localhost) para acessar o site. Mudanças feitas no código e salvas (`ctrl + s`) são atualizadas diretamente no site. Erros de código, fazem com que a página do site não apareça (página em branco) ou fazem com que o erro do código apareça na página.

Para "desligar o site" use no terminal `ctrl + c`. Uma mensagem aparecerá no terminal perguntando se deseja encerrar a aplicação.

## 📝 Como contribuir no projeto

Ao realizar alterações no site, é necessárias que elas sejam enviadas para o repositório principal para que as mudanças fiquem salvas para todos os membros do projeto. Após criar uma nova funcionalidade ou correção no site, siga as instruções abaixo para que a funcionalidade seja validada:

1. Crie uma branch nova para cada funcionalidade ou correção:

   ```bash
   git checkout -b nome-da-sua-branch
   ```

2. Faça suas alterações no código.
3. Adicione os arquivos modificados:

   ```bash
   git add .
   ```

4. Faça um commit com uma mensagem descritiva:
   ```bash
   git commit -m "feat: ajuste no carrossel para responsividade"
   ```
5. Envie a branch para o repositório:
   `bash
	git push origin nome-da-sua-branch
	`
   No GitHub, abra um **Pull Request** da sua branch para a `main`.

6. Fim :)

## 🖥️ Outras Dicas

- ### Usando Prettier
  O projeto vem com a dependência Prettier, que faz como que todos os códigos fiquem formatados corretamente (identação, espaços, etc).
  Antes de usar `git add .`, use `npm run format`. Ele verifica todos os arquivos do projeto e deixa todos na identação correta.
