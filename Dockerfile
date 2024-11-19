# Step 1: Use Node.js to build the app
FROM node:22 AS build

# Set working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project to the container
COPY . .

# Build the Angular app
RUN npm run build --prod

# Step 2: Use Nginx to serve the app
FROM nginx:alpine

# Copy the Angular build output to Nginx's HTML folder
COPY --from=build /app/dist/my-angular-app/browser /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
