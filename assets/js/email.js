// Email form setup function
function setupEmailForm() {
  const btn = document.getElementById('email-button');
  const form = document.getElementById('email-form');

  if (!form || !btn) {
    console.warn('Email form or button not found.');
    return;
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Update button text
    if (btn.tagName === 'BUTTON') {
      btn.textContent = 'Sending...';
    } else {
      btn.value = 'Sending...';
    }

    const serviceID = 'default_service';
    const templateID = 'template_nu27hbi';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        if (btn.tagName === 'BUTTON') {
          btn.textContent = 'Send Email';
        } else {
          btn.value = 'Send Email';
        }
        alert('Sent!');
      }, (err) => {
        if (btn.tagName === 'BUTTON') {
          btn.textContent = 'Send Email';
        } else {
          btn.value = 'Send Email';
        }
        alert(JSON.stringify(err));
      });
  });
}