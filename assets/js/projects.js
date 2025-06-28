const projects = [
    {
      title: "BhaskarAcharya MathsSolver",
      url: "https://mathssolver.vercel.app/BhaskarAcharya",
      description: "Developed a full-stack website and Mobile Application that evaluates complex mathematical expressions, displays step-by-step solutions, and visualizes results using dynamic graphs. The frontend captures user input and interacts with a Python-Flask backend for expression parsing and evaluation. The backend also generates visual graphs to help users understand function behavior.",
      techStack: [
        { name: "React Native", icon: "bi-phone", desc: "Used to build cross-platform mobile applications using JavaScript and React." },
        { name: "HTML", icon: "bi-code-slash", desc: "Used to structure the content and elements of the application." },
        { name: "CSS", icon: "bi-palette", desc: "Used for styling and responsive layout design." },
        { name: "JavaScript", icon: "bi-file-earmark-code", desc: "Adds interactivity and handles client-side logic." },
        { name: "Python (Flask)", icon: "bi-terminal", desc: "Serves as the backend framework to handle routing and server-side logic." },
        { name: "Matplotlib", icon: "bi-bar-chart-line", desc: "Used for plotting graphs and visualizing mathematical functions and results." }
      ],
      features: [
        { title: "Solve expressions", icon: "bi-briefcase", desc: "Able to Solve Problems related to BODMAS, Linear Equations, Quadratic Equations and Functions." },
        { title: "Step Solution", icon: "bi-card-checklist", desc: "Provide a detailed overview How a problem is solved." },
        { title: "Provide Graph", icon: "bi-bar-chart", desc: "Instantly graph any equation to visualize your function and understand the relationship between variables." }
      ]
    },
    {
      title: "A Facebook Clone",
      url: null,
      description: "Developed a full-stack Facebook Clone web application using the MERN stack, replicating core social media functionalities such as user authentication, profile management, posting and commenting.",
      techStack: [
        { name: "React.js", icon: "bi-ui-checks-grid", desc: "Frontend library for building interactive user interfaces." },
        { name: "Node.js", icon: "bi-terminal-fill", desc: "JavaScript runtime environment for executing backend code." },
        { name: "Express.js", icon: "bi-server", desc: "Web framework for building backend APIs and handling server logic." },
        { name: "MongoDB (Mongoose)", icon: "bi-database-fill", desc: "NoSQL database with Mongoose for object data modeling." },
        { name: "Tailwind CSS", icon: "bi-brush", desc: "Utility-first CSS framework for rapid UI styling." }
      ],
      features: [
        { title: "Posting", icon: "bi-chat-dots", desc: "Users can able to Post on the Social Media." },
        { title: "Commenting", icon: "bi-chat-left-text", desc: "Users can able to Like and Comment on the Platform." },
        { title: "Profile Management", icon: "bi-person-lines-fill", desc: "Users can manage their Profile on the Platform." }
      ]
    }
];
function renderProjects(projects) {
  const container = document.getElementById('projectContainer');
  if (!container) return;

  // Build full HTML string first to avoid multiple DOM writes
  const allProjectsHTML = projects.map(project => {
    const techHTML = project.techStack.map(item => `
      <div class="col-lg-4 col-md-6 project-item d-flex" data-aos="fade-up">
        <div class="icon flex-shrink-0"><i class="bi ${item.icon}"></i></div>
        <div>
          <h4 class="title"><a href="javascript:void(0)" class="stretched-link">${item.name}</a></h4>
          <p class="description">${item.desc}</p>
        </div>
      </div>`).join("");

    const featureHTML = project.features.map(item => `
      <div class="col-lg-4 col-md-6 project-item d-flex" data-aos="fade-up">
        <div class="icon flex-shrink-0"><i class="bi ${item.icon}"></i></div>
        <div>
          <h4 class="title"><a href="javascript:void(0)" class="stretched-link">${item.title}</a></h4>
          <p class="description">${item.desc}</p>
        </div>
      </div>`).join("");

    return `
      <div class="projectCard" data-aos="fade-up">
        <h3>${project.url 
          ? `<a href="${project.url}" target="_blank" rel="noopener noreferrer" class="stretched-link"><b>${project.title}</b></a>` 
          : `<b>${project.title}</b>`}</h3>
        <p>${project.description}</p>

        <h4 style="margin-top: 30px; margin-bottom: 10px;"><b>Tech Stack:</b></h4>
        <div class="row gy-4">${techHTML}</div>

        <h4 style="margin-top: 30px; margin-bottom: 10px;"><b>Key features:</b></h4>
        <div class="row gy-4">${featureHTML}</div>
      </div>`;
  }).join("");

  container.innerHTML = allProjectsHTML;
}

document.addEventListener('DOMContentLoaded', async () => {
  const preloader = document.querySelector('#preloader');
  const removePreloader = () => {
    if (preloader && preloader.parentNode) {
      preloader.parentNode.removeChild(preloader);
    }
  };

  // Fallback: Remove preloader after 30 seconds
  const preloaderTimeout = setTimeout(removePreloader, 30000);

  await includeHTML();
  renderProjects(projects);

  window.addEventListener('load', () => {
    clearTimeout(preloaderTimeout);
    removePreloader();
  });
});
