let userMap = {
  "pie": "/pietrainingguide",
  "malla": "/malltrainingguide",
  "yandrak": "/yandraktrainingguide",
  "joni": "/jonitrainingguide"
};

var form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var dropdown = document.querySelector("#dropdown");
    var selectedOption = dropdown.options[dropdown.selectedIndex].value;
    if (selectedOption in userMap) {
      window.location.href = userMap[selectedOption];
    }
  });
}