# DOCKER-REACT-APP

A React app (Create React App) with Docker development and Nginx production setups.

## About The Project

A Create React App project with a Docker-based development environment (`Dockerfile.dev` + `docker-compose.dev.yml`, including a tests service) and a multi-stage production image (`Dockerfile.prod`) serving the build with Nginx. The app itself is the default Create React App page.

### Built With

- React (Create React App)
- Docker Compose
- Nginx (production image)

## Getting Started

### Prerequisites

- Docker and Docker Compose, or Node.js

### Development

```sh
docker compose -f docker-compose.dev.yml up --build
# web on http://localhost:3000, plus a react-app-tests service
```

Or without Docker:

```sh
npm install
npm start
npm test
```

### Production

```sh
docker build -f Dockerfile.prod -t docker-react-app .
docker run -p 80:80 docker-react-app
```

## License

No license file is present in this repository.

## Contact

Dyrits - https://github.com/Dyrits
