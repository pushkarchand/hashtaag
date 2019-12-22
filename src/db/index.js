let mongoose = require('mongoose');
mongoose.connect('mongodb+srv://newuser_9060:White123@cluster0-6k5qm.mongodb.net/test?retryWrites=true&w=majority',{ useNewUrlParser: true,useUnifiedTopology: true });

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection Error : '));
db.once('open', function(){
  console.log('Connection ok!');
});

module.exports = mongoose;