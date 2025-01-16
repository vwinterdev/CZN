# Указываем базовый образ
FROM node:20

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем оставшиеся файлы приложения
COPY . .

# Указываем порт, на котором будет работать приложение
EXPOSE 5000

# Запускаем приложение
CMD ["node", "server.js"]