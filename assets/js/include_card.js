async function includeHTML(maxRetries = 5, attempt = 0) {
  if (attempt >= maxRetries) {
    console.warn("includeHTML: max retries reached, stopping recursion");
    return;
  }

  const elements = document.querySelectorAll('[include-html]');
  if (elements.length === 0) return;

  const promises = Array.from(elements).map(async (el) => {
    const file = el.getAttribute('include-html');
    try {
      const response = await fetch(file);
      if (!response.ok) throw new Error("Failed to load " + file);
      const text = await response.text();

      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = text;

      tempDiv.querySelectorAll('link[rel="stylesheet"], style').forEach(style => {
        if (!document.head.querySelector(`style[data-href="${style.href}"], link[href="${style.href}"]`)) {
          document.head.appendChild(style.cloneNode(true));
        }
      });

      tempDiv.querySelectorAll('script').forEach(script => {
        const newScript = document.createElement('script');
        if (script.src) newScript.src = script.src;
        else newScript.textContent = script.textContent;
        document.body.appendChild(newScript);
      });

      el.innerHTML = tempDiv.innerHTML;
      el.removeAttribute('include-html');
    } catch (err) {
      el.innerHTML = `<p>Error loading ${file}</p>`;
      console.error(err);
    }
  });

  await Promise.all(promises);

  // Re-run if nested includes remain
  await includeHTML(maxRetries, attempt + 1);
}

// Global error handler for unhandled promise rejections
window.addEventListener('unhandledrejection', event => {
  console.error('Unhandled promise rejection:', event.reason);
});

