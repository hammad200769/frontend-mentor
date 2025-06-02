document.getElementById('infoForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();

  if (!name || !email || !phone) {
    alert("Please fill out all fields.");
    return;
  }

  alert("Proceeding to next step...");
  // Add navigation logic here
});
