const apiUrl = "https://api.wheretheiss.at/v1/satellites/25544";

getIss();

async function getIss() {
    const response = await fetch(apiUrl); 
    const data = await response.json();
    console.log(data);

    document.getElementById('lat').textContent=data.latitude;
    document.getElementById('lon').textContent=data.longitude;

}