# Desafio Meli

Este projeto consiste em dois módulos, um front-end e uma abstração Adapter (micro-service) para acesso aos conteúdos.

O Backend é feito com nodejs e o Frontend é feito com React, basta ter Nodejs e Npm instalados para executar o projeto.

## Rodando o Backend

Após clonar este repositório vá até o diretório `service-adapter` e execute os seguintes comandos:

```bash
~/meli-challange/service-adapter/$ - npm install
~/meli-challange/service-adapter/$ - npm run start-dev
```

O serviço estará disponivel em 'http://localhost:8082'

```
Server is up        - [GET] /
List items          - [GET] /api/items
List items by query - [GET] /api/items?q=[text]
Item by id          - [GET] /api/items/[id-item]
```

## Rodando o Frontend

Após clonar este repositório vá até o diretório `front-end` e execute os seguintes comandos:

```bash
~/meli-challange/front-end/$ - npm install
~/meli-challange/front-end/$ - npm run dev
```
