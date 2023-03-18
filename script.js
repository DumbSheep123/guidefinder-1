let userMap = {
    "pie": "/pietrainingguide",
    "malla": "/malltrainingguide",
    "yandrak": "/yandraktrainingguide",
    "joni": "/jonitrainingguide"
  };
  
  document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    var dropdown = document.querySelector("#dropdown");
    var selectedOption = dropdown.options[dropdown.selectedIndex].value;
    if (selectedOption in userMap) {
      window.location.href = userMap[selectedOption];
    } else {
      alert('It would appear as though there\'s an error on our part that\'s preventing the completion of your request. Please try again later.');
    }
  });