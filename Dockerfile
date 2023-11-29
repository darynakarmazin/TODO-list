# Use the official Node.js image
FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Run the npm build script
RUN npm run build

# Copy all other project files
COPY . .

# Expose the port on which the application runs
EXPOSE 3000

# Define the command to run the application
CMD ["npm", "start"]
