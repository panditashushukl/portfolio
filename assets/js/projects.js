const projects = [
  {
    title: "Samajik World",
    description:
      "Developed a full-stack Facebook Clone web application using the MERN stack, replicating core social media functionalities such as user authentication, profile management, posting and commenting.",
    links: {
      live: "https://samajik-world.vercel.app",
      github: "https://github.com/panditashushukl/SamajikWorld",
    },
    techStack: [
      {
        name: "React.js",
        icon: "bi-ui-checks-grid",
        desc: "Frontend library for building interactive user interfaces.",
      },
      {
        name: "Node.js",
        icon: "bi-terminal-fill",
        desc: "JavaScript runtime environment for executing backend code.",
      },
      {
        name: "Express.js",
        icon: "bi-server",
        desc: "Web framework for building backend APIs and handling server logic.",
      },
      {
        name: "MongoDB (Mongoose)",
        icon: "bi-database-fill",
        desc: "NoSQL database with Mongoose for object data modeling.",
      },
      {
        name: "Tailwind CSS",
        icon: "bi-brush",
        desc: "Utility-first CSS framework for rapid UI styling.",
      },
    ],
    features: [
      {
        title: "Profile Management",
        icon: "bi-person-lines-fill",
        desc: "Users can manage their Profile on the Platform.",
      },
      {
        title: "Microblogging",
        icon: "bi-chat-dots",
        desc: "Users can able to write Micro blog on the Social Media.",
      },
      {
        title: "Like & Commenting",
        icon: "bi-chat-left-text",
        desc: "Users can able to Like and Comment on the Platform.",
      },
    ],
  },
  {
    title: "Todos_MERN",
    description:
      "Developed a full-stack to-do list application using the MERN stack, featuring user authentication, CRUD functionality for task management, real-time updates, and a responsive UI. Implemented RESTful APIs, JWT-based auth, and MongoDB for persistent data storage.",
    links: {
      live: "https://to-dos-mern.vercel.app",
      github: "https://github.com/panditashushukl/ToDos_MERN",
    },
    techStack: [
      {
        name: "React.js",
        icon: "bi-ui-checks-grid",
        desc: "Frontend library for building interactive user interfaces.",
      },
      {
        name: "Node.js",
        icon: "bi-terminal-fill",
        desc: "JavaScript runtime environment for executing backend code.",
      },
      {
        name: "Express.js",
        icon: "bi-server",
        desc: "Web framework for building backend APIs and handling server logic.",
      },
      {
        name: "MongoDB (Mongoose)",
        icon: "bi-database-fill",
        desc: "NoSQL database with Mongoose for object data modeling.",
      },
      {
        name: "Tailwind CSS",
        icon: "bi-brush",
        desc: "Utility-first CSS framework for rapid UI styling.",
      },
    ],
    features: [
      {
        title: "Profile Management",
        icon: "bi-person-lines-fill",
        desc: "Users can manage their profile information, including name, email, and password securely.",
      },
      {
        title: "Managing Todos",
        icon: "bi-chat-dots",
        desc: "Users can create, update, delete, and mark tasks as completed using an intuitive task manager interface.",
      },
      {
        title: "Real-Time Update",
        icon: "bi-chat-left-text",
        desc: "Task lists dynamically update in real-time without needing to refresh the page, ensuring a seamless user experience.",
      },
    ],
  },
  {
    title: "BhaskarAcharya MathsSolver",
    description:
      "Developed a full-stack website and Mobile Application that evaluates complex mathematical expressions, displays step-by-step solutions, and visualizes results using dynamic graphs. The frontend captures user input and interacts with a Python-Flask backend for expression parsing and evaluation. The backend also generates visual graphs to help users understand function behavior.",
    links: {
      live: "https://mathssolver.vercel.app/BhaskarAcharya",
      github: "https://github.com/panditashushukl/189",
    },
    techStack: [
      {
        name: "React Native",
        icon: "bi-phone",
        desc: "Used to build cross-platform mobile applications using JavaScript and React.",
      },
      {
        name: "HTML",
        icon: "bi-code-slash",
        desc: "Used to structure the content and elements of the application.",
      },
      {
        name: "CSS",
        icon: "bi-palette",
        desc: "Used for styling and responsive layout design.",
      },
      {
        name: "JavaScript",
        icon: "bi-file-earmark-code",
        desc: "Adds interactivity and handles client-side logic.",
      },
      {
        name: "Python (Flask)",
        icon: "bi-terminal",
        desc: "Serves as the backend framework to handle routing and server-side logic.",
      },
      {
        name: "Matplotlib",
        icon: "bi-bar-chart-line",
        desc: "Used for plotting graphs and visualizing mathematical functions and results.",
      },
    ],
    features: [
      {
        title: "Solve expressions",
        icon: "bi-briefcase",
        desc: "Able to Solve Problems related to BODMAS, Linear Equations, Quadratic Equations and Functions.",
      },
      {
        title: "Step Solution",
        icon: "bi-card-checklist",
        desc: "Provide a detailed overview How a problem is solved.",
      },
      {
        title: "Provide Graph",
        icon: "bi-bar-chart",
        desc: "Instantly graph any equation to visualize your function and understand the relationship between variables.",
      },
    ],
  },
];

