# Service Level Objectives (SLO)

## 1. Purpose

This document defines the reliability, performance, and processing objectives for the URL Shortener and Analytics platform.

The objectives establish measurable targets that will guide implementation, testing, and monitoring.

These values represent engineering targets, not measured results. Actual performance will be evaluated through testing and monitoring as the system develops.

## 2. Service Availability

**Objective:** Maintain at least 99.5% availability over a rolling 30-day measurement window.

**Service Level Indicator (SLI):**

Availability is calculated as:

(Successful requests / Total eligible requests) * 100

A request is considered successful when the service responds without a server-side error or timeout.

**Measurement method:**
- Monitor service health endpoints.
- Collect request success and failure metrics.
- Use Prometheus for monitoring.
- Calculate availability over a rolling 30-day window.

## 3. Redirect Response Latency

**Objective:** 95% of successful redirect requests should complete within 300 milliseconds.

**Service Level Indicator (SLI):**

The 95th percentile (p95) of redirect response latency.

**Measurement method:**
- Measure request duration in the Redirect Service.
- Record HTTP request duration metrics.
- Use Prometheus to calculate the p95 latency.
- Validate the objective using load tests.

## 4. Analytics Event Processing

**Objective:** At least 95% of redirect events should be processed within 10 seconds after publication.

**Service Level Indicator (SLI):**

Percentage of successfully processed events completed within 10 seconds of publication.

**Measurement method:**
- Record the event publication timestamp.
- Record the event processing timestamp.
- Calculate the processing delay.
- Monitor processing latency and failed events.

## 5. Error Rate

**Objective:** Keep the server-side error rate below 1% of eligible requests during normal operation.

**Service Level Indicator (SLI):**

(Server-side errors and timeouts / Total eligible requests) * 100.

**Measurement method:**
- Collect HTTP status code metrics.
- Monitor 5xx responses and request timeouts.
- Calculate the error rate using Prometheus.

## 6. SLO Validation

SLOs will be validated progressively as the platform gains functionality.

| SLO | Target | Validation method |
|---|---|---|
| Availability | >= 99.5% | Health checks and Prometheus |
| Redirect latency | p95 < 300 ms | Request duration metrics and load testing |
| Analytics processing | 95% within 10 seconds | Event timestamps and processing metrics |
| Server-side error rate | < 1% | HTTP metrics and Prometheus |

## 7. Review and Adjustment

SLO targets may be reviewed after load testing and performance evaluation.

Any changes to the objectives must be documented with the reason for the adjustment and supporting measurements.