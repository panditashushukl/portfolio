async function includeHTML() {
  const elements = document.querySelectorAll('[include-html]');
  if (elements.length === 0) return;

  const promises = Array.from(elements).map(async (el) => {
    const file = el.getAttribute('include-html');
    try {
      const response = await fetch(file);
      if (!response.ok) throw new Error("Failed to load " + file);
      const text = await response.text();

      // Temporary container to parse HTML
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = text;

      // Move styles
      tempDiv.querySelectorAll('link[rel="stylesheet"], style').forEach(style => {
        document.head.appendChild(style.cloneNode(true));
      });

      // Move scripts
      tempDiv.querySelectorAll('script').forEach(script => {
        const newScript = document.createElement('script');
        if (script.src) {
          newScript.src = script.src;
        } else {
          newScript.textContent = script.textContent;
        }
        document.body.appendChild(newScript);
      });

      // Replace content (excluding moved styles/scripts)
      el.innerHTML = tempDiv.innerHTML;
      el.removeAttribute('include-html');
    } catch (err) {
      el.innerHTML = `<p>Error loading ${file}</p>`;
      console.error(err);
    }
  });

  // Wait for all includes in this pass to finish
  await Promise.all(promises);

  // 🔁 Now re-run to catch nested includes
  await includeHTML();
}

includeHTML();
