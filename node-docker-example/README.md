# Healthcheck
## Run locally
### Run default (all) healthchecks:
```sh
node index.js
```

### Run custom healthchecks:
```sh
node index.js --services=redis:elasticsearch
```

## Run with docker
### Run default (all) healthchecks:
```sh
docker build -t node-docker-example_healthcheck .
docker run -t node-docker-example_healthcheck
```

### Run custom healthchecks:
```sh
docker run -t node-docker-example_healthcheck -- --services=redis:elasticsearch
```
### docker-compose
```sh
docker-compose run healthcheck -- --services=redis:elasticsearch
```
