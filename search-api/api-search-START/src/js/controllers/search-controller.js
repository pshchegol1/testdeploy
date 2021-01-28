
function SearchController (model, searchView, resultsView)
{
    this.model = model;
    this.searchView = searchView;
    this.resultsView = resultsView;
    this.category = 'people';

   //configUI this is the initial setup for the controller
   this.configUI = async function()
   {
        this.searchView.view.addEventListener('submit', this.onHandleSubmit)
        const data = await model.init();
       
        //Pass the data to the View
        this.resultsView.configUI(data.results[0])

        //Category Filter
        const radios = this.searchView.view.querySelectorAll('input[type=radio]')

        radios.forEach(radio => {
            radio.addEventListener('change', this.onCheckedHandler)
        })
   }

   this.onHandleSubmit = async (e) =>
   {
       e.preventDefault();

       //No Validation

       //Take  from name and values
       const queryParams = {
           category:this.category,
           name:e.currentTarget.searchTerm.value
       }

       const searchResponse = await this.model.search(queryParams)
       resultsView.renderPeople(searchResponse);
   }

   this.onCheckedHandler = (e) =>
   {
       this.category = e.currentTarget.value;
       this.searchView.updateLabel( this.category)
   }

   this.configUI()

   return this

}

export default SearchController