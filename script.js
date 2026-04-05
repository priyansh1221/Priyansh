const journeyData = [
  {
    period: "Jan 2026 - Present",
    role: "Agentic AI Developer",
    org: "Labelbox",
    details:
      "Designing agentic AI workflows, training-data evaluation, and multi-step reasoning tasks for foundation-model development.",
  },
  {
    period: "Nov 2025 - Feb 2026",
    role: "Senior AI Generalist",
    org: "Outlier",
    details:
      "Built prompt frameworks and evaluation workflows for LLM quality, consistency, and factual alignment.",
  },
  {
    period: "Aug 2023 - Jan 2026",
    role: "Junior Data Scientist",
    org: "D'light Technologies",
    details:
      "Built and deployed ML systems, dashboards, and AI-IoT solutions. Shipped Chitr, a live loss-prevention platform with strong precision and low false alarms.",
  },
  {
    period: "Sep 2022 - Sep 2023",
    role: "MSc Artificial Intelligence",
    org: "London Metropolitan University",
    details:
      "Completed with Distinction, focused on deep learning, computer vision, and production ML systems.",
  },
  {
    period: "Dec 2021 - Aug 2022",
    role: "Technical Analyst Intern",
    org: "Deserve Industrial Automation",
    details:
      "Worked on automation systems and VFD configuration while analyzing operational performance data.",
  },
  {
    period: "Aug 2018 - May 2022",
    role: "BE Electronics & Communications",
    org: "Gujarat Technological University",
    details:
      "Completed undergraduate engineering with a foundation in systems, electronics, and applied problem solving.",
  },
];

const skills = [
  "Python", "SQL", "PyTorch", "TensorFlow", "Keras", "Scikit-Learn", "OpenCV", "VideoMAE",
  "SlowFast", "YOLOv8", "FastAPI", "PostgreSQL", "MySQL", "MongoDB", "Docker", "Kubernetes",
  "Azure", "AWS", "MLflow", "Git", "Linux", "HTML/CSS", "Vanilla JS"
];

document.getElementById("journey-single").innerHTML = journeyData
  .map(
    (item) => `
      <article class="timeline-item">
        <div class="timeline-top">
          <div>
            <div class="timeline-role">${item.role}</div>
            <h3>${item.period}</h3>
          </div>
          <div class="timeline-org">${item.org}</div>
        </div>
        <p>${item.details}</p>
      </article>
    `
  )
  .join("");

document.getElementById("skills-grid").innerHTML = skills
  .map((skill) => `<span class="skill-pill">${skill}</span>`)
  .join("");
