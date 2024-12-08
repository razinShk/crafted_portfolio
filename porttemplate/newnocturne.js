// Save portfolio data
function savePortfolioData() {
 const portfolioData = {
  firstName: document.getElementById('firstName').value,
  lastName: document.getElementById('lastName').value,
  occupation: document.getElementById('occupation').value,
  about: document.getElementById('about').value
  // Add more fields as needed
 };

 localStorage.setItem('portfolioData', JSON.stringify(portfolioData));
 alert('Changes saved successfully! View your updated portfolio on the nocturne page.');
}

// Load portfolio data
function loadPortfolioData() {
 const savedData = localStorage.getItem('portfolioData');
 if (savedData) {
  const portfolioData = JSON.parse(savedData);

  // Update nocturne.html
  document.querySelector('.name').textContent = `${portfolioData.firstName.toUpperCase()} ${portfolioData.lastName.toUpperCase()}`;
  document.querySelector('.header-content > :nth-child(2)').textContent = portfolioData.occupation.toUpperCase();
  document.querySelector('.section:nth-of-type(1) .section-content').textContent = portfolioData.about;

  // Update portTemplate.html if on that page
  if (document.getElementById('firstName')) {
   document.getElementById('firstName').value = portfolioData.firstName;
   document.getElementById('lastName').value = portfolioData.lastName;
   document.getElementById('occupation').value = portfolioData.occupation;
   document.getElementById('about').value = portfolioData.about;
  }
 }
}

// Event listeners
if (document.getElementById('portfolioForm')) {
 document.getElementById('portfolioForm').addEventListener('submit', function (e) {
  e.preventDefault();
  savePortfolioData();
 });
}

// Load data when the page loads
window.addEventListener('load', loadPortfolioData);