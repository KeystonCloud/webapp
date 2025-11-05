# KeystonCloud Webapp

## Development Setup
To set up a development environment for KeystonCloud, we use this simple files structure:
```
keystone-cloud/
 ├── node/
 ├── satellite/
 ├── webapp/
 │    ├── Dockerfile.dev
 │    ├── ...
 ├── docker-compose.yml
```

### Define Compose file
If you want to use docker compose for development, you can add into ``services`` part all needed services for webapp. This is a simple example of configuration:
```yaml
  webapp:
    build:
      context: ./webapp
      dockerfile: Dockerfile.dev
    restart: unless-stopped
    volumes:
      - ./webapp:/app
    ports:
      - 5173:5173
    deploy:
      replicas: 1
```
This stack will create the webapp service. The webapp service will be built using the `Dockerfile.dev` file located in the `webapp` folder. It used basic Vite development server to serve the application.
