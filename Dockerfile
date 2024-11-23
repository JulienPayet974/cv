# Étape 1 : Construction de l'application
FROM node:18 AS builder

WORKDIR /app

# Copier les fichiers de configuration
COPY package.json pnpm-lock.yaml ./

# Installer pnpm
RUN npm install -g pnpm

# Installer les dépendances
RUN pnpm install

# Copier le reste de l'application
COPY . .

# Construire l'application en ignorant les erreurs ESLint
ENV NEXT_TELEMETRY_DISABLED 1
ENV DISABLE_ESLINT_PLUGIN true
RUN pnpm build

# Étape 2 : Exécution de l'application
FROM node:18 AS runner

WORKDIR /app

# Copier les fichiers nécessaires
COPY --from=builder /app/package.json ./
COPY --from=builder /app/pnpm-lock.yaml ./
COPY --from=builder /app/next.config.ts ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules

# Installer pnpm
RUN npm install -g pnpm

# Exposer le port
EXPOSE 3000

# Démarrer l'application
CMD ["pnpm", "start"]