# Projeto: Fullstck - TypeORM com Relacionamentos

## Introdução backend

Através da aplicação é possível realizar o cadastro de um cliente que pode conter muitos contatos associados. 

## Instalacao de uso
1. Clonar o repositório:
Clone o repositório utilizando a "main".
2. Instalar Dependências:
Execute npm i ou yarn para instalar as dependências do projeto.
3. Migração de banco de dados:

**Migre tabelas TypeORM para seu banco de dados usando o comando:**
*npm execute migração typeorm:run -- -d ./src/data-source.ts*
ou
*Migração de Yar Typeorm:run -d ./src/data-source.ts*

**Inicie o projeto localmente com:**
*npm run dev*

## Descriçao 
- Codigo em **TypeScript**.
- **serialização** dos dados utilizando a biblioteca **zod**.
- Foi utilizado um banco de dados **postgres** para a elaboração da API.

## Endpoints:

| Método | Endpoint                   | Responsabilidade                                  | Autenticação                           |
| ------ | -------------------------- | ------------------------------------------------- | -------------------------------------- |
| POST   | /login                     | Gera o token de autenticação                      | N/A                                    |
| POST   | /client                    | Criação de usuário                                | Qualquer usuário, não necessita token  |
| GET    | /client                    | Lista todos os usuários                           | Necessario token  de usuário           |
| GET    | /client/:id                | Lista os usuários por id                          | Necessario token  de usuário           | 
| PATCH  | /client/:id                | Atualiza um usuário                               | Apenas dono da conta                   | | DELETE | /client/:id                | Realiza delete no usuário                         | Apenas dono daconta                    | | POST   | /contacts                  | Criação de contato                                | Necessario autenticacao                |
| GET    | /contacts                  | Lista todas contatos                              | Necessario autenticacao do cliente     |
| GET    | /contacts/:id              | Lista contato por id                              | Necessario autenticacao do cliente     |
| PETCH  | /contacts/id               | Atualiza um contato                               | Apenas cliente e dono da conta         |
| DELETE | /client/:id                | Realiza delete do contato                         | Apenas cliente e dono da conta         |

## Introdução frontend


Este serviço frontend utiliza uma API REST (Backend) para criar, listar, atualizar e excluir dados do banco de dados.

- Tecnologias usadas:
*TypeScript*
*React*
*Zod*
*Styled-components*
*React-router-dom*
*React-hook-form*
*React-hook-form*
*Axios*


