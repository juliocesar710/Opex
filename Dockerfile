# Usa a imagem base do Node.js
FROM node:20

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos de dependência
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante dos arquivos
COPY . .

# Expõe a porta do Vite (geralmente 5173)
EXPOSE 5173

# Comando para rodar o servidor de desenvolvimento do Vite
CMD ["npm", "run", "dev"]