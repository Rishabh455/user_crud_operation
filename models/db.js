const mongoose = require('mongoose');

const dotenv = require('dotenv');
dotenv.config();
// mongoose.connect('mongodb://localhost:27017/EmployeeDB', { useNewUrlParser: true }, (err) => {
//     if (!err) { console.log('connection to db done'); }
//     else{ console.log("error in db connection" + err);}
// });
mongoose.connect(process.env.MONGO_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
        
    },
    (err) => {
        if(err) console.log(err) 
        else console.log("mongdb is connected");
       }
);
require('./employee.model');
