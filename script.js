const userMap = {
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
    }
  });