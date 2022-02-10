// foods
export function ingredientApi(ingredient) {
  return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
    .then((response) => response.json())
    .then((data) => data.meals)
    .catch((error) => error);
}

export function nameApi(nome) {
  return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${nome}`)
    .then((response) => response.json())
    .then((data) => data.meals)
    .catch((error) => error);
}

// Carregamento aleatório Foods "Surprise Me"
export function randomMealsApi() {
  return fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then((response) => response.json())
    .then((data) => data.meals)
    .catch((error) => error);
}

export function firstLetterApi(primeiraLetra) {
  return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${primeiraLetra}`)
    .then((response) => response.json())
    .then((data) => data.meals)
    .catch((error) => error);
}

export function detailApi(idReceita) {
  return fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idReceita}`)
    .then((response) => response.json())
    .then((data) => data.meals)
    .catch((error) => error);
}

// Retorna os botões de filtro
export function filterFoodButtons() {
  return fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
    .then((response) => response.json())
    .then((data) => data.meals)
    .catch((error) => error);
}
