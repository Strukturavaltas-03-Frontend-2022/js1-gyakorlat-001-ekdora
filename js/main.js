let elements = document.getElementsByClassName("button");

const handleClick = (element) => {
  if (element) {
    element.addEventListener("click", () => console.log(element.textContent));
  }
}

for (let i = 0; i < elements.length; i++) {
  handleClick(elements[i]);
}