function renderProjects(projects) {
  const container = document.getElementById("projectContainer");
  if (!container) return;

  const allProjectsHTML = projects
    .map((project) => {
      const techHTML = project.techStack
        .map(
          (item) => `
      <div class="project-item col-lg-4 col-md-6 d-flex card" data-aos="fade-up">
        <div class="icon flex-shrink-0"><i class="bi ${item.icon} icon-container"></i></div>
        <div class = "description-container">
          <h4 class="title"><a href="javascript:void(0)" class="stretched-link">${item.name}</a></h4>
          <p class="description">${item.desc}</p>
        </div>
      </div>`
        )
        .join("");

      const featureHTML = project.features
        .map(
          (item) => `
      <div class="project-item col-lg-4 col-md-6 d-flex card" data-aos="fade-up">
        <div class="icon flex-shrink-0"><i class="bi ${item.icon}  icon-container"></i></div>
        <div class = "description-container">
          <h4 class="title"><a href="javascript:void(0)" class="stretched-link">${item.title}</a></h4>
          <p class="description">${item.desc}</p>
        </div>
      </div>`
        )
        .join("");

      const linkIcons = `
        <div class="mb-2">
          ${
            project.links.github
              ? `<a href="${project.links.github}" target="_blank" rel="noopener noreferrer" class="me-3" title="Get Source Code">
                  <i class="bi bi-github fs-4"></i>
                </a>`
              : ""
          }
          ${
            project.links.live
              ? `<a href="${project.links.live}" target="_blank" rel="noopener noreferrer" title="View Live">
                  <i class="bi bi-box-arrow-up-right fs-4"></i>
                </a>`
              : ""
          }
        </div>
      `;

      const iframePreview = project.links.live
        ? `
      <div class="iframe-container my-3">
        <iframe src="${project.links.live}" width="100%" height="400" frameborder="0" loading="lazy" style="border: 1px solid #ccc; border-radius: 8px;"></iframe>
      </div>`
        : "";

      return `
      <div class="containerCard mb-5" data-aos="fade-up">
        <h3><b>${project.title}</b></h3>
        ${linkIcons}
        <p>${project.description}</p>
        ${iframePreview}

        <h4 style="margin-top: 30px; margin-bottom: 10px;"><b>Tech Stack:</b></h4>
        <div class="row gy-4">${techHTML}</div>

        <h4 style="margin-top: 30px; margin-bottom: 10px;"><b>Key features:</b></h4>
        <div class="row gy-4">${featureHTML}</div>
      </div>`;
    })
    .join("");

  container.innerHTML = allProjectsHTML;
}
