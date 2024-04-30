const cardContainer = document.querySelector('[data-js="card-container"]');

export function createCharacterCard() {
  // li element
  const card = document.createElement("li");
  card.setAttribute("class", "card");
  cardContainer.append(card);

  // div image container
  const cardImageContainer = document.createElement("div");
  cardImageContainer.setAttribute("class", "card__image-container");
  card.append(cardImageContainer);

  // img element
  const cardImage = document.createElement("img");
  cardImage.setAttribute("class", "card__image-container");
  cardImage.setAttribute(
    "src",
    "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
  );
  cardImage.setAttribute("alt", "Max Musterfrau");
  cardImageContainer.append(cardImage);

  // div img gradient
  const cardImageGradient = document.createElement("div");
  cardImageGradient.setAttribute("class", "card__image-gradient");
  cardImageContainer.append(cardImageGradient);

  // div card Content
  const cardContent = document.createElement("div");
  cardContent.setAttribute("class", "card__content");
  card.append(cardContent);

  // h2 card title
  const cardTitle = document.createElement("h2");
  cardTitle.setAttribute("class", "card__title");
  cardTitle.textContent = "Max Mustermann";
  cardContent.append(cardTitle);

  // dl card Info
  const cardInfo = document.createElement("dl");
  cardInfo.setAttribute("class", "card__info");
  cardContent.append(cardInfo);

  // dt card info status title
  const cardInfoStatusTitle = document.createElement("dt");
  cardInfoStatusTitle.setAttribute("class", "card__info-title");
  cardInfoStatusTitle.textContent = "Status";
  cardInfo.append(cardInfoStatusTitle);

  // dd card info status description
  const cardInfoStatusDescription = document.createElement("dd");
  cardInfoStatusDescription.setAttribute("class", "card__info-description");
  cardInfo.append(cardInfoStatusDescription);

  // dt card info type title
  const cardInfoTypeTitle = document.createElement("dt");
  cardInfoTypeTitle.setAttribute("class", "card__info-title");
  cardInfoTypeTitle.textContent = "Type";
  cardInfo.append(cardInfoTypeTitle);

  // dd card info type description
  const cardInfoTypeDescription = document.createElement("dd");
  cardInfoTypeDescription.setAttribute("class", "card__info-description");
  cardInfo.append(cardInfoTypeDescription);

  // dt card info occurences title
  const cardInfoOccurencesTitle = document.createElement("dt");
  cardInfoOccurencesTitle.setAttribute("class", "card__info-title");
  cardInfoOccurencesTitle.textContent = "Occurences";
  cardInfo.append(cardInfoOccurencesTitle);

  // dd card info occurences description
  const cardInfoOccurencesDescription = document.createElement("dd");
  cardInfoOccurencesDescription.setAttribute("class", "card__info-description");
  cardInfo.append(cardInfoOccurencesDescription);
}
