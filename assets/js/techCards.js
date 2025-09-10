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

  Object.entries(techStack).forEach(([category, tools]) => {
    const categoryCard = document.createElement("div");
    categoryCard.className = "containerCard";

    const title = document.createElement("h2");
    title.textContent = category;
    categoryCard.appendChild(title);

    const subCardContainer = document.createElement("div");
    subCardContainer.className = "subCardContainer";

    tools.forEach(({ name, icon }) => {
      const subCard = document.createElement("div");
      subCard.className = "subCard";
      subCard.innerHTML = `<i class="bi ${icon}"></i> ${name}`;
      subCardContainer.appendChild(subCard);
    });

    categoryCard.appendChild(subCardContainer);
    container.appendChild(categoryCard);
  });
}
