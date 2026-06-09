# 💰 Finanças App

Aplicativo mobile de controle financeiro desenvolvido com **React Native + Expo** no front-end e **Node.js + TypeScript** no back-end. A aplicação permite que usuários realizem o gerenciamento de suas finanças pessoais por meio do registro de receitas e despesas, acompanhamento do saldo atualizado, histórico diário e autenticação segura utilizando JWT.

Este projeto foi desenvolvido com base nos ensinamentos do curso Fábrica de Aplicativos do **Sujeito Programador**.

---

## 📱 Demonstração

<table align="center">
  <tr>
    <td align="center">
      <img width="220" alt="1-Login" src="https://github.com/user-attachments/assets/0f6df68f-1b84-4436-b0a4-2ffbdecc4899" /><br>
      <strong>Login</strong>
    </td>
    <td align="center">
      <img width="220" alt="2-Cadastro" src="https://github.com/user-attachments/assets/aa64a48f-a117-4d7d-8cc3-40ff83e79391" /><br>
      <strong>Cadastro</strong>
    </td>
    <td align="center">
      <img width="220" alt="3-Home" src="https://github.com/user-attachments/assets/f7c81f24-b152-42d4-9fab-6b089d5be8b0" /><br>
      <strong>Home</strong>
  </tr>
  <tr>
    <td align="center">
      <img width="220" alt="4-Nova Movimentação" src="https://github.com/user-attachments/assets/3ef266d4-23e7-4875-8f34-c1c320bbaf1b" /><br>
      <strong>Nova Movimentação</strong>
    </td>
    <td align="center">
      <img width="220" alt="5-Calendario" src="https://github.com/user-attachments/assets/24162141-a424-47bb-a7b6-ea80d7bcfeaa" /><br>
      <strong>Calendário</strong>
    </td>
    <td align="center">
      <img width="220" alt="6-Menu Lateral" src="https://github.com/user-attachments/assets/f9b215c2-38a3-4809-bde3-3d04f6a87084" /><br>
      <strong>Menu Lateral</strong>
  </tr>
</table>


---

## 🚀 Funcionalidades

### 🔐 Autenticação

* Cadastro de novos usuários;
* Login utilizando e-mail e senha;
* Criptografia de senhas com **bcryptjs**;
* Geração de token JWT após autenticação;
* Utilização do padrão **Bearer Token** nas rotas protegidas;
* Persistência da sessão utilizando **AsyncStorage**;
* Proteção automática das rotas privadas;
* Logout com remoção dos dados locais.

---

### 💰 Controle Financeiro

#### Cadastro de movimentações

O usuário pode registrar:

* Receitas;
* Despesas.

Cada movimentação possui:

* Descrição;
* Valor;
* Tipo da movimentação;
* Data do registro.

---

### 📊 Dashboard Financeiro

A tela inicial apresenta três indicadores:

* **Saldo Atual**
* **Entradas do dia**
* **Saídas do dia**

Os valores são atualizados automaticamente após:

* Inclusão de novos registros;
* Exclusão de movimentações;
* Alteração do filtro de datas.

---

### 📋 Histórico de Movimentações

A aplicação exibe o histórico diário contendo:

* Tipo da movimentação;
* Descrição;
* Valor formatado em Real (R$).

---

### 🗑 Exclusão de Registros

As movimentações podem ser removidas através de:

* Pressão prolongada (Long Press) sobre o item;
* Confirmação via alerta antes da exclusão.

Após a remoção:

* O histórico é atualizado automaticamente;
* Os indicadores financeiros são recalculados.

---

### 📅 Filtro por Data

O usuário pode consultar movimentações específicas através de um calendário modal.

Recursos:

* Seleção de datas;
* Destaque visual da data escolhida;
* Atualização instantânea dos registros;
* Atualização dos indicadores financeiros.

---

## 🔒 Fluxo de Autenticação

### Cadastro

O usuário cria uma conta informando:

* Nome;
* E-mail;
* Senha.

A senha é criptografada antes de ser armazenada.

---

### Login

Após informar as credenciais válidas:

