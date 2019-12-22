let City = require('../db/models/city');

exports.getDistrictDetails=(req,res)=>{
    const listOfCities=[];
    const districtName=req.query.q||'';
    City.find({district:{ "$regex":districtName,"$options": "i"}}).exec()
    .then(districtDetails=>{
        districtDetails.forEach(item=>{
            const cityItem={
                town:item.name?item.name:"",
                Urban_status:item.urbanstatus?item.urbanstatus:"",
                State_code:item.statecode?item.statecode:"",
                State:item.state?item.state:"",
                District_code:item.districtcode?item.districtcode:"",
                District:item.district?item.district:""
            }
            listOfCities.push(cityItem);
        })
        res.send(listOfCities);
    })
}