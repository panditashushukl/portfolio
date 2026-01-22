document.addEventListener('DOMContentLoaded', async () => {
  try {
    await includeHTML()
    
    initializeUI()

    renderProjects(projects)
    
    renderTechStackCards()

    setupEmailForm() 


  } catch (error) {
    console.error("Error during page initialization:", error);
  }
});