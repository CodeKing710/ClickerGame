
if(process.env.DB_URI == null) {
  //Force require env vars
  require('dotenv').config();
  //Only run if DB being used
  if(process.env.DB_URI != null) {
    const mongoose = require('mongoose');

    mongoose.connect(process.env.DB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
    
    //Add more Schemas and Models below (Try to match name of model to export name)
    exports.User = require("./user");
  }
}

