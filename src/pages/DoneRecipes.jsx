import React from 'react';
import Header from '../components/Header';
import Button from '../components/Button';

function DoneRecipes() {
  const showSearchBtn = false;

  return (
    <>
      <Header
        showSearchBtn={ showSearchBtn }
      >
        Done Recipes
      </Header>
      <div className="filterButtons ">
        <Button data-testid="filter-by-all-btn">All</Button>
        <Button data-testid="filter-by-food-btn">Food</Button>
        <Button data-testid="filter-by-drink-btn">Drinks</Button>
      </div>
    </>
  );
}
export default DoneRecipes;
// O imagem do card de receita deve ter o atributo data-testid="${index}-horizontal-image";
// O texto da categoria da receita deve ter o atributo data-testid="${index}-horizontal-top-text";
// O texto do nome da receita deve ter o atributo data-testid="${index}-horizontal-name";
// O texto da data que a receita foi feita deve ter o atributo data-testid="${index}-horizontal-done-date";
// O elemento de compartilhar a receita deve ter o atributo data-testid="${index}-horizontal-share-btn";
// As tags da receita devem possuir o atributo data-testid=${index}-${tagName}-horizontal-tag;
