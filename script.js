// footer section
  // Fetch the footer.html content and insert it into the footer-placeholder div
  fetch('footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer-placeholder').innerHTML = data;
  });

// Fetch the header.html content and insert it into the header-placeholder div
fetch('header.html')
.then(response => response.text())
.then(data => {
  document.getElementById('header-placeholder').innerHTML = data;
});