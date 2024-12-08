function loadPortfolioData() {
 const savedData = localStorage.getItem('portfolioData');
 if (savedData) {
  const portfolioData = JSON.parse(savedData);
  document.getElementById('fullName').textContent = `${portfolioData.firstName} ${portfolioData.lastName}`;
  document.getElementById('jobTitle').textContent = portfolioData.occupation;
  document.getElementById('aboutMe').textContent = portfolioData.about;
 } else {
  document.getElementById('fullName').textContent = 'No data available';
  document.getElementById('jobTitle').textContent = 'Please edit your portfolio';
  document.getElementById('aboutMe').textContent = 'Go to the edit page to add your information';
 }
}

window.addEventListener('load', loadPortfolioData);