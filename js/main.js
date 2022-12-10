

fetch('http://localhost:3030/')
  .then(response => response.json())
  .then(result => console.log(result))