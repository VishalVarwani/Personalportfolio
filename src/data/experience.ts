export interface ExperienceEntry {
  id: string;
  company: string;
  title: string;
  period: string;
  location: string;
  highlight: string;
  bullets: string[];
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
    bullets: [
      "Built a LangGraph agent pipeline on GCP that automates end-to-end extraction of environmental compliance data from government portals and PDF reports, cutting manual document processing time across the research team by about 65%.",
      "Implemented domain RAG with hybrid search, combining dense Voyage AI embeddings in Pinecone with sparse BM25 retrieval and cross-encoder reranking. Reached about 88% query accuracy across 1,200+ indexed documents and took document retrieval from manual hours down to seconds.",
      "Diagnosed a roughly 35% pipeline failure rate caused by partial extractions, hallucinated regulatory values, and mixed prose in LLM output. Applied chain-of-thought prompting and strict JSON schema enforcement, and dropped the error rate to under 2%.",
      "Containerized the pipeline as a Docker Compose stack with health checks, and maintained reliability through DeepEval regression tests tracking Recall@k and F1 before each deployment.",
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
    bullets: [
      "Built an hourly demand forecasting model in PyTorch for retail and marketplace clients across high-variance product categories and two country markets, improving forecast accuracy by 12-18% over baseline and cutting overstock and stockout prediction errors by about 40%.",
      "Designed the end-to-end data pipeline pulling raw sales data from PostgreSQL, using SQL transformations to resolve missing values, schema mismatches, and multi-country format inconsistencies before training.",
      "Built a rolling-origin backtesting framework and automated hyperparameter sweeps, reducing overconfident spike predictions by about 40%.",
      "Led experiment design, sprint planning, and result tracking for a three-person research team, with structured experiment logs that cut redundant test cycles.",
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
    bullets: [
      "Built and maintained Python ETL pipelines ingesting raw transaction data from 5 client REST APIs into a centralized PostgreSQL warehouse, normalizing schemas across inconsistent source formats and processing 50M+ records monthly.",
      "Designed Airflow DAGs orchestrating daily ingestion, transformation, and aggregation across 3 retail client pipelines, adding SLA breach alerts and failure notifications that cut undetected pipeline downtime by about 80%.",
      "Migrated a legacy batch ETL process from shell scripts to a Python and Airflow pipeline, reducing average data refresh latency from 6 hours to 45 minutes for a retail client processing 10M+ daily transactions.",
      "Built a REST API data connector pulling live inventory and sales data on 15-minute intervals, with exponential backoff retry logic and a dead-letter queue for failed records, reaching 99.4% ingestion reliability.",
    ],
  },
];
