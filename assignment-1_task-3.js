
//  Create an array of city weather objects

let weatherData = [
    { cityName: "Vadodara", temperature: 22, condition: "Rainy" },
    { cityName: "Surat", temperature: 16, condition: "Cloudy" },
    { cityName: "Changa", temperature: 30, condition: "Sunny" }
];

//  Functions:

//  Add City Weather
const addCityWeather = (cityName, temperature, condition) => {
    weatherData.push({ cityName, temperature, condition });
};
console.log(weatherData);

//  Find Hottest City
const findHottestCity = () => {
    return weatherData.reduce((hottest, city) => 
        city.temperature > hottest.temperature ? city : hottest, weatherData[0]);
};
console.log(findHottestCity())

//  Filter by Condition
const filterByCondition = (condition) => {
    return weatherData.filter(city => city.condition === condition);
};
console.log(filterByCondition("Sunny"))

//  Use map() to create a list of city names with their temperatures
const listCityTemperatures = () => {
    return weatherData.map(city => `City: [${city.cityName}], Temp: [${city.temperature}]°C`);
};
console.log(listCityTemperatures())



const logWeatherSummary = () => {
    weatherData.forEach(({ cityName, temperature, condition }) => {
        console.log(`City: [${cityName}], Temp: [${temperature}]°C, Condition: [${condition}]`);});
};
