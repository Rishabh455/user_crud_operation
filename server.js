require('./models/db')

const express = require('express');
const path = require('path');
const Handlebars = require('handlebars')
const exphbs = require('express-handlebars');
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');
const employeeController = require('./controllers/employeeController')
//const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');
const bp = require("body-parser");
var app = express();
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
//const dotenv = require('dotenv');
app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs.engine({ extname: 'hbs',handlebars: allowInsecurePrototypeAccess(Handlebars),defaultLayout: 'mainLayout' ,layoutDir:__dirname+'/views/layouts/'}));
// app.engine('handlebars', exphbs.engine({
//     handlebars: allowInsecurePrototypeAccess(Handlebars)
// }));
//dotenv.config();
app.set('view engine', 'hbs');//bhs extension name
//app.set('view engine', 'handlebars');
// app.engine('hbs', exphbs.engine({
//     hbs: allowInsecurePrototypeAccess(hbs)
// }))
const port=process.env.PORT ||3000
app.listen(port, () => {
    console.log(('app on 3000'));
})
//app.use(employeeController);
app.use('/employee', employeeController);  