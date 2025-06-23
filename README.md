
# 🏴 OnePieceDex (Opex)

Este repositório contém um de dois projetos que juntos formam a **OnePieceDex** — uma "pokedex" inspirada no mundo de *One Piece*:

- **API**: Backend em Node.js com Express e Prisma (porta `3000`) está no [link](https://github.com/juliocesar710/API_One_Piece)
- **Frontend**: App React + Vite + Tailwind, dockerizado com Nginx (porta `5173`)

> ⚠️ Ainda não há deploy unificado. Para rodar localmente, clone este repositório e use Docker Compose conforme explicado abaixo.

---

## 📁 Estrutura do projeto

```

/ (root)
├── API\_One\_Piece/        ← Backend (Express + Prisma)
├── Opex/                 ← Frontend (React + Vite + Tailwind) (Você está baixando esta parte)
└── docker-compose.yml    ← Orquestração Docker (API + Front + DB) estará no final do Readme.md para vc copiar e colar

````

---

## 🚀 Como rodar localmente

### 1. Clone este repositório

```bash
git clone https://github.com/juliocesar710/Opex.git
cd Opex
````

### 2. Tenha Docker e Docker Compose instalados

* [Instalar Docker Desktop](https://www.docker.com/products/docker-desktop)
* [Instalar Docker Compose](https://docs.docker.com/compose/install/)

### 3. Verifique a estrutura

Confirme que o repositório está assim:

```
Root/
├── API_One_Piece/ -> acesse o link do inicio
│   ├── src/
│   ├── Dockerfile
│   ├── prisma/
│   └── package.json
│
├── Opex/ -> está clonando este
│   ├── src/
│   ├── public/
│   ├── Dockerfile
│   └── package.json
│
└── docker-compose.yml
```

### 4. Suba os containers com Docker Compose

```bash
docker-compose up --build
```

Esse comando irá iniciar três serviços:

* `db`: PostgreSQL (porta 5432)
* `api`: Backend Express (porta 3000)
* `frontend`: App React (porta 5173)

### 5. Acesse no navegador

* Frontend: [http://localhost:5173](http://localhost:5173)
* API: [http://localhost:3000/characters](http://localhost:3000/characters)

---

docker-compose.yml

```
version: "3.8"

services:
  db:
    image: postgres:15
    restart: always
    container_name: postgres_opex
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
      POSTGRES_DB: one_piece
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

  api:
    build: ./API_One_Piece
    container_name: api_opex
    ports:
      - "3000:3000"
    depends_on:
      - db
    environment:
      DATABASE_URL: "postgresql://postgres:postgres@db:5432/one_piece"
    volumes:
      - ./API_One_Piece:/app
    working_dir: /app
    command: sh -c "npx prisma migrate deploy && node src/server.js"

  frontend:
    build: ./Opex  # ou o caminho do seu frontend
    container_name: frontend_opex
    ports:
      - "5173:5173"  # Mapeia a porta do Vite (5173)
    volumes:
      - ./Opex:/app  # Monta o código fonte para hot-reload
      - /app/node_modules  # Evita sobrescrever node_modules
    environment:
      - CHOKIDAR_USEPOLLING=true  # Habilita watch no Docker
    depends_on:
      - api

volumes:
  postgres_data:

```
