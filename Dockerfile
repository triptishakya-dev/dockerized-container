#Base Image
FROM node:18-alpine 

#Working folder
WORKDIR /app

# All dependencies
COPY package*.json ./

# Install the dependencies 
RUN npm install

# Copy all folder and files
COPY . .

# prisma generate client
RUN npx prisma generate

# Expose the PORT
EXPOSE 3000


# Run the node.js index.js 
CMD ["node" , "index.js"]