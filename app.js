const totalCase=document.getElementById('totalCase');
const totalDeath=document.getElementById('totalDeath');
const totalRecovered=document.getElementById('totalRecovered');
const bdTotalCase=document.getElementById('bdtotalCase');
const bdTotalDeath=document.getElementById('bdtotalDeath');
const bdTotalRecovered=document.getElementById('bdtotalRecovered');
const newCase=document.getElementById('bdNewCase')



fetch ('https://api.covid19api.com/summary')
.then (response=>response.json())

.then (json=>displayData(json))




function displayData(data){

const newTotalCase=` ${ data.Global.TotalConfirmed}`;
const newTotalDeath=` ${data.Global.TotalDeaths}`;
const newTotalRecovered=` ${data.Global.TotalRecovered}`;
const bdNewCase=` ${data.Countries[13].NewConfirmed}`;
const bdNewTotalCase=` ${ data.Countries[13].TotalConfirmed}`;
const bdNewTotalDeath=` ${data.Countries[13].TotalDeaths}`;
const bdNewTotalRecovered=` ${data.Countries[13].TotalRecovered}`;
totalCase.innerHTML=newTotalCase;
totalDeath.innerHTML=newTotalDeath;
totalRecovered.innerHTML=newTotalRecovered;
newCase.innerHTML=bdNewCase;
bdTotalCase.innerHTML=bdNewTotalCase;
bdTotalDeath.innerHTML=bdNewTotalDeath;
bdTotalRecovered.innerHTML=bdNewTotalRecovered;



}


document.getElementById('update').addEventListener('click',function(){


    location.reload();



})

