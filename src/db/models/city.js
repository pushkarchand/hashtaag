let mongoose = require('../index');
let Schema = mongoose.Schema;
mongoose.set('useFindAndModify', false);
let CitySchema = new Schema({
  name: String,
  urbanstatus: String,
  statecode: String,
  state: String,
  districtcode: String,
  district: String
});
module.exports = mongoose.model('City', CitySchema);