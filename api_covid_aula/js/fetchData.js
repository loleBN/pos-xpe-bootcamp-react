let myGraph;

const createGraph = response => {
    const apiData = response.data.data;

    const context = document.getElementById('chart-container').getContext('2d');
    
    if(myGraph) {
        myGraph.destroy();
    }
    myGraph = new Chart(context,{
        type: 'pie',
        data: {
            labels: ['Mortes', 'Confirmados', 'Confirmados Descartados'],
            datasets: [
                {
                    data: [apiData.deaths, apiData.confirmed, apiData.confirmed_diff],
                    backgroundColor: ['red', 'blue', 'green']
                }
            ] 
        }
    })

}

const searchData = ( countrySearch, dateSearch ) => {
    axios.get(`https://covid-api.com/api/reports/total?date=${dateSearch}&iso${countrySearch}`)
    .then(createGraph)
    .catch((error) => console.error(error))
}

//export searchData funtion
window.searchData = searchData;