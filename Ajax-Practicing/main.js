$( document ).ready(function() {
    const searchAll = $("#searchAll");
    searchAll.click(() => {
        checkbox = $('#contryName');
        if(searchAll[0].checked) {
            checkbox[0].hidden = true;
        } else {
            checkbox[0].hidden = false;
        } 
    });
 
    $("#search").click(function(){
        if (searchAll[0].checked) {
             url = "https://restcountries.eu/rest/v2/all"
        } else {
            const name = $("#contryName")[0].value;
             url = `https://restcountries.eu/rest/v2/name/${name}`;
        }
        const searchMethod = $("input:checked");
        $.ajax({
            url: url,
            type: 'GET',
            success: function(res) {
                let template = '';
                if (res === '') {
                    countries = JSON.parse(res);
                } else {
                    countries = res;
                }
                for(let country of countries) {
                   template += `
                   <div class="col-4">
                   <div class="card bg-card border" style="width: 10rem;">
                    <img class="card-img-top" src="${country.flag}" style='max-width:300px;' alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">${country.name}</h5>
                        <P>Capital City: ${country.capital}</P>
                        <P>Country Currencies: ${country.currencies[0].name}</P>
                        <P>topLevelDomain: ${country.topLevelDomain}</P>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>
                   </div>

                   `;
                }
                $('#countryResults')[0].innerHTML = template;
            }
        });
          });
    })
 