 
 import SwapiModel from './models/swapi.js';
 import SearchView from './views/search-view.js';
 import ResultsView from './views/results-view.js';
 import SearchController from './controllers/search-controller.js';
 window.addEventListener('load',function(e)
 {
     /* 
        MVC model View control

        SearchView
        ResultView
        Model
        Controller(searchview, resultview, model)
     */
    /* creating an instance of the swapiModel */

    const model = new SwapiModel();

    const searchView = new SearchView('#search');
    
    const resultsView = new ResultsView('#results');

    const searchController = new SearchController(model, searchView, resultsView);

    console.log(searchController)
  

 })