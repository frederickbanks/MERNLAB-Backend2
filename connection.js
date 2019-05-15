// require mongoose
const mongoose = require("mongoose");
//set all promises to variable
mongoose.Promise = Promise;
// set live server to variable
const mongoURI = "mongodb://localhost/MERNLAB-backend2"

mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(instance =>
    console.log(`connected to db: ${instance.connections[0].name}`)).catch(err => console.log(err)
    )
    
  module.exports = mongoose