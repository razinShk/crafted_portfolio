
 function updateTemplate() {
   const firstName = document.getElementById('firstName').value;
 const lastName = document.getElementById('lastName').value;
 const occupation = document.getElementById('occupation').value;
 const about = document.getElementById('about').value;

 document.querySelector('.name').textContent = `${firstName.toUpperCase()} ${lastName.toUpperCase()}`;
 document.querySelector('.occupation').textContent = occupation.toUpperCase();
 document.querySelector('.section-content').textContent = about;
  }

 document.getElementById('portfolioForm').addEventListener('input', updateTemplate);
