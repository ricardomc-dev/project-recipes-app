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

export function defaultMealsApi() {
  return fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
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
