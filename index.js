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

async function fetchCharacters() {
  try {
    const response = await fetch(
      "https:rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20"
    );

    if (Response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error("Bad Response");
    }
  } catch (error) {
    console.error("An Error occurred");
  }
}

const characters = ["string", "of", "character", "names"];
characters.forEach((character) => {
  const characterCard = document.createElement("div");
  //characterCard.textcontent = character;
  //characterCard.classList.add('nameNeeded')
  characterCard.innerHTML = `
  <img src ="${}" alt="" class= "">`
// finish card details here 
  document.body.append(characterCard);
  // append correctly 
});
