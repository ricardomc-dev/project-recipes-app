// Drinks
export function ingredientDrinksApi(ingrediente) {
  return fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingrediente}`)
    .then((response) => response.json())
    .then((data) => data.drinks)
    .catch((error) => error === null);
}

export function nameDrinksApi(nome) {
  return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nome}`)
    .then((response) => response.json())
    .then((data) => data.drinks)
    .catch((error) => error);
}

export function firstLetterDrinksApi(primeiraLetra) {
  return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${primeiraLetra}`)
    .then((response) => response.json())
    .then((data) => data.drinks)
    .catch((error) => error);
}
