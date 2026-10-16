// Case studies are written generically on purpose: no employer-internal
// product names, team names, customers, or visuals. Numbers come from the
// résumé and the author's notes.

export interface CaseStudy {
  slug: string;
  title: string;
  /** Headline number shown in the proof bar and on cards. */
  metric: string;
  metricLabel: string;
  /** One-line supporting detail for the metric. */
  metricDetail: string;
  summary: string;
  context: string[];
  problem: string;
  role: string;
  diagnosis: string;
  solution: string[];
  result: string;
  lessons?: string[];
  stack: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "real-time-event-processing",
    title: "From 120 minutes to under 5: real-time event processing at 24× speed",
    metric: "24×",
    metricLabel: "faster event processing",
    metricDetail: "30K events: 120 min → under 5 min",
    summary:
      "Removed the bottleneck in a Kafka-based event pipeline so real-time product features got current data again.",
    context: [
      "Around 100,000 user status-change events per hour from upstream products, with surges at peak hours.",
      "Events flow through Kafka topics into services that power real-time product features.",
    ],
    problem:
      "The consumers couldn't keep up with incoming events. Lag built up continuously on the Kafka topics, so features that depended on real-time status showed stale data, and the backlog grew during peak hours.",
    role:
      "As the senior engineer assigned to the problem, I owned the optimization end to end: finding where time went, designing the fix, and rolling it out.",
    diagnosis:
      "I measured where processing time was spent and looked for gaps in the flow. The biggest cost was on the read path: processing each event needed data that took several API calls to fetch, and the same calls were made over and over.",
    solution: [
      "Added caching for the reads that previously required multiple API calls, so most lookups were served without a network round trip.",
      "Optimized the remaining steps of the pipeline end to end once the main bottleneck was gone.",
      "Added metrics for event volume and processing time so lag and scale were visible instead of discovered through user impact.",
    ],
    result:
      "Processing 30,000 events went from about 120 minutes to under 5 minutes, a 24× improvement. That throughput is well above the average arrival rate of ~100K events per hour, so the pipeline keeps up with traffic instead of falling behind.",
    lessons: [
      "Design for peak traffic, not the average. A pipeline that only just keeps up on a normal hour will fall behind during every surge.",
      "Measure before optimizing. The time went into repeated network calls, not compute, so caching those reads did more than any code-level tuning could.",
      "Instrument event pipelines from day one. Consumer lag, per-stage latency, and throughput metrics surface scale problems before users notice stale data.",
    ],
    stack: ["Kafka", "Node.js", "Caching", "Event-driven architecture", "Metrics"],
  },
  {
    slug: "database-cpu-reduction",
    // \u2060 (word joiner) keeps "70–80%" and "25–30%" from wrapping after the dash.
    title: "Cutting MySQL CPU from a constant 70\u2013\u206080% to 25\u2013\u206030%",
    metric: "25–30%",
    metricLabel: "database CPU",
    metricDetail: "down from a constant 70–80%",
    summary:
      "A product-wide database performance initiative: observability, query and index fixes, table redesign, and a hot-warm-cold archival strategy.",
    context: [
      "A primary MySQL instance serving heavy read and write traffic across the product.",
      "Large, growing tables shared by many features and services.",
    ],
    problem:
      "The MySQL instance ran at 70–80% CPU almost all the time. That left little headroom for traffic spikes, slowed queries across the product, and kept the database on a larger, more expensive instance than it should have needed.",
    role:
      "I led database performance across the product. I set up the metrics and slow-query tracking, fixed many of the slowest queries myself, and ran technical sessions on how MySQL works internally so the rest of the team could optimize queries too.",
    diagnosis:
      "I monitored database metrics and slow-query logs in every environment (dev, staging, and production). That produced a ranked list of the most expensive queries and showed recurring patterns: inefficient joins, missing indexes, and queries where MySQL used the wrong index.",
    solution: [
      "Rewrote the most expensive queries, changing how joins were performed.",
      "Added missing indexes, reworked existing ones, and fixed queries that were using the wrong index.",
      "Redesigned core tables and resolved 15+ complex slow queries together with the team.",
      "Introduced a hot-warm-cold archival strategy for the largest tables to reduce write cost.",
      "Ran knowledge-sharing sessions on MySQL internals, so the improvements didn't depend on one person.",
    ],
    result:
      "CPU utilization dropped from a constant 70–80% to 25–30%. The extra headroom made it possible to downsize the database instance, saving significant infrastructure cost.",
    lessons: [
      "Observability comes first. Slow-query logs from every environment turned a vague \"the database is busy\" into a ranked list of fixes.",
      "Fix queries before buying hardware. Much of the load came from bad joins and wrong index choices, which a bigger instance would only have hidden.",
      "Teaching scales further than fixing. Once the team understood how MySQL picks indexes, they caught slow queries in review instead of production.",
      "Plan archival for large tables early. Data growth quietly turns into write cost long before anyone notices.",
    ],
    stack: ["MySQL", "Query optimization", "Indexing", "Data archival", "Observability"],
  },
  {
    slug: "integration-platform",
    title: "One platform, 21 integrations: a shared auth and proxy layer for third-party APIs",
    metric: "21",
    metricLabel: "integrations in 5 months",
    metricDetail: "on one shared platform, adopted by 5 teams",
    summary:
      "Replaced one-off integration code with a configurable platform that handles authentication and third-party API calls for every service.",
    context: [
      "Many third-party CRM, ticketing, and chat systems, each with its own authentication scheme.",
      "Several product modules (ticketing, chat, data-ingestion pipelines) that all needed integrations.",
    ],
    problem:
      "Each integration was built separately, which meant re-implementing authentication, configuration, and API handling every time. Delivery was limited to about two integrations a month.",
    role:
      "I designed and built the platform: an authentication and proxy service that connects to any third-party application, plus an SDK that product services use to call third-party APIs through it.",
    diagnosis:
      "Most of the work in every integration was the same: connecting an account, handling the auth flow, managing credentials, and making authenticated calls. A common platform could own that shared part, so each module only had to build what was unique to it.",
    solution: [
      "A general, configurable service that handles integration creation, integration-specific configuration, and third-party API calls.",
      "A reverse-proxy design: child services call the platform's APIs, and it handles authentication for each provider in a scalable way.",
      "One interface for Basic auth, OAuth, and OAuth 2.0 with PKCE.",
      "An SDK so services can adopt the platform with minimal code.",
      "Built as Java/Spring Boot and Node.js microservices.",
    ],
    result:
      "Only the first integration of each type took real effort. After that, new integrations mostly reused the platform, and the team delivered 21 integrations in 5 months. Because it was simple to use, 5 product teams across the organization adopted the platform for their own third-party integrations.",
    lessons: [
      "Look for the repeated work before writing the next one-off. Spotting that every integration shared the same auth and API plumbing was worth more than speeding up any single integration.",
      "Centralize the risky parts. With authentication and credential handling in one place, every security or reliability improvement reached all integrations at once.",
      "A platform's adoption depends on how easy it is to use. Five teams picked it up because a simple SDK made the first integration quick.",
    ],
    stack: ["Java", "Spring Boot", "Node.js", "OAuth 2.0", "PKCE", "Reverse proxy", "SDK design"],
  },
  {
    slug: "privacy-first-llm-pipeline",
    title: "A privacy-first LLM pipeline analyzing 500K items a day",
    metric: "500K/day",
    metricLabel: "items analyzed by LLM",
    metricDetail: "with PII protected and customer-controlled",
    summary:
      "LLM-powered analysis where customers control what data reaches the model, and sensitive values are pseudonymized before they leave.",
    context: [
      "About 500,000 items to analyze per day.",
      "Part of replacing a third-party vendor tool with an in-house product.",
      "Customer data that often contains PII, such as email addresses, across customers with different sensitivity requirements.",
    ],
    problem:
      "New product features needed LLM-based analysis of customer data. Sending raw data to an LLM wasn't acceptable: it can contain PII, and customers need control over what is shared with a model.",
    role:
      "I architected and implemented the privacy-first pipeline, from sensitivity-based data handling through the LLM execution layer.",
    diagnosis:
      "As a Security Champion, I already worked with the organization's data-classification standards, so I knew which fields were sensitive and how each had to be handled. The design started from those classifications instead of adding redaction afterwards.",
    solution: [
      "Pipelines that handle each field according to its data-sensitivity level.",
      "Customer-controlled settings: customers choose which data can be sent to the LLM and which can't.",
      "Reversible pseudonymization: values like email addresses are replaced with placeholders before the request, the mapping stays in memory, and the real values are restored when the response comes back.",
      "LLM routing across tiered models to balance result quality against API cost.",
      "Server-Sent Events for real-time token streaming, and semantic caching to avoid redundant LLM calls.",
      "Observability dashboards for guardrails, token usage, and model telemetry.",
    ],
    result:
      "Privacy-ready LLM analysis at around 500K items a day. The model sees only what customers allow, PII is pseudonymized before it leaves, and responses are mapped back to real values, so result quality stays high.",
    lessons: [
      "Start privacy design from data classification, not from the model. Knowing which fields were sensitive, and how sensitive, shaped the whole pipeline.",
      "Pseudonymize instead of deleting. Reversible placeholders keep the structure the model needs, so protecting PII didn't cost result quality.",
      "Customer control builds trust. Letting customers decide what reaches the LLM made the feature easier to adopt.",
      "Treat LLM calls like any other expensive dependency: route by need, cache repeated work, and watch tokens and cost from day one.",
    ],
    stack: ["LLMs", "PII redaction", "Data classification", "SSE", "Semantic caching", "AI observability"],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
