
function SearchController (model, searchView, resultsView)
{
    this.model = model;
    this.searchView = searchView;
    this.resultsView = resultsView;

   //configUI this is the initial setup for the controller
   this.configUI = async function()
   {
        const data = await model.init();
       
        //Pass the data to the View
        this.resultsView.configUI(data.results[0])

        //Category Filter
        const radios = this.searchView.view.querySelectorAll('input[type=radio]')

        radios.forEach(radio => {
            radio.addEventListener('change', this.onCheckedHandler)
        })
   }

   this.onCheckedHandler = (e) =>
   {
       console.log(e.currentTarget.value)
   }

   this.configUI()

   return this

}

export default SearchController