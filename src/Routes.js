import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Foods from './pages/Foods';
import Profile from './pages/Profile';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/foods" component={ Foods } />
        {/* <Route exact path="/drinks" component={ Drinks } />
        <Route exact path="/explore" component={ Explore } /> */}
        <Route exact path="/profile" component={ Profile } />
        {/* <Route exact path="/explore/foods" component={ ExploreFoods } />
        <Route exact path="/explore/drinks" component={ ExploreDrinks } />
        <Route exact path="/done-recipes" component={ DoneRecipes } />
        <Route exact path="/favorite-recipes" component={ FavoriteRecipes } />
        <Route exact path="/explore/foods/ingredients" component={ ExploreFdsIngred } />
        <Route exact path="/explore/drinks/ingredients" component={ ExploreDksIngred } />
        <Route exact path="/explore/foods/nationalities" component={ ExploreFdsNation } />
        <Route exact path="*" component={ NotFoud } /> */}
      </Switch>
    );
  }
}
// Tela de detalhes de uma receita de comida: /foods/{id-da-receita};
// Tela de detalhes de uma receita de bebida: /drinks/{id-da-receita};
// Tela de receita em progresso de comida: /foods/{id-da-receita}/in-progress;
// Tela de receita em progresso de bebida: /drinks/{id-da-receita}/in-progress;
// Tela de explorar comidas por ingrediente: /explore/foods/ingredients;
// Tela de explorar bebidas por ingrediente: /explore/drinks/ingredients;
// Tela de explorar comidas por nacionalidade: /explore/foods/nationalities;
export default Routes;
