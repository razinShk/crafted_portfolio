function updateTemplate() {
 const firstName = document.getElementById('firstName').value;
 const lastName = document.getElementById('lastName').value;
 const occupation = document.getElementById('occupation').value;
 const about = document.getElementById('about').value;

 document.querySelector('.name').textContent = `${firstName} ${lastName}`;
 document.querySelector('.title').textContent = occupation;
 document.querySelector('.description').textContent = about;
}

function saveChanges() {
 const portfolioData = {
  firstName: document.getElementById('firstName').value,
  lastName: document.getElementById('lastName').value,
  occupation: document.getElementById('occupation').value,
  about: document.getElementById('about').value
 };

 localStorage.setItem('portfolioData', JSON.stringify(portfolioData));
 alert('Changes saved successfully! View your updated portfolio on the portfolio page.');
}

function loadSavedData() {
 const savedData = localStorage.getItem('portfolioData');
 if (savedData) {
  const portfolioData = JSON.parse(savedData);
  document.getElementById('firstName').value = portfolioData.firstName;
  document.getElementById('lastName').value = portfolioData.lastName;
  document.getElementById('occupation').value = portfolioData.occupation;
  document.getElementById('about').value = portfolioData.about;
  updateTemplate();
 }
}

document.getElementById('portfolioForm').addEventListener('input', updateTemplate);
document.getElementById('saveButton').addEventListener('click', saveChanges);
window.addEventListener('load', loadSavedData);