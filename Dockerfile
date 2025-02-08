# Étape de build
FROM node:23-alpine AS builder

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers de dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm ci

# Copier le reste des fichiers du projet
COPY . .

# Builder l'application
RUN npm run build

# Étape de production
FROM node:23-alpine AS production

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers nécessaires depuis l'étape de build
COPY --from=builder /app/.output /app/.output
COPY --from=builder /app/package*.json ./

# Définir les variables d'environnement
ENV HOST=0.0.0.0
ENV PORT=3000
ENV NODE_ENV=production

# Démarrer l'application
CMD ["node", ".output/server/index.mjs"]