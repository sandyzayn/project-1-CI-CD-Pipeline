FROM node:20-alpine

WORKDIR /usr/src/app

# Copy package manifest explicitly (no glob)
COPY package.json ./
RUN npm install --omit=dev

# Copy the rest
COPY . .

EXPOSE 3000
CMD ["npm", "start"]
