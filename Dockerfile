# Use official Node.js 14 as base image
FROM node:alpine

# Copy the rest of the server code
COPY ./ ./

RUN npm install
# Expose port 3000 for the server
EXPOSE 3000

# Default command to start the application
CMD ["npm", "start"]
