# ADR-002: HTTP and RabbitMQ Communication

- **Status:** Accepted
- **Date:** 2026-11-11

## Context

The platform requires communication between independent microservices.

Some operations require an immediate response, while others can be processed asynchronously.

For example, visitors should be redirected without waiting for analytics processing to finish.

## Decision

The platform will use two communication patterns:

### Synchronous Communication

HTTP REST APIs will be used for operations requiring an immediate response.

Examples:
- Creating shortened URLs.
- Resolving short codes.
- Retrieving analytics information.

### Asynchronous Communication

RabbitMQ will be used as the message broker for redirect analytics events.

The Redirect Service will publish an event after processing a redirect. The Analytics Service will consume the event and process it independently.

## Alternatives Considered

### Synchronous HTTP Only

All communication would happen through direct HTTP requests.

**Advantages:**
- Simple implementation.
- Immediate responses.
- Easy debugging.

**Disadvantages:**
- Services become more dependent on each other's availability.
- Analytics processing could increase redirect latency.
- Temporary failures may interrupt the entire request flow.

### RabbitMQ for Asynchronous Events

RabbitMQ provides message queues and asynchronous event delivery.

**Advantages:**
- Decouples event producers and consumers.
- Allows independent event processing.
- Supports message acknowledgements and durable queues.
- Helps handle temporary consumer failures.

**Disadvantages:**
- Requires additional infrastructure.
- Introduces message delivery and retry complexity.
- Consumers must handle duplicate messages safely.

## Consequences

- HTTP will handle synchronous request-response operations.
- RabbitMQ will handle asynchronous redirect events.
- Event consumers must be idempotent.
- Message failures and retries must be monitored.
- Event contracts must be documented.

## Implementation Status

The communication strategy has been selected but is not yet implemented. RabbitMQ integration is planned for a subsequent development stage.