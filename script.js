// Functionality for first.html
if (window.location.pathname.includes('index.html')) {
  document.getElementById('next-btn').addEventListener('click', () => {
      // Redirect to second.html
      window.location.href = 'second.html';
  });
}

// Functionality for second.html
if (window.location.pathname.includes('second.html')) {
  document.getElementById('conversion-form').addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent form from refreshing the page

      const fromReligion = document.getElementById('from-religion').value;
      const toReligion = document.getElementById('to-religion').value;
      const jurisdiction = document.getElementById('jurisdiction').value;

      // Validation: Check if "From Religion" and "To Religion" are the same
      if (fromReligion === toReligion) {
          alert('The "From Religion" and "To Religion" cannot be the same for conversion.');
          return;
      }

      // Validation: Ensure jurisdiction is selected
      if (jurisdiction === "") {
          alert('Please select a jurisdiction.');
          return;
      }

      // If all validations pass, redirect to converse.html
      window.location.href = 'converse.html';
  });
}

// Optional functionality for converse.html
if (window.location.pathname.includes('converse.html')) {
  console.log("Now on the Converse Page");
}
