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

// Carregada no iniciar da página principal de Foods
export function defaultDrinksApi() {
  return fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
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

export function detailDrinksApi(idReceita) {
  return fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceita}`)
    .then((response) => response.json())
    .then((data) => data.drinks)
    .catch((error) => error);
}

// Retorna os botões de filtro
export function filterDrinkButtons() {
  return fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
    .then((response) => response.json())
    .then((data) => data.drinks)
    .catch((error) => error);
}

export function detailDrinksApi(idReceita) {
  return fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceita}`)
    .then((response) => response.json())
    .then((data) => data.drinks)
    .catch((error) => error);
}
