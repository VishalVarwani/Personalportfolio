export interface ExperienceEntry {
  id: string;
  company: string;
  title: string;
  period: string;
  location: string;
  highlight: string;
  core: string[];
  more: string[];
}

export const experience: ExperienceEntry[] = [
  {
    id: "eray",
    company: "e.Ray Europa GmbH",
    title: "Working Student, AI Engineer",
    period: "April 2025 – April 2026",
    location: "Darmstadt, Germany",
    highlight:
      "LangGraph agents in production, cutting manual document processing by 65% and hitting 88% RAG accuracy.",
    core: [
      "Built a LangGraph agent pipeline on GCP that automates end-to-end extraction of environmental compliance data from government portals and PDF reports, cutting manual document processing time across the research team by about 65%.",
      "Implemented domain RAG with hybrid search, combining dense Voyage AI embeddings in Pinecone with sparse BM25 retrieval and cross-encoder reranking. Reached about 88% query accuracy across 1,200+ indexed documents and took document retrieval from manual hours down to seconds.",
      "Diagnosed a roughly 35% pipeline failure rate caused by partial extractions, hallucinated regulatory values, and mixed prose in LLM output. Applied chain-of-thought prompting and strict JSON schema enforcement, and dropped the error rate to under 2%.",
      "Containerized the pipeline as a Docker Compose stack with health checks, and maintained reliability through DeepEval regression tests tracking Recall@k and F1 before each deployment.",
    ],
    more: [
      "Replaced a polling-based sensor ingestion job with a Kafka consumer that processes readings as they arrive instead of on a schedule, cutting data lag from about 15 minutes to under 2.",
      "Built a LangGraph multi-agent monitoring system on top of the ingestion layer: one agent polls 15+ government portals for new publications, one validates schema compliance and flags anomalies, one routes anomalies to auto-processing or human review. Cut manual pipeline monitoring time by about 70%.",
      "Inherited 12 independent processing scripts, each with its own error handling and logging. Rewrote them as a single orchestrated pipeline, cutting code volume by about 55% and eliminating four categories of intermittent errors that only existed because of the duplicated implementations.",
      "Containerized the ingestion and document-processing services separately and deployed them on Kubernetes to isolate resource-heavy document parsing from the lower-latency sensor pipeline.",
    ],
  },
  {
    id: "paretos",
    company: "Paretos",
    title: "Research Student, Sales Forecasting",
    period: "November 2024 – March 2025",
    location: "Heidelberg, Germany",
    highlight:
      "Demand forecasting in PyTorch across two country markets, improving accuracy 12-18% over baseline.",
    core: [
      "Built an hourly demand forecasting model in PyTorch for retail and marketplace clients across high-variance product categories and two country markets, improving forecast accuracy by 12-18% over baseline and cutting overstock and stockout prediction errors by about 40%.",
      "Designed the end-to-end data pipeline pulling raw sales data from PostgreSQL, using SQL transformations to resolve missing values, schema mismatches, and multi-country format inconsistencies before training.",
      "Led experiment design, sprint planning, and result tracking for a three-person research team, with structured experiment logs that cut redundant test cycles.",
    ],
    more: [
      "Built a rolling-origin backtesting framework and automated hyperparameter sweeps, reducing overconfident spike predictions by about 40%.",
      "Scheduled the forecasting pipeline through Airflow, with a retrain step that triggered automatically once new data landed instead of needing manual initiation.",
      "Built freshness checks on the data pipeline that caught two separate upstream source outages before stale data could feed into a forecast.",
    ],
  },
  {
    id: "wipro",
    company: "Wipro",
    title: "Data Engineer Intern",
    period: "April 2023 – January 2024",
    location: "Mumbai, India",
    highlight:
      "Python ETL pipelines processing 50M+ records monthly across 5 client REST APIs into PostgreSQL.",
    core: [
      "Built and maintained Python ETL pipelines ingesting raw transaction data from 5 client REST APIs into a centralized PostgreSQL warehouse, normalizing schemas across inconsistent source formats and processing 50M+ records monthly.",
      "Designed Airflow DAGs orchestrating daily ingestion, transformation, and aggregation across 3 retail client pipelines, adding SLA breach alerts and failure notifications that cut undetected pipeline downtime by about 80%.",
      "Migrated a legacy batch ETL process from shell scripts to a Python and Airflow pipeline, reducing average data refresh latency from 6 hours to 45 minutes for a retail client processing 10M+ daily transactions.",
      "Built a REST API data connector pulling live inventory and sales data on 15-minute intervals, with exponential backoff retry logic and a dead-letter queue for failed records, reaching 99.4% ingestion reliability.",
    ],
    more: [
      "Wrote dbt transformation models converting raw ingested data into analytics-ready tables, with tests covering null values, duplicate keys, and referential integrity violations that caught issues before they reached downstream reporting.",
      "Profiled source data quality for 3 client datasets before pipeline onboarding, documenting schema inconsistencies, missing field rates, and outlier distributions that informed upstream data contract requirements.",
      "Built pipeline monitoring in GCP using BigQuery and Looker Studio tracking row counts, latency, and error rates per run, so the data team caught upstream feed issues within minutes instead of hours.",
      "Developed feature engineering pipelines extracting behavioral signals from raw transaction logs for a client's ML demand forecasting model, replacing 2 days of manual analyst prep per model run.",
    ],
  },
];
