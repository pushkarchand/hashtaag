const ExcelJS = require('exceljs');
const fs = require('fs');

exports.readCsv=()=>{
    let workbook = new ExcelJS.Workbook();
   return workbook.csv.readFile("./src/uploads/cities.csv")
    .then(()=> {
        let workSheet = workbook.getWorksheet(1);
        let listOfCities=[];
        workSheet.eachRow({ includeEmpty: true }, function(row, rowNumber) {
            if(rowNumber>1){
                const city={
                    name:workSheet.getCell(`B${rowNumber}`).value||'',
                    urbanstatus: workSheet.getCell(`C${rowNumber}`).value||'',
                    statecode: workSheet.getCell(`D${rowNumber}`).value||'',
                    state: workSheet.getCell(`E${rowNumber}`).value||'',
                    districtcode: workSheet.getCell(`F${rowNumber}`).value||'',
                    district: workSheet.getCell(`G${rowNumber}`).value||''
                   }
                   listOfCities.push(city);
                }
        })
        return listOfCities;
    })
    .catch(err=>{
        return [];
    })
}