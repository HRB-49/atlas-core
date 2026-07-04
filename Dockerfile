FROM node:20-alpine
WORKDIR /app

# Step 3: Cache the system dependency files separately (Golden Caching Rule)
COPY package.json ./

# Step 4: Run build-time dependency installations inside the isolated image layer
RUN npm install --production

# Step 5: Copy the remaining high-frequency application source files into the stack
COPY src/ ./src/
COPY config.conf ./

# Step 6: Define the strict primary executable structure in JSON Exec format
ENTRYPOINT ["node", "src/core.js"]
