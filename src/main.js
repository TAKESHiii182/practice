const button = document.getElementById('btn');
const heading = document.getElementById('title');

let defaultColor = '#000';
button.addEventListener('click', function () {
  if (defaultColor) {
    heading.style.color = '#fff';
  } else {
    heading.style.color = '#000';
  }
  defaultColor = !defaultColor;
});
