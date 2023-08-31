const sendDataFromForm = event => {
    event.preventDefault();

    var country = document.getElementById('country').value;
    var date = document.getElementById('date').value;

    window.searchData(country, date);
}

document.getElementById('search-form').addEventListener('submit', sendDataFromForm);

function init(){
    window.searchData('usa', '2022-01-10');
}

init();