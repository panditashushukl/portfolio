function renderTechStackCards() {
  const techStack = {
    Languages: [
      { name: "JavaScript", icon: "bi bi-filetype-js" },
      { name: "Python", icon: "bi-filetype-py" },
      { name: "Java", icon: "bi-cup-hot-fill" },
      { name: "C", icon: "bi-code" },
      { name: "C++", icon: "bi-plus-circle" }
    ],
    Frontend: [
      { name: "HTML", icon: "bi-file-earmark-code" },
      { name: "CSS", icon: "bi bi-filetype-css" },
      { name: "React", icon: "bi-recycle" },
      { name: "React Native", icon: "bi-phone" },
      { name: "Tailwind CSS", icon: "bi-wind" },
      { name: "Bootstrap", icon: "bi-bootstrap" }
    ],
    Backend: [
      { name: "Node.js", icon: "bi-terminal" },
      { name: "Express", icon: "bi-gear-fill" },
      { name: "Flask", icon: "bi bi-code-square" }
    ],
    Database: [
      { name: "MongoDB", icon: "bi-database-check" },
      { name: "MySQL", icon: "bi-database-fill-lock" }
    ],
    Others: [
      { name: "Foundational Understanding", icon: "bi-book" },
      { name: "Adaptability", icon: "bi-arrow-repeat" },
      { name: "Eagerness to Learn", icon: "bi-rocket-takeoff-fill" }
    ]
  };

  const container = document.getElementById("techCardContainer");

  // Clear existing content (optional for re-renders)
  container.innerHTML = "";

  // Create a Bootstrap row
  const row = document.createElement("div");
  row.className = "row g-4"; // g-4 for gutter spacing

  Object.entries(techStack).forEach(([category, tools]) => {
    const col = document.createElement("div");
    col.className = "col-md-6 col-lg-4"; // 2 cards per row on md, 3 on lg

    const categoryCard = document.createElement("div");
    categoryCard.className = "containerCard p-3 border rounded shadow-sm h-100"; // Add your styling classes

    const title = document.createElement("h4");
    title.textContent = category;
    title.className = "mb-3 text-primary"; // Optional styling

    const subCardContainer = document.createElement("div");
    subCardContainer.className = "subCardContainer";

    tools.forEach(({ name, icon }) => {
      const subCard = document.createElement("div");
      subCard.className = "subCard mb-2"; // Add spacing between items
      subCard.innerHTML = `<i class="${icon} me-2"></i> ${name}`;
      subCardContainer.appendChild(subCard);
    });

    categoryCard.appendChild(title);
    categoryCard.appendChild(subCardContainer);
    col.appendChild(categoryCard);
    row.appendChild(col);
  });

  container.appendChild(row);
}
