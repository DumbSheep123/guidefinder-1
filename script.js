let userMap = {
  "pie": "/pietrainingguide",
  "malla": "/malltrainingguide",
  "yandrak": "/yandraktrainingguide",
  "joni": "/jonitrainingguide"
};

let newUserMap = {
  "john": "/johntrainingguide",
  "jane": "/janetrainingguide"
};

var form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var dropdown = document.querySelector("#dropdown");
    var selectedOption = dropdown.options[dropdown.selectedIndex].value;
    if (selectedOption in userMap) {
      window.location.href = userMap[selectedOption];
    } else if (selectedOption in newUserMap) {
      window.location.href = newUserMap[selectedOption];
    }
  });
}
