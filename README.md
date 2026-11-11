# URL Shortener and Analytics Platform

A distributed URL shortening platform built with TypeScript, Node.js, and Express.js. The system is designed around independent microservices, asynchronous analytics processing, and cloud-native infrastructure.

## Overview

The platform allows users to create shortened URLs and visitors to access original destinations through short links.

It is designed to demonstrate:

- Microservices architecture.
- Synchronous and asynchronous service communication.
- Event-driven processing.
- Reliable message delivery and idempotent consumers.
- Service monitoring and observability.
- Containerization and Kubernetes orchestration.
- Automated testing and deployment pipelines (planned).

## Architecture

The platform consists of three independent microservices.

### Link Service

Responsible for:
- Creating shortened URLs.
- Generating unique short codes.
- Managing URL metadata.
- Validating submitted URLs.

### Redirect Service

Responsible for:
- Resolving short codes.
- Redirecting visitors to original URLs.
- Handling invalid or expired links.
- Publishing redirect events.

### Analytics Service

Responsible for:
- Processing redirect events.
- Recording click statistics.
- Aggregating analytics data.
- Providing usage statistics.

### Communication

The planned communication architecture uses:

- HTTP for synchronous communication between services.
- RabbitMQ for asynchronous event delivery.
- A transactional outbox pattern for reliable event publishing.
- Idempotent consumers to prevent duplicate event processing.

## Technology Stack

| Category | Technology |
|---|---|
| Runtime | Node.js |
| Language | TypeScript |
| Backend Framework | Express.js |
| Package Manager | npm |
| Message Broker | RabbitMQ (planned) |
| Containerization | Docker |
| Orchestration | Kubernetes |
| Monitoring | Prometheus and Grafana |
| Distributed Tracing | OpenTelemetry |
| Testing | TypeScript type checking; automated tests planned |

## Project Structure

```text
url-shortener-analytics/
+-- contracts/
|   +-- link-service/
|   |   +-- openapi.yaml
|   +-- redirect-service/
|   |   +-- openapi.yaml
|   +-- analytics-service/
|       +-- openapi.yaml
+-- docs/
|   +-- adr/
|   +-- journal/
|   +-- architecture.md
|   +-- risks.md
|   +-- slo.md
+-- services/
|   +-- link-service/
|   |   +-- src/
|   +-- redirect-service/
|   |   +-- src/
|   +-- analytics-service/
|       +-- src/
+-- scripts/
+-- AGENTS.md
+-- package.json
+-- package-lock.json
+-- tsconfig.json
+-- README.md
```

## Getting Started

### Prerequisites

- Node.js 22 or later.
- npm.
- Git.

### Installation

Clone the repository:

```bash
git clone https://github.com/Loriku1/url-shortener-analytics-.git
cd url-shortener-analytics-
```

Install dependencies:

```bash
npm install
```

### Running the Services

Start each service in a separate terminal.

Link Service:

```bash
npm run dev:link
```

Redirect Service:

```bash
npm run dev:redirect
```

Analytics Service:

```bash
npm run dev:analytics
```

### Service Ports

| Service | Local Port |
|---|---:|
| Link Service | 3101 |
| Redirect Service | 3102 |
| Analytics Service | 3103 |

### Health Checks

Verify that each service is running:

```bash
curl http://localhost:3101/health
curl http://localhost:3102/health
curl http://localhost:3103/health
```

Each endpoint should return an HTTP 200 response with the service name, health status, and timestamp.

### TypeScript Validation

Run:

```bash
npm run typecheck
```

## Documentation

The project includes additional technical documentation:

- `AGENTS.md` - Project development guidelines.
- `docs/architecture.md` - System architecture and service responsibilities.
- `docs/slo.md` - Service Level Objectives and measurement methods.
- `docs/risks.md` - Technical and operational risk assessment.
- `docs/adr/` - Architectural Decision Records.
- `contracts/` - OpenAPI specifications for all three services.
- `docs/journal/` - Development progress and measured results.

## Current Implementation Status

The initial service skeletons have been created.

Currently implemented:

- Three independent Express.js services.
- Individual health endpoints.
- TypeScript configuration.
- Development scripts for starting each service.
- OpenAPI specifications for all three services.
- Initial architecture and technical documentation.
- Architectural Decision Records.

Planned for subsequent development:

- URL creation and management.
- Short URL redirection.
- RabbitMQ-based analytics events.
- Database integration.
- Transactional outbox and idempotent event processing.
- Docker and Kubernetes deployment.
- Monitoring, distributed tracing, and automated CI/CD.

The planned features are not considered implemented until they have been developed and tested.

## Development Principles

- Maintain clear service ownership.
- Avoid direct access to another service's database.
- Use explicit API and event contracts.
- Handle failures through timeouts and controlled retries.
- Design event consumers to be idempotent.
- Keep credentials and secrets outside version control.
- Document important architectural decisions.
- Record actual measurements and test results.
