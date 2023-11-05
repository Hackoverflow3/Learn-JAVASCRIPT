let input = document.getElementById("input_name");
console.log(typeof(input));
const search = document.getElementById("button_search");




search.addEventListener("click",async () => {
    console.log("SEARCHING FOR WEATHER");
    const data = await getData(input.value);
    console.log(data);

});

async function getData(clientData){
    console.log(typeof(`http://api.weatherapi.com/v1/current.json?key=b9c442379527416e9dc94707233010&q=${clientData}&aqi=yes`));
    console.log(clientData);
    let response = await fetch(`http://api.weatherapi.com/v1/current.json?key=b9c442379527416e9dc94707233010&q=${clientData}&aqi=yes`);
    console.log("YE HAI RESPONSE:");
    console.log(response);
    return await response.json();
}




