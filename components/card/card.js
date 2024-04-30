const cardContainer = document.querySelector('[data-js="card-container"]');

export function createCharacterCard() {
  const card = document.createElement("list");
  card.setAttribute("class", "card");
  let card_testInput = "please work";
  cardContainer.append(card);
}
