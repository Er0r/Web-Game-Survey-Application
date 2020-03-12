const voteforcod = document.getElementById('vote-btn-cod');
const voteforapex = document.getElementById('vote-btn-Apex');
const voteforpubg = document.getElementById('vote-btn-pubg');

const popcod = document.getElementById('stats-value-cod');
const popapex = document.getElementById('stats-value-apex');
const poppubg = document.getElementById('stats-value-pubg');

const codstats = document.getElementById('stats-views-cod');
const apexstats = document.getElementById('stats-views-apex');
const pubgstats = document.getElementById('stats-views-pubg');


function initialize(){
    popcod.value = 0;
    popapex.value = 0; 
    poppubg.value = 0; 
    codstats.value = 0;
    apexstats.value = 0;
    pubgstats.value = 0;
}


function addpopcod() {
    popcod.value = popcod.value+1;
    popcod.innerHTML = popcod.value;
    codstats.value +=1 ;
    pubgstats.innerHTML = codstats.value;
    apexstats.innerHTML = codstats.value;
    codstats.innerHTML = codstats.value;
    //console.log(parseInt(popcod.value)); 
}

function addpopapex() {
    popapex.value = popapex.value+1;
    popapex.innerHTML=popapex.value;
    codstats.value +=1 ;
    pubgstats.innerHTML = codstats.value;
    apexstats.innerHTML = codstats.value;
    codstats.innerHTML = codstats.value;
}

function addpoppubg() {
    poppubg.value = poppubg.value+1;
    poppubg.innerHTML=poppubg.value;
    codstats.value +=1 ;
    pubgstats.innerHTML = codstats.value;
    apexstats.innerHTML = codstats.value;
    codstats.innerHTML = codstats.value;
}