let City = require('../db/models/city');

exports.getStateDetails=(req,res)=>{
    const listOfDistricts=[];
    const stateName=req.query.q||'';
    City.find({state:{ "$regex":stateName,"$options": "i"}}).exec()
    .then(stateDistrictsResponse=>{
        stateDistrictsResponse.forEach(item=>{
            const districtInstance={
                state:item.state?item.state:"",
                district_code:item.districtcode?item.districtcode:"",
                district:item.district?item.district:""
            }
            listOfDistricts.push(districtInstance);
        })
        res.send(listOfDistricts);
    })
}