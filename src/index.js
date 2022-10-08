const p = document.querySelector("p");
const pText = p.textContent;

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values_inclusive
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

function getRandomRGB() {
  const r = getRandomIntInclusive(0, 255);
  const g = getRandomIntInclusive(0, 255);
  const b = getRandomIntInclusive(0, 255);
  return `rgb(${r}, ${g}, ${b})`;
}

p.innerHTML = pText
  .split(" ")
  .map((word) => {
    const randomRGB = getRandomRGB();

    return `<span style="color: ${randomRGB}">${word}</span>`;
  })
  .join(" ");
