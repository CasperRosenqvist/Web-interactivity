const dataSrc = "measures.json"

const getData = async () => {
    const response = await fetch(dataSrc);
    const data = await response.json();
    const dataArray = [];
    for (let k in data) {
        const measure = data[k].Measures;
        dataArray.push(measure);
    }
    console.log(dataArray);
    const minAirPreassure = d3.min(dataArray, d => parseFloat(d.AirPressure.replace(",", ".")));
    const maxAirPreassure = d3.max(dataArray, d => parseFloat(d.AirPressure.replace(",", ".")));
    const minTemp = d3.min(dataArray, d => d.Temp);
    const maxTemp = d3.max(dataArray, d => d.Temp);
    const minHumidity = d3.min(dataArray, d => d.Humidity);
    const maxHumidity = d3.max(dataArray, d => d.Humidity);
    console.log(minAirPreassure + " mmHg");
    console.log(maxAirPreassure + " mmHg");
    console.log(minTemp + " °C");
    console.log(maxTemp + " °C");
    console.log(minHumidity + " %");
    console.log(maxHumidity + " %");
};

getData();



