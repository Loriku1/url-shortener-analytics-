# ADR-003: Database per Service

- **Status:** Accepted
- **Date:** 2026-11-11

## Context

The platform contains three microservices with different data responsibilities.

Sharing one database schema between all services could create tight coupling and allow services to depend on another service's internal data structures.

## Decision

The platform will follow the Database per Service principle.

Each service will own and control its application data.

### Link Service

Owns:
- Original URLs.
- Short codes.
- Link metadata.
- Link creation and expiration information.
- Link status.

### Redirect Service

Owns:
- Temporary cached URL mappings.
- Cache-related metadata.

The Redirect Service does not own authoritative link information.

### Analytics Service

Owns:
- Redirect event records.
- Click statistics.
- Aggregated analytics.
- Event processing metadata.

## Alternatives Considered

### Shared Database Schema

All services would access and potentially modify tables in a shared schema.

**Advantages:**
- Simpler initial setup.
- Easier cross-service queries.

**Disadvantages:**
- Strong coupling between services.
- Risk of unintended modifications.
- Database changes may affect multiple services.

### Database per Service

Each service controls its own data and exposes access through defined interfaces.

**Advantages:**
- Clear data ownership.
- Reduced coupling.
- Independent data structure evolution.
- Better service isolation.

**Disadvantages:**
- More complex infrastructure.
- Cross-service queries require communication.
- Data consistency may require asynchronous processing.

## Consequences

- Services must not directly modify another service's data.
- Cross-service access must use documented interfaces or events.
- Each service can evolve its data model independently.
- Data consistency across services must be considered explicitly.

## Implementation Status

Data ownership boundaries have been defined in the architecture. Database technology, schemas, and connections will be implemented in subsequent development stages.