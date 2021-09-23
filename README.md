
### Log aggregation with vector
---
A simple setup of a micro-service environment relying on 2 express HTTP services & [vector.dev](https://vector.dev) for logging aggregation.

Each service brings a vector layer & sinks logs to the main vector aggregator.

## Getting started
---

Simply run the docker-compose commands:
```
  docker-compose up -d --build
```