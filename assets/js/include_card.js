function includeHTML() {
  const elements = document.querySelectorAll('[include-html]');
  elements.forEach(async (el) => {
    const file = el.getAttribute('include-html');
    try {
      const response = await fetch(file);
      if (!response.ok) throw new Error("Failed to load " + file);
      const content = await response.text();
      el.innerHTML = content;
      el.removeAttribute('include-html');
      includeHTML(); // In case there are nested includes
    } catch (err) {
      el.innerHTML = `<p>Error loading ${file}</p>`;
      console.error(err);
    }
  });
}
includeHTML();