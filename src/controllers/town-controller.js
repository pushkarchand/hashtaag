let City = require('../db/models/city');
let utils=require('../utils/csvreader');

exports.getTownDetails=(req,res)=>{
    const listOfTowns=[];
    const townName=req.query.q||'';
    City.find({name:{ "$regex":townName,"$options": "i"}}).exec()
    .then(townDetails=>{
        townDetails.forEach(item=>{
            const town={
                town:item.name?item.name:"",
                state:item.state?item.state:"",
                district:item.district?item.district:""
            }
            listOfTowns.push(town);
        })
        res.send(listOfTowns);
    })
}

exports.createTowns=(req,res)=>{
    utils.readCsv()
    .then(citiesResponse=>{
        console.log(citiesResponse);
        City.find().exec()
        .then(cities=>{
            if(cities.length===0){
                citiesResponse.forEach(city=>{
                    if(city){
                        new City(city).save()
                        .then(city => {
                            console.log(city);
                        })
                    }
                })
            } else {
                citiesResponse.forEach(city=>{
                    City.findOneAndUpdate({"name":city.name},city,{upsert: true, new: true, setDefaultsOnInsert: true})
                    .then(city => {
                        console.log(city);
                    })
                })
            }
        })
        res.send(citiesResponse);
    })
}