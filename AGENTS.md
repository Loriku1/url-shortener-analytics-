# AGENTS.md

## Project Overview

This project is a distributed URL shortening platform with asynchronous analytics, caching, and a cloud-native microservices architecture.

The system is designed to demonstrate microservice communication, event-driven architecture, reliability, observability, containerization, and automated deployment.

## Technology Stack

- **Runtime:** Node.js
- **Language:** TypeScript
- **Backend:** Express.js
- **Package Manager:** npm
- **Containerization:** Docker
- **Orchestration:** Kubernetes
- **Message Broker:** RabbitMQ (planned for implementation).
- **Monitoring:** Prometheus and Grafana
- **Tracing:** OpenTelemetry

## Architecture

The application is divided into three independent services:

### 1. Link Service
Responsible for:
- Creating shortened URLs.
- Generating unique short codes.
- Managing URL metadata.
- Validating submitted URLs.

### 2. Redirect Service
Responsible for:
- Resolving short codes.
- Redirecting users to original URLs.
- Handling invalid or expired links.
- Publishing redirect events.

### 3. Analytics Service
Responsible for:
- Processing redirect events.
- Recording click statistics.
- Aggregating analytics data.
- Providing usage statistics.

Each service owns its own application logic and data.

## Project Structure

```text
services/
  link-service/
    src/
  redirect-service/
    src/
  analytics-service/
    src/

contracts/
  link-service/
  redirect-service/
  analytics-service/

docs/
  adr/
  journal/

scripts/
```

## Development Guidelines

- Use TypeScript for application code.
- Follow clear separation of responsibilities.
- Keep services independently maintainable.
- Validate incoming request data.
- Handle errors consistently.
- Use environment variables for configuration.
- Never commit secrets or credentials.
- Write meaningful Git commit messages.
- Update documentation when architecture changes.

## Development Commands

Run individual services:

```bash
npm run dev:link
npm run dev:redirect
npm run dev:analytics
```

Check TypeScript:

```bash
npm run typecheck
```

## Coding Standards

- Use descriptive variable and function names.
- Prefer asynchronous operations where appropriate.
- Avoid unnecessary dependencies.
- Keep business logic separate from HTTP handlers.
- Use appropriate HTTP status codes.
- Implement logging for important operations.
- Write tests for critical functionality.

## Architecture Principles

- Independent service responsibilities.
- Explicit service communication contracts.
- Asynchronous event processing where appropriate.
- Idempotent event consumers.
- Resilience through timeouts, retries, and circuit breakers.
- Observability through metrics, logs, and distributed tracing.
- Secure configuration and least-privilege access.

## Important Rules

- Do not introduce unnecessary services.
- Do not duplicate business logic across services.
- Do not assume that an event is delivered exactly once.
- Do not expose internal implementation details through public APIs.
- Document significant architectural decisions in `docs/adr/`.
- Record development progress and measured results in `docs/journal/`.