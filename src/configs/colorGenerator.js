const hexCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function generateNewColor() {
  let color = "#";

  for (let i = 0; i < 6; i++) {
    const randomPosition = Math.floor(Math.random() * hexCharacters.length);

    color += hexCharacters[randomPosition];
  }

  return color;
}

export function colorGenerator() {
  const colors = new Set();

  while (colors.size < 15) {
    colors.add(generateNewColor());
  }

  return [...colors];
}
