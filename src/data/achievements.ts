export interface Achievement {
  id: string;
  title: string;
  location: string;
  date: string;
  text: string;
}

export const achievements: Achievement[] = [
  {
    id: "biomed_hackathon",
    title: "Winner, BioMed X Hackathon",
    location: "Heidelberg, Germany",
    date: "March 2025",
    text: "Built a healthcare knowledge-graph agent in 24 hours: ingesting biomedical PDFs, running NER and entity linking over gene, disease, and drug mentions, and surfacing relation paths in a Streamlit interface. The post-hackathon pilot cut manual literature triage by about 30%.",
  },
  {
    id: "zurich_datathon",
    title: "Top 5, Zurich Datathon (Alpiq Challenge)",
    location: "Zurich, Switzerland",
    date: "April 2025",
    text: "Built a forecasting pipeline for hourly energy consumption across two inconsistent country portfolios, spending 60% of the project time on data quality and preprocessing before training even started. Ranked top 5 out of 50+ teams.",
  },
];
