import { createCharacterCard } from "./components/card/card.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 1;
const page = 1;
const searchQuery = "";

nextButton.addEventListener("click", () => {
  if (page < maxPage) {
    page++;
    fetchCharacters();
  }
});

prevButton.addEventListener("click", () => {
  if (page > 1) {
    page--;
    fetchCharacters();
  }
});

async function fetchCharacters() {
  try {
    const response = await fetch(
      `https:rickandmortyapi.com/api/character?page=${page}`
    );

    if (response.ok) {
      const data = await response.json();
      maxPage = data.info.pages;
      pagination.textContent = `${page} / ${maxPage}`;
      return data;
    } else {
      console.error("Bad Response");
    }
  } catch (error) {
    console.error("An Error occurred");
  }
}

const data = await fetchCharacters();
data.innerHTML = "";
console.log(data.results);

data.results.forEach((character) => {
  createCharacterCard(character);
});