1. O servidor valida o usuário;
2. Um token JWT é gerado;
3. O token é enviado ao aplicativo;
4. Os dados da sessão são armazenados localmente.

---

### Bearer Token

As rotas protegidas utilizam o cabeçalho:

```http
Authorization: Bearer <token>
```

O Axios é configurado para enviar automaticamente o token em todas as requisições autenticadas.

---

### Persistência da Sessão

A sessão do usuário permanece ativa mesmo após fechar o aplicativo.

Os dados são armazenados utilizando:

```javascript
AsyncStorage
```

Ao abrir o app novamente:

* O token é recuperado;
* A autenticação é restaurada automaticamente.

---

## 🛠 Tecnologias Utilizadas

### Front-end

* React Native
* Expo
* React
* React Navigation
* Axios
* Styled Components
* Date-fns
* React Native Calendars
* AsyncStorage

### Back-end

* Node.js
* TypeScript
* Express
* Prisma ORM
* SQLite
* JWT
* bcryptjs
* CORS
* Express Async Errors

---

## 📦 Estrutura do Projeto

```
financas-app/
│
├── front-end (Expo)
│
└── financas-app-backend/
    └── API Node.js
```

---

# ▶️ Executando o Projeto

## Pré-requisitos

* Node.js instalado;
* Android Studio configurado;
* Emulador Android;
* Git.

---

# ⚙️ Backend

Entre na pasta do backend:

```bash
cd financas-app-backend
```

Instale as dependências:

```bash
npm install
```

ou

```bash
yarn
```

---

## Configuração do Banco SQLite

O projeto utiliza SQLite através do Prisma.

Crie um arquivo `.env`:

```env
DATABASE_URL="file:./dev.db"
JWT_SECRET="sua_chave_secreta"
```

---

## Executando as migrações

```bash
npx prisma migrate dev
```

---

## Visualizando o banco

```bash
npx prisma studio
```

---

## Iniciando a API

```bash
npm run dev
```

A API será iniciada em:

```
http://localhost:3333
```

---

# 📱 Front-end

Entre na pasta do aplicativo:

```bash
cd financas-app
```

Instale as dependências:

```bash
npm install
```

ou

```bash
yarn
```

---

## Configuração da API

No arquivo responsável pelo Axios, ajuste a URL conforme o ambiente utilizado.

Exemplo:

```javascript
baseURL: "http://SEU_IP_LOCAL:3333"
```

Caso utilize emulador Android:

```javascript
baseURL: "http://10.0.2.2:3333"
```

---

## Executando com Expo

Inicie o projeto:

```bash
npx expo start
```

ou

```bash
npm start
```

---

## Rodando no Android Studio

1. Abra o Android Studio;
2. Inicie um dispositivo virtual (AVD);
3. Execute:

```bash
a
```

no terminal do Expo;

ou utilize:

```bash
npm run android
```

---

## Utilizando Expo Go

1. Instale o Expo Go no celular;
2. Execute:

```bash
npx expo start
```

3. Escaneie o QR Code gerado.

> O celular e o computador devem estar na mesma rede.

---

## 📂 Estrutura Simplificada

### Front-end

```
src/
├── assets
├── components
├── contexts
├── pages
├── routes
└── services
```

### Back-end

```
src/
├── @types
├── controllers
├── middlewares
├── prisma
└── services
```

---

## 🔮 Melhorias Futuras

* Edição de movimentações;
* Relatórios mensais;
* Gráficos financeiros;
* Exportação de dados;
* Deploy da API;
* Testes automatizados;
* Recuperação de senha;
* Perfil do usuário.

---

## 👨‍💻 Autor

**Vitor Ribeiro**

LinkedIn:
https://www.linkedin.com/in/ribeiro-vitor/

GitHub:
https://github.com/vprribeiro

E-mail:
[vprribeiro@hotmail.com](mailto:vprribeiro@hotmail.com)

---

## 🙏 Créditos

Projeto desenvolvido com base nos ensinamentos do curso Fábrica de Aplicativos do **Sujeito Programador**, recebendo adaptações, correções e melhorias implementadas durante o processo de desenvolvimento e aprendizado.

---

## 📄 Licença

Este projeto está sob a licença MIT.
