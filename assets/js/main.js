document.addEventListener('DOMContentLoaded', async () => {
  try {
    await includeHTML();

    if (typeof renderProjects === "function" && typeof projects !== "undefined") {
      renderProjects(projects);
    }

    initializeUI()

    setupEmailForm() 

  } catch (error) {
    console.error("Error during page initialization:", error);
  }
});