/* 
swap base url: 'https://swapi.dev/api/'

initial query people?search=luke'

*/

function SwapiModel()
{
    this.apiBaseurl = 'https://swapi.dev/api/'

    //init function is called by the searchController to init the UI of the resultsView
    this.init = function ()
    {
        const result = this.query('https://swapi.dev/api/people?search=luke')
        return result
    }

    //Promise
    this.query = async function(url)
    {
        const req = await fetch(url)
        const res = await req.json()
        return res
    }
    this.search = async function(searchStuff)
    {
        //Set up the URL
        const {category, name} = {...searchStuff}
        let url = new URL(this.apiBaseurl + category + '?')

        const params = new URLSearchParams() 
        params.set('search', name)
        url = url + params
        const req = await fetch(url)
        const res = await req.json()
        console.log(res)
        return res

      
    }
    return this;

}

export default SwapiModel

 