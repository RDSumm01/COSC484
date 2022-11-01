const express = require('express');
const url = require('url');
const app = express();
var cityArr = [ { price: 240000, city: 'baltimore' }, { price: 300000, city: 'austin' },
    { price: 400000, city: 'austin' }, { price: 1000000, city: 'seattle'}, { price:
    325000, city: 'baltimore' }, { price: 550000, city: 'seattle' }, { price: 250000,
    city: 'boston' } ];

app.get('/', function(req, res){
    res.send("root")
});

app.get('/v1/zillow/houses', function(req, res){
    var resArr = [];
    if(req.query.city != null){ //compare city parameter to given city names in cityArr, populate resArr with qualifying prices
        for(let i=0; i <= cityArr.length-1; i++){
            console.log(cityArr[i].city)
            if(req.query.city.toLowerCase() == cityArr[i].city){ //push any valid JSON objects into resArr if city names match
                resArr.push(cityArr[i])
            }
        };
        res.send(resArr)
    }
    else{ //return empty resArr if query is null
        res.send(resArr)
    }
});

//compare price parameter to given USD value in cityArr, populate resArr with qualifying prices
app.get('/v1/zillow/prices', function(req, res){ 
    var resArr = []
    for(let i=0; i <= cityArr.length-1; i++){
        if(req.query.usd >= cityArr[i].price){ //push any valid JSON object into resArr if value is less then or equal to USD query
            resArr.push(cityArr[i])
        }
    };
    res.send(resArr)
});

app.get('/v1/zillow/zestimate', function(req, res){
    res.send(jsonobj = { 'zestimate' : (req.query.sqft*req.query.bed*req.query.bath*10)});
});


app.listen(3000);
