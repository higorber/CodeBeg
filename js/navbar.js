document.addEventListener('DOMContentLoaded', function() {
  fetch('../navbar.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('navbar-placeholder').innerHTML = data;
      updateDateTime();
      setInterval(updateDateTime, 60000); // Update every minute
    })
    .catch(error => console.error('Error loading navbar:', error));
});

function updateDateTime() {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const year = now.getFullYear();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const dateTimeString = `${day}/${month}/${year}<span style="display:block">${hours}:${minutes}`;
  const datetimeElement = document.getElementById('datetime-info');
  if (datetimeElement) {
    datetimeElement.innerHTML = dateTimeString;
  }
}
